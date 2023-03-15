import { Injectable } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Injectable({
  providedIn: "root"
})
export class DiffBuilderService {

  constructor(private sanitizer: DomSanitizer) { }

  getDiffComponents(c1, c2) {
    const cD = [];  // diffComponents
    let iL1 = 0;   // Long iterator, left side.
    let iL2 = 0;   // Long iterator, right side.
    let iS1 = 0;   // Short iterator, left side.
    let iS2 = 0;   // Short iterator, right side.

    while ((iL1 < c1.length) || (iL2 < c2.length)) {
      if (iL1 >= c1.length) {
        cD.push({left: null, right: c2[iL2]});
      } else if (iL2 >= c2.length) {
        cD.push({left: c1[iL1], right: null});
      } else if (this.areEqual(c1[iL1], c2[iL2])) {
        const diff = {left: c1[iL1], right: c2[iL2]};
        this.addDiffProperties(diff, "update");
        cD.push(diff);
      } else {
        iS1 = iL1 + 1;
        iS2 = iL2 + 1;
        let fS = false;
        while ((iS1 < c1.length) || (iS2 < c2.length)) {
          if ((iS2 < c2.length) && this.areEqual(c1[iL1], c2[iS2])) {
            for (let a = iL2; a < iS2; a++) {
              cD.push({left: null, right: c2[a]});
            }
            const diff = {left: c1[iL1], right: c2[iS2]};
            this.addDiffProperties(diff, "update");
            cD.push(diff);
            iL2 = iS2;
            fS = true;
            break;
          }
          if ((iS1 < c1.length) && this.areEqual(c2[iL2], c1[iS1])) {
            for (let a = iL1; a < iS1; a++) {
              cD.push({left: c1[a], right: null});
            }
            const diff = {left: c1[iS1], right: c2[iL2]};
            this.addDiffProperties(diff, "update");
            cD.push(diff);
            iL1 = iS1;
            fS = true;
            break;
          }
          iS1++;
          iS2++;
        }
        if (!fS) {
          cD.push({left: c1[iL1], right: null});
          cD.push({left: null, right: c2[iL2]});
        }
      }
      iL1++;
      iL2++;
    }

    this.setInsertUpdateDelete(cD);
    this.setTrail(cD);

    return cD;
  }

  private setInsertUpdateDelete(cD) {
    const stoppers = this.getStoppers(cD);

    while (stoppers.length > 0) {
      const s = stoppers.pop();
      if (s.lefts.length == 0) {
        for (let j = s.start; j <= s.end; j++) {
          this.addDiffProperties(cD[j], "insert");
        }
      } else if (s.rights.length == 0) {
        for (let j = s.start; j <= s.end; j++) {
          this.addDiffProperties(cD[j], "delete");
        }
      } else if ((s.lefts.length == 1) && (s.rights.length == 1)) {
        if (true) {
          cD[s.start] = {left: cD[s.start].left || cD[s.end].left, right: cD[s.start].right || cD[s.end].right};
          cD.splice(s.end, 1);
          this.addDiffProperties(cD[s.start], "update");
        } else {
          cD[s.start].action = cD[s.start].left? "delete": "insert";
          cD[s.end].action = cD[s.end].left? "delete": "insert";
        }
      } else if ((s.lefts.length < 10) || (s.rights.length < 10)) {
        let winner = {left: s.lefts[0], right: s.rights[0], lcsLength: 0};
        for (let j = 0; j < s.lefts.length; j++) {
          for (let k = 0; k < s.rights.length; k++) {
            const lcsLength = this.getLcsLength(s.lefts[j].component, s.rights[k].component);
            if (lcsLength > winner.lcsLength) {
              winner = {left: s.lefts[j], right: s.rights[k], lcsLength: lcsLength};
            }
          }
        }
        let side = "left";
        let other = "right";
        if (winner.left.i < winner.right.i) {
        } else {
          side = "right";
          other = "left";
        }
        cD[winner[side].i][other] = cD.splice(winner[other].i, 1)[0][other];
        this.addDiffProperties(cD[winner[side].i], "update");
        const moved = [];
        for (let j = winner[side].i + 1; j < (winner[other].i - moved.length); j++) {
          if (cD[j][other]) {
            moved.push(cD.splice(j--, 1)[0]);
          }
        }
        if (moved.length) {
          cD.splice(winner[side].i, 0, ...moved);
        }
        const newStoppers = this.getStoppers(cD.slice(s.start, s.end), s.start); // Slice end is exclusive, which is good here, because s.end should have decreased.
        newStoppers.forEach(stopper => stoppers.push(stopper));
      } else {
        const iL = s.lefts[0].i;
        const iR = s.rights[0].i;
        for (let j = 0; j < s.rights.length; j++) {
          s.rights[j].lcsLength = this.getLcsLength(s.lefts[0].component, s.rights[j].component);
        }
        for (let j = 0; j < s.lefts.length; j++) {
          s.lefts[j].lcsLength = this.getLcsLength(s.rights[0].component, s.lefts[j].component);
        }
        const lr = s.rights.sort((a, b) => (a.lcsLength > b.lcsLength)? -1: (a.lcsLength < b.lcsLength)? 1: 0)[0];
        const rl = s.lefts.sort((a, b) => (a.lcsLength > b.lcsLength)? -1: (a.lcsLength < b.lcsLength)? 1: 0)[0];
        let iB = iL;
        let iO = lr.i;
        let side = "left";
        let other = "right";
        if (lr.lcsLength < rl.lcsLength) {
          iB = iR;
          iO = rl.i;
          side = "right";
          other = "left";
        }
        if (iO < iB) {
          cD[iO][side] = cD.splice(iB, 1)[0][side];
          this.addDiffProperties(cD[iO], "update");
        } else {  // (iO > iB)
          cD[iB][other] = cD.splice(iO, 1)[0][other];
          this.addDiffProperties(cD[iB], "update");
          const moved = [];
          for (let j = iB + 1; j < iO; j++) {
            if (cD[j][other]) {
              moved.push(cD.splice(j--, 1)[0]);
              iO--;
            }
          }
          if (moved.length) {
            cD.splice(iB, 0, ...moved);
          }
        }
        while (cD[s.start].action != "update") {
          this.addDiffProperties(cD[s.start], cD[s.start].left? "delete": "insert");
          s.start++;
        }
        s.start++;
        s.end--;
        s.lefts = [];
        s.rights = [];
        for (let j = s.start; j <= s.end; j++) {
          if (cD[j].left) {
            s.lefts.push({component: cD[j].left, i: j});
          }
          if (cD[j].right) {
            s.rights.push({component: cD[j].right, i: j});
          }
        }
        if (s.lefts.length + s.rights.length > 0) {
          stoppers.push(s);
        }
      }
    }
  }

  private getStoppers(cD, base = 0) {
    const stoppers = [];  // Blocks of lines in diffComponents that could not be matched on equality.

    for (let i = 0; i < cD.length; i++) {
      if (!cD[i].left || !cD[i].right) {
        if ((i == 0) || (cD[i - 1].left && cD[i - 1].right)) {
          stoppers.push({start: base + i, end: base + i, lefts: [], rights: []});
        } else {
          stoppers[stoppers.length - 1].end = base + i;
        }
        if (cD[i].left) {
          stoppers[stoppers.length - 1].lefts.push({component: cD[i].left, i: base + i});
        }
        if (cD[i].right) {
          stoppers[stoppers.length - 1].rights.push({component: cD[i].right, i: base + i});
        }
      }
    }

    return stoppers;
  }

  private setTrail(diffComponents) {
    const leftActionExpressies = {};
    const rightActionExpressies = {};
    diffComponents.filter(diffComponent => diffComponent.action).forEach(diffComponent => {
      if (diffComponent.left != null) {
        leftActionExpressies[diffComponent.left.expressie] = true;
      }
      if (diffComponent.right != null) {
        rightActionExpressies[diffComponent.right.expressie] = true;
      }
    });
    diffComponents.filter(diffComponent => !diffComponent.action).reverse().forEach(diffComponent => {
      if ((diffComponent.left?._embedded?.documentComponenten || diffComponent.left?._embedded?.ontwerpDocumentComponenten || []).some(component => leftActionExpressies[component.expressie])) {
        leftActionExpressies[diffComponent.left.expressie] = true;
        diffComponent.action = "trail";
      }
      if ((diffComponent.right?._embedded?.documentComponenten || diffComponent.right?._embedded?.ontwerpDocumentComponenten || []).some(component => rightActionExpressies[component.expressie])) {
        rightActionExpressies[diffComponent.right.expressie] = true;
        diffComponent.action = "trail";
      }
    });
  }

  private areEqual(leftComponent, rightComponent) {
    return (
      (this.componentToTextObject(leftComponent, "Text").text || this.componentToTextObject(leftComponent, "Header").text) ==
      (this.componentToTextObject(rightComponent, "Text").text || this.componentToTextObject(rightComponent, "Header").text)
    );
  }

  private getLcsLength(leftComponent, rightComponent) {
    const leftWords = this.textToWords(this.componentToTextObject(leftComponent, "Header", "").text + this.componentToTextObject(leftComponent, "Text", "").text);
    const rightWords = this.textToWords(this.componentToTextObject(rightComponent, "Header", "").text + this.componentToTextObject(rightComponent, "Text", "").text);

    return this.getLcs(leftWords, rightWords)[leftWords.length][rightWords.length];
  }

  private addDiffProperties(diffComponent, action) {
    ["Text", "Header"].forEach(textType => {
      const leftTextObject = this.componentToTextObject(diffComponent.left, textType, "");
      const rightTextObject = this.componentToTextObject(diffComponent.right, textType, "");
      if (leftTextObject.text != rightTextObject.text) {
        const leftWords = this.textToWords(leftTextObject.text);
        const rightWords = this.textToWords(rightTextObject.text);

        if (action == "update") {
          this.backtrackLcs(this.getLcs(leftWords, rightWords), leftWords, rightWords, leftWords.length, rightWords.length);
        } else {
          leftWords.forEach(word => word.action = "delete");
          rightWords.forEach(word => word.action = "insert");
        }

        diffComponent["left" + textType] = !leftTextObject.sanitized? this.wordsToText(leftWords): this.sanitizer.bypassSecurityTrustHtml(this.wordsToText(leftWords));
        diffComponent["right" + textType] = !rightTextObject.sanitized? this.wordsToText(rightWords): this.sanitizer.bypassSecurityTrustHtml(this.wordsToText(rightWords));
        diffComponent.action = action;
      }
    });
  }

  private componentToTextObject(component, textType, defaultVal = null) {
    const textObject = {text: null, sanitized: false};
    if (textType == "Text") {
      textObject.text = component?.inhoud?.changingThisBreaksApplicationSecurity || component?.inhoud || defaultVal;
      textObject.sanitized = !!component?.inhoud?.changingThisBreaksApplicationSecurity;
    } else {  // "Header"
      textObject.text = component?.viewHeader?.changingThisBreaksApplicationSecurity || component?.viewHeader || defaultVal;
      textObject.sanitized = !!component?.viewHeader?.changingThisBreaksApplicationSecurity;
    }
    return textObject;
  }

  private textToWords(text) {
    let words = [];
    const regex = /^<[^>]+>/;
    const regex2 = /^[^<]+/;
    while (text.length > 0) {
      const match = text.match(regex);
      if (match) {
        text = text.replace(regex, "");
        words.push({s: match[0], html: true});
      } else {
        const match = text.match(regex2);
        if (match) {
          text = text.replace(regex2, "");
          words = words.concat(match[0].split(/ /).map(s => {return {s: s, html: false}}));
        } else {
          console.warn("HTML contains illegal characters.")
          text = "";
        }
      }
    }
    return words;
  }

  private getLcs(leftWords, rightWords) {
    const lcs = Array(leftWords.length + 1).fill(0).map(x => Array(rightWords.length + 1).fill(0));
    for (let i = 1; i <= leftWords.length; i++) {
      for (let j = 1; j <= rightWords.length; j++) {
        if (leftWords[i - 1].s == rightWords[j - 1].s) {
          lcs[i][j] = lcs[i - 1][j - 1] + 1;
        } else {
          lcs[i][j] = Math.max(lcs[i][j - 1], lcs[i - 1][j]);
        }
      }
    }
    return lcs;
  }

  private backtrackLcs(lcs, leftWords, rightWords, i, j) {
    if (i + j == 0) {
      // Finish.
    } else if ((i * j > 0) && (leftWords[i - 1].s == rightWords[j - 1].s)) {
      this.backtrackLcs(lcs, leftWords, rightWords, i - 1, j - 1);
    } else if ((i == 0) || (lcs[i][j - 1] > lcs[i - 1][j])) {
      this.backtrackLcs(lcs, leftWords, rightWords, i, j - 1);
      rightWords[j - 1].action = "insert";
    } else {
      this.backtrackLcs(lcs, leftWords, rightWords, i - 1, j);
      leftWords[i - 1].action = "delete";
    }
  }

  private wordsToText(words) {
    let text = "";
    for (let i = 0; i < words.length; i++) {
      const previousWord = words[i - 1];
      const currentWord = words[i];
      const nextWord = words[i + 1];
      if ((!previousWord || previousWord.html || !previousWord.action) && !currentWord.html && currentWord.action) {
        text += "<span class=\"emphasize\">";
      }
      if ((!previousWord || previousWord.html || !previousWord.action) && (currentWord.s == "") && currentWord.action && (!nextWord || nextWord.html || !nextWord.action)) {
        text += "<span class=\"text-muted\">[ spatie ]</span>";
      } else {
        text += currentWord.s;
      }
      if (!currentWord.html && currentWord.action && (!nextWord || nextWord.html || !nextWord.action)) {
        text += "</span>";
      }
      if (!currentWord.html && nextWord && !nextWord.html) {
        text += " ";
      }
    }
    return text;
  }
}
