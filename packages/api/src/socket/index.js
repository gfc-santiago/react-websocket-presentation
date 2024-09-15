const socketIo = require("socket.io");

const cache = {};

module.exports = function createSocketServer(server) {
  const io = socketIo(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
    },
  });
  io.on("connect", (sock) => {
    sock.emit("resume", cache.payload);
    sock.on("prompt", (payload) => {
      cache.payload = payload;
      io.emit("broadcast", payload);
    });
    return "Hello";
  });
  return io;
};
