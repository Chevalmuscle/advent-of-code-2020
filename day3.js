const input = require("fs").readFileSync("./inputs/day3.txt", "utf8").trim().split("\n");

const PATTERN_LENGTH = input[0].length;

const anwser1 = (() => {
  let treeCount = 0;
  const dx = 3;
  const dy = 1;
  let x = 0;

  for (let y = 0; y < input.length; y += dy) {
    if (input[y].charAt(x) == "#") {
      treeCount++;
    }
    if ((x += dx) >= PATTERN_LENGTH) {
      x %= PATTERN_LENGTH;
    }
  }
  return treeCount;
})();

console.log(anwser1); // 282

const slopes = [
  { dx: 1, dy: 1 },
  { dx: 3, dy: 1 },
  { dx: 5, dy: 1 },
  { dx: 7, dy: 1 },
  { dx: 1, dy: 2 },
];

const anwser2 = slopes
  .map((slope) => {
    let treeCount = 0;
    let x = 0;

    for (let y = 0; y < input.length; y += slope.dy) {
      if (input[y].charAt(x) == "#") {
        treeCount++;
      }
      if ((x += slope.dx) >= PATTERN_LENGTH) {
        x %= PATTERN_LENGTH;
      }
    }
    return treeCount;
  })
  .reduce((treeProduct, tree) => treeProduct * tree);

console.log(anwser2); // 958815792
