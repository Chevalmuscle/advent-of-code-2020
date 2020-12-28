const input = require("fs")
  .readFileSync("./inputs/day1.txt", "utf8")
  .trim()
  .split("\n")
  .map((value) => parseInt(value));

const anwser1 = ((input) => {
  const SUM = 2020; // target for the puzzle
  const values = new Map();
  for (let i = 0; i < input.length; i++) {
    if (values.has(SUM - input[i])) {
      return input[i] * (SUM - input[i]);
    }
    values.set(input[i], true);
  }
  throw new Error("unresolved");
})(input);

console.log(anwser1); // 928896

const anwser2 = ((input) => {
  const SUM = 2020; // target for the puzzle
  const values = arrayToMap(input);
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      const valueToFind = SUM - (input[i] + input[j]);
      if (values.has(valueToFind)) {
        return input[i] * input[j] * valueToFind;
      }
    }
  }
  throw new Error("unresolved");
})(input);

console.log(anwser2); // 295668576

function arrayToMap(array) {
  const map = new Map();
  array.forEach((element) => {
    map.set(element, true);
  });
  return map;
}
