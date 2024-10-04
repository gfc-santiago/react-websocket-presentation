const express = require("express");
const http = require("http");
const cors = require("cors");
const os = require("os");
const createSocketServer = require("./socket");

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());
const io = createSocketServer(server);

app.get('/ip', (req, res) => {
  const networkInterfaces = os.networkInterfaces();
  let ipAddress = 'localhost';
  const connections = Object.values(networkInterfaces).flat();
  const extConn = connections.find(intf => intf.family === 'IPv4' && !intf.internal);
  res.json({ address: extConn?.address || 'Not found' });
});

app.use((req, res, next) => {
  req.context = {
    server,
    io,
    session: {},
  };
  next();
});


const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Listening on port ${port}`));