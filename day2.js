const input = require("fs").readFileSync("./inputs/day2.txt", "utf8").trim().split("\n");

const anwser1 = input.reduce((sum, line) => {
  const [rule, password] = line.split(":");
  const [range, character] = rule.split(" ");
  const [min, max] = range.split("-");

  const charCount = password.split("").filter((char) => char === character).length;
  return charCount >= min && charCount <= max ? sum + 1 : sum;
}, 0);

console.log(anwser1); // 546

const anwser2 = input.reduce((sum, line) => {
  const [rule, password] = line.split(":");
  const [range, character] = rule.split(" ");
  const [index1, index2] = range.split("-");

  const pos1Valid = password.charAt(index1) === character;
  const pos2Valid = password.charAt(index2) === character;
  return pos1Valid != pos2Valid ? sum + 1 : sum;
}, 0);

console.log(anwser2); // 275
