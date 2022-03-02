let app = require("express")();
let http = require("http").Server(app);
let io = require("socket.io")(http, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log(" socket connection established...");
  socket.on("send_message", (result) => {
    console.log("new send_messagehhhhhhhhhhhhhhhhhhhhhhhhhhhh");
    io.emit("send_message", result);
  });
  socket.on("online", (result) => {
    console.log("online");
    io.emit("online", result);
  });
});

var port = process.env.PORT || 3001;

http.listen(port, function () {
  console.log("socket running on port :" + port);
});
