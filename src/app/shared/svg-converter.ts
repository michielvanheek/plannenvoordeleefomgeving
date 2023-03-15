import { Point } from "ng-niney";

export class SVGConverter {

  vectorTileFeatureToPoint(feature) {
    const points = [];

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
        if (cmd === 1) {  // MoveTo
          pathX += pbf.readSVarint();
          pathY += pbf.readSVarint();
          points.push(new Point(pathX, pathY));
        } else {
          throw new Error("Not a point command: " + cmd);
        }
      }
    }

    if (points.length == 0) {
      throw new Error("No point found.");
    }
    if (points.length > 1) {
      throw new Error("Multi-points not yet supported.");
    }
    return points[0];
  }

  vectorTileFeatureToPath(feature) {
    let path = "";

    let previousX = 0;
    let previousY = 0;
    let pathX = 0;
    let pathY = 0;
    let lastMoveX = 0;
    let lastMoveY = 0;

    const extent = feature.extent;
    const lineTo = (pathX, pathY) => {
      if (
        ((previousX < 0) && (pathX < 0)) ||
        ((previousX > extent) && (pathX > extent)) ||
        ((previousY < 0) && (pathY < 0)) ||
        ((previousY > extent) && (pathY > extent))
      ) {
        return "K" + pathX + " " + pathY + " ";
      } else {
        return "L" + pathX + " " + pathY + " ";
      }
    }

    const pbf = feature._pbf;
    pbf.pos = feature._geometry;

    const end = pbf.readVarint() + pbf.pos;
    while (pbf.pos < end) {
      const cmdLen = pbf.readVarint();
      const cmd = cmdLen & 0x7;
      const length = cmdLen >> 3;

      for (let i = 0; i < length; i++) {
        previousX = pathX;
        previousY = pathY;
        if (cmd === 1 || cmd === 2) {
          pathX += pbf.readSVarint();
          pathY += pbf.readSVarint();

          if (cmd === 1) {  // MoveTo
            path += "M" + pathX + " " + pathY + " ";
            lastMoveX = pathX;
            lastMoveY = pathY;
          } else {  // LineTo
            path += lineTo(pathX, pathY);
          }
        } else if (cmd === 7) {  // ClosePath
          path += lineTo(lastMoveX, lastMoveY) + " Z ";
        } else {
          throw new Error("Unknown command: " + cmd);
        }
      }
    }

    return path;
  }
}
