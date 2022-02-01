const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const s = "*";

rl.on("line", (line) => {
  const input = Number(line);

  for (let i = 1; i <= input; i++) {
    for (let j = input; j > i; j--) {
      process.stdout.write(" ");
    }
    for (let j = 0; j < i; j++) {
      process.stdout.write(s);
    }
    console.log();
  }
});
