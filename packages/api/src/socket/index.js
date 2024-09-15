const socketIo = require("socket.io");

module.exports = function createSocketServer(server) {
  const io = socketIo(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
    },
  });
  io.on("connect", (sock) => {
    sock.on("prompt", (payload) => {
      console.log("prompt", payload);
      io.emit("broadcast", payload);
    });
    return "Hello";
  });
  return io;
};
