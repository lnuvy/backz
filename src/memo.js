// 백준 14681 풀다가 괜찮은 내용이 많아서 따로 저장해둠

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// const inputchang = "입력하세요 >> ";
// process.stdout.write(inputchang);

let coordinate = [];

rl.on("line", (line) => {
  coordinate.push(line);
  if (coordinate.length >= 2) {
    rl.close();
  }
}).on("close", () => {
  let x = Number(coordinate[0]);
  let y = Number(coordinate[1]);

  if (x === 0 && y === 0) process.exit();

  if (x > 0) {
    if (y > 0) {
      console.log(1);
    } else {
      console.log(4);
    }
  } else {
    if (y > 0) {
      console.log(2);
    } else {
      console.log(3);
    }
  }
  process.exit();
});
