const EventEmitter = require("events");
const emitter = new EventEmitter();

// 1. Define listener function
function greet(name) {
  console.log(`Hello, ${name}!`);
}

// 2. Add event listener
emitter.on("greet", greet);

// 3. Emit event (triggers listener)
console.log("1. Emitting event (with listener):");
emitter.emit("greet", "Alice");

// 4. Remove event listener
emitter.removeListener("greet", greet);

// 5. Emit event again (no listener triggered)
console.log("2. Emitting event (after removal):");
emitter.emit("greet", "Alice");
console.log("(No listener executed because it was removed)");

