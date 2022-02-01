const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let add = 0;

rl.on("line", (line) => {
  const n = Number(line);

  for (let i = 1; i <= n; i++) {
    add += i;
  }
}).on("close", () => {
  console.log(add);
  process.exit();
});
