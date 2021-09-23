const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,// IP address here,
    port: PORT, //PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.on("data", (input) => {
    console.log(`${input}`)// code that does something when the connection is first established
  });

  conn.on("connect", () => {
    console.log("Successfully connected to server")
  });

  conn.on("connect", () => {
    conn.write("Name: MOO")
  });

  return conn;
};

console.log("Connecting ...");

module.exports = connect;

