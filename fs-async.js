const { readFile, writeFile } = require("fs");
// const fs = require("fs");

// ASYNCHRONOUS

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/first.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Here is the result ${first} \n ${second} \n`,
      (err) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(`file written successfully`);
      }
    );
  });
});
