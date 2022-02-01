const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let testCase = 100;
let valueArr = [];

rl.on("line", (line) => {
  const input = line.split(" ");
  if (input.length === 1) testCase = input[0];
  else {
    const A = Number(input[0]);
    const B = Number(input[1]);
    valueArr.push([A, B]);
  }
}).on("close", () => {
  for (let i = 0; i < testCase; i++) {
    console.log(
      `Case #${i + 1}: ${valueArr[i][0]} + ${valueArr[i][1]} = ${
        valueArr[i][0] + valueArr[i][1]
      }`
    );
  }
  process.exit();
});
