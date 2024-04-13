// server.js

// This file creates a server and provide response with the population data.

const http = require("http"); // Importing the http module wich will help me create a server
const { fetchPopulationData } = require("./populationDataFetcher"); //Importing the fetchPopulation method from the populationDataFetcher

// Creating a server to handle req and res
const server = http.createServer((req, res) => {
  // If the url is population and method is get
  if (req.url === "/population" && req.method === "GET") {
    // Providing the successcode as 200 and content-type as application/json
    res.writeHead(200, { "Content-Type": "application/json" });
    // Now using fetchPopulation function to fetch the population data...
    fetchPopulationData((err, data) => {
      if (!err) {
        // If no error then we send the data..
        res.end(data);
      } else {
        // Other wise we send the error
        res.end(err);
      }
    });
  } else {
    // Other the correct url is not reached we provide 404 code
    res.writeHead(404);
    res.end();
  }
});

// The port we use is 300
const port = 3000;
server.listen(port, () => {
  // Start listening in the port 3000...
  console.log(`Server running at http://localhost:${port}/`);
});
