// Dependencies
const http = require("http");
const { handleReqRes } = require("./Utilities/HandleReqRes");

// Module Scaffolding
const inventory = {};

// Adding the handleReqRes Object
inventory.handleReqRes = handleReqRes;

// Creating and And Starting the server
inventory.createServer = () => {
  const server = http.createServer(inventory.handleReqRes);
  server.listen(3000, () => {
    console.log(`Listening to port 3000`);
  });
};

inventory.createServer();
