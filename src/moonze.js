const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let answer = "";

rl.on("line", (line) => {
  const input = line;
  for (let i = input; i >= 1; i--) {
    answer += i;
    answer += "\n";
  }
}).on("close", () => {
  console.log(answer);
  process.exit();
});
