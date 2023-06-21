// const path = require("path");

// let pathObj = path.parse(__filename);

// console.log(pathObj);

// const os = require("os");
// let totalMemory = os.totalmem();
// let freeMemory = os.freemem();

// console.log("totalMemory: " + totalMemory);
// console.log(`freeMemory: ${freeMemory}`);

// const fs = require("fs");

// fs.readdir("./", (err, files) => {
//   if (err) console.log("Error", err);
//   else console.log("Result", files);
// });

// const EventEmitter = require("events");
// const emitter = new EventEmitter();

// // Register a listener
// emitter.on("messageLogged", (arg) => {
//   console.log("Listener called", arg);
// });

// // Raise an event
// emitter.emit("messageLogged", { id: 232321, url: "http://" });

// const Logger = require("./logger");
// const logger = new Logger();

// logger.on("messageLogged", (arg) => {
//   console.log("Listener called", arg);
// });

// logger.log("message");

// // Raise: logging (data: message)
// emitter.on("logging", (arg) => {
//   console.log("Logging called", arg);
// });
// emitter.emit("logging", { data: "logging is fired" });

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello World");
    res.end();
  }
  if (req.url === "/api/courses") {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});

server.on("connection", (socket) => {
  console.log("New connection...");
});

server.listen(8000);

console.log("Listening on port 8000...");
