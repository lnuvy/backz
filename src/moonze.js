const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line.split(" ").map(Number));

  for (let i = 0; i < input.length; i++) {
    if (input[i][0] + input[i][1] === 0) rl.close();
  }
}).on("close", function () {
  let i = 0;
  let sum = "";
  while (i < input.length) {
    sum = input[i][0] + input[i][1];
    if (sum === 0) {
      process.exit();
    } else console.log(sum);

    i++;
  }
});
