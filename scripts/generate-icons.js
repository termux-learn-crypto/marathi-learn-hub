const { PNG } = require("pngjs");
const fs = require("fs");
const path = require("path");

const outDir = path.join(__dirname, "..", "public", "icons");
fs.mkdirSync(outDir, { recursive: true });

// Simple rounded-square with gradient + white "open book" motif
function makeIcon(size) {
  const png = new PNG({ width: size, height: size });
  const radius = size * 0.22;

  const inside = (x, y) => {
    // Rounded-rect bounds check
    const left = radius;
    const right = size - 1 - radius;
    const top = radius;
    const bottom = size - 1 - radius;
    let nx = x;
    let ny = y;
    if (x < left) nx = left;
    else if (x > right) nx = right;
    if (y < top) ny = top;
    else if (y > bottom) ny = bottom;
    const dist = Math.hypot(x - nx, y - ny);
    return dist <= radius;
  };

  // Gradient colors (top -> bottom) primary blue (#0ea5e9 -> #0284c7)
  const topC = [14, 165, 233];
  const botC = [2, 132, 199];

  // White open book: two page rectangles
  const book = (x, y) => {
    // book centered, size relative
    const cx = size / 2;
    const cy = size / 2;
    const w = size * 0.52;
    const h = size * 0.4;
    // mirrored two pages
    const pageHalf = w / 2;
    // top page edges
    const yTop = cy - h / 2;
    const yBot = cy + h / 2;
    if (y < yTop || y > yBot) return false;
    const isLeft = x < cx && x >= cx - pageHalf;
    const isRight = x >= cx && x < cx + pageHalf;
    if (!isLeft && !isRight) return false;
    // spine gap line handled by interpolating; keep it filled for simplicity
    return true;
  };

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const idx = (size * y + x) << 2;
      if (!inside(x, y)) {
        // transparent outside rounded rect
        png.data[idx] = 0;
        png.data[idx + 1] = 0;
        png.data[idx + 2] = 0;
        png.data[idx + 3] = 0;
        continue;
      }
      // background gradient
      const t = y / (size - 1);
      const r = Math.round(topC[0] + (botC[0] - topC[0]) * t);
      const g = Math.round(topC[1] + (botC[1] - topC[1]) * t);
      const b = Math.round(topC[2] + (botC[2] - topC[2]) * t);

      if (book(x, y) && Math.abs(x - size / 2) > size * 0.03) {
        // white book pages
        png.data[idx] = 255;
        png.data[idx + 1] = 255;
        png.data[idx + 2] = 255;
        png.data[idx + 3] = 255;
      } else if (Math.abs(x - size / 2) < size * 0.02 && y > size * 0.38 && y < size * 0.62) {
        // spine accent (darker blue)
        png.data[idx] = r;
        png.data[idx + 1] = g;
        png.data[idx + 2] = b;
        png.data[idx + 3] = 255;
      } else {
        png.data[idx] = r;
        png.data[idx + 1] = g;
        png.data[idx + 2] = b;
        png.data[idx + 3] = 255;
      }
    }
  }

  return PNG.sync.write(png);
}

fs.writeFileSync(path.join(outDir, "icon-192.png"), makeIcon(192));
fs.writeFileSync(path.join(outDir, "icon-512.png"), makeIcon(512));
console.log("Icons generated:", outDir);
