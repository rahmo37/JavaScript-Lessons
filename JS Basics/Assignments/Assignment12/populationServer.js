// server.js
const http = require("http");
const { fetchPopulationData } = require("./populationDataFetcher");

const server = http.createServer((req, res) => {
  if (req.url === "/population" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    fetchPopulationData((err, data) => {
      if (!err) {
        res.end(data);
      } else {
        res.end(err);
      }
    });
  } else {
    res.writeHead(404);
    res.end();
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
