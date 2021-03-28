const express = require("express");
const app = express();
var cors = require("cors");
const server = require("http").createServer(app);
const bodyParser = require("body-parser");
const io = require("socket.io")(server, {
  cookie: false,
  pingTimeout: 30000,
  pingInterval: 5000,
  cors: {
    origin: '*',
  }
});

app.use(cors());
app.use(bodyParser.json());

const socketFunction = require("./socketFunction")
const adminRouter = require("./Router/Admin");

io.on("connection",(socket)=>{
	socketFunction(io,socket)
} );

app.use("/Admin", adminRouter);
app.get("/", (req, res) => {
  res.send("Hello world");
});

const PORT = process.env.PORT || 8082;
server.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log("Press Ctrl+C to quit.");
});
