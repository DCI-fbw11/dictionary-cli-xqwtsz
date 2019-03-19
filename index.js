const search = require("./search");

const main = () => {
  const [, , ...args] = process.argv;
  if (args[0]) {
    search(args[0]);
  } else {
    console.log("Please type a word to check the definition.");
  }
};

main();

module.exports = main;
