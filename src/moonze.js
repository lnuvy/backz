const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let answer = "";
let testCase = 0;

rl.on("line", (line) => {
  const input = line.split(" ");
  if (testCase === answer.split("\n").length) {
    rl.close();
  }

  if (input.length === 2) {
    const A = Number(input[0]);
    const B = Number(input[1]);
    answer += A + B + "\n";
  } else {
    testCase = Number(input[0]);
  }
}).on("close", () => {
  console.log(answer);
  process.exit();
});
