export class SVGConverter {

  vectorTileFeatureToPath(feature) {
    let path = "";

    let pathX = 0;
    let pathY = 0;

    const pbf = feature._pbf;
    pbf.pos = feature._geometry;

    const end = pbf.readVarint() + pbf.pos;
    while (pbf.pos < end) {
        const cmdLen = pbf.readVarint();
        const cmd = cmdLen & 0x7;
        const length = cmdLen >> 3;

        for (let i = 0; i < length; i++) {
            if (cmd === 1 || cmd === 2) {
                pathX += pbf.readSVarint();
                pathY += pbf.readSVarint();

                if (cmd === 1) {  // MoveTo
                    path += "M" + pathX + " " + pathY + " ";
                } else {  // LineTo
                    path += "L" + pathX + " " + pathY + " ";
                }
            } else if (cmd === 7) {  // ClosePath
                path += "Z M" + pathX + " " + pathY + " ";
            } else {
                throw new Error("Unknown command: " + cmd);
            }
        }
    }

    return path;
  }
}
