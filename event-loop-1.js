const fs = require("fs");
const a = 100;


fs.readFile("./file.txt", "utf8", () => {
  console.log("File Reading CB");
});

setTimeout(() => console.log("Timer expired"), 0);

function printA() {
  console.log("a=", a);
}

setImmediate(() => console.log("setImmediate"));

printA();
console.log("Last line of the file.");