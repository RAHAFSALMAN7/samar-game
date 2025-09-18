// checkCards.js
import fs from "fs";
import path from "path";

const cardsDir = path.join("public", "assets", "cards");

function listFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  entries.forEach((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      listFiles(fullPath);
    } else {
      console.log(fullPath);
    }
  });
}

listFiles(cardsDir);
