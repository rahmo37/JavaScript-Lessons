const http = require("http"); // Importing the http module
const formidable = require("formidable"); // Importing the formidable module to handle the form

const server = http.createServer((req, res) => {
  // the request is being made to http://localhost:3000/ from a page hosted on http://127.0.0.1:5500. Despite both addresses pointing to the local machine, they are considered different origins by browsers due to different hostnames.

  // To resolve this, you can add a CORS header in your server's response to allow requests from other origins
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*"); // This allows all origins
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method.toLowerCase() === "post") {
    const form = new formidable.IncomingForm();
    form.parse(req, function (err, fields) {
      if (err) {
        // Handle error scenario, possibly sending back an error response
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("An error occurred");
        return;
      }
      let productQuantity = parseInt(fields.productQuantity[0], 10); // Parsing string to integer with base 10
      let productPrice = parseFloat(fields.productPrice[0]); // Assuming the input is a string to be converted to float
      let totalPrice = productPrice * productQuantity;
      res.end(String(totalPrice.toFixed(2)));
    });
  }
});

server.listen(3000, () => {
  console.log("Server is started to listen on port 3000...");
});
