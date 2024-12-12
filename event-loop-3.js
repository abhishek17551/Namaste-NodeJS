const fs = require("fs");

setImmediate(() => console.log("setImmediate"));

setTimeout(() => console.log("Timer 2 expired"), 2000);

setTimeout(() => console.log("Timer expired"), 3000);

Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt", "utf8", () => {
  setTimeout(() => console.log("2nd timer"), 3000);
  setTimeout(() => console.log("2nd timer 2"), 3000);

  process.nextTick(() => console.log("2nd nextTick"));

  setImmediate(() => console.log("2nd setImmediate"));

  fs.readFile("./file.txt","utf8", () => {
    process.nextTick(() => console.log("3rd nextTick"));
    setImmediate(() => console.log("3rd setImmediate"));
    setTimeout(() => console.log("3rd timer"), 0)
  })

  console.log("File Reading CB");
});
process.nextTick(() => console.log("nextTick"));


setTimeout(() => console.log("Timer 3 expired"), 3000);

setTimeout(() => console.log("Timer 4 expired"), 2000);
console.log("Last line of the file.");