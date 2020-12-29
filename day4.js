const input = require("fs").readFileSync("./inputs/day4.txt", "utf8").trim().split("\n\n");

const anwser1 = input.reduce((sum, passport) => {
  return isValidPassportPart1(passport) ? sum + 1 : sum;
}, 0);

console.log(anwser1); // 242

function isValidPassportPart1(passport) {
  const requiredFields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
  return requiredFields.every((field) => passport.includes(field));
}

const anwser2 = input.reduce((sum, passport) => {
  return isValidPassportPart2(passport) ? sum + 1 : sum;
}, 0);

console.log(anwser2); // 186

function isValidPassportPart2(passport) {
  const validations = [
    (passport) => {
      const birthYear = /byr:([0-9]{4})(\s|$)/.exec(passport);
      return birthYear && birthYear[1] >= 1920 && birthYear[1] <= 2002;
    },
    (passport) => {
      const issueYear = /iyr:([0-9]{4})(\s|$)/.exec(passport);
      return issueYear && issueYear[1] >= 2010 && issueYear[1] <= 2020;
    },
    (passport) => {
      const expirationYear = /eyr:([0-9]{4})(\s|$)/.exec(passport);
      return expirationYear && expirationYear[1] >= 2020 && expirationYear[1] <= 2030;
    },
    (passport) => {
      const height = /hgt:([0-9]+)(cm|in)/.exec(passport);
      return height && (height[2] === "cm" ? height[1] >= 150 && height[1] <= 193 : height[1] >= 59 && height[1] <= 76);
    },
    (passport) => /(hcl:)#(([0-9]|[a-f]){6})(\s|$)/.test(passport),
    (passport) => /(ecl:)(amb|blu|brn|gry|grn|hzl|oth)(\s|$)/.test(passport),
    (passport) => /pid:([0-9]{9})(\s|$)/.test(passport),
  ];

  return validations.every((validation) => validation(passport));
}
