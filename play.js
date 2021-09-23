const connect = require("./client");
const setupInput = require("./input");

console.log("Connecting ...");
const connectOutput = connect();

setupInput(connectOutput);