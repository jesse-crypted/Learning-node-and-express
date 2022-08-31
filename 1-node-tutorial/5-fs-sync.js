const { readFileSync, writeFileSync } = require("fs");
// const fs = require("fs");

// SYNCHRONOUS
// ----File reading
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first, second);

//  ----File writing
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result ${first} \n ${second} \n`,
  { flag: "a" }
);
