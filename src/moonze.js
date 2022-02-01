const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
let x;
let numArr = [];

rl.on("line", (line) => {
  const input = line.split(" ");
  if (input.length === 2) {
    n = Number(input[0]);
    x = Number(input[1]);
    console.log(`n: ${n}`);
  }
  if (input.length === n) {
    numArr = line.split(" ").map((num) => parseInt(num));
    rl.close();
  }
});
rl.on("close", () => {
  for (let i = 0; i < numArr.length; i++) {
    var newArr = numArr.filter((su) => Number(su) < x);
  }
  console.log(newArr.toString());
});
