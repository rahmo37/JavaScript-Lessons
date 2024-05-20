// Dependencies
const url = require("url");
const { trimmedPath, jsonToJsObject } = require("./OtherUtilities");
const { checkMethodAndUrl } = require("../routes");
const { notFoundHandler } = require("../Handlers/notFoundHandler");
const { StringDecoder } = require("string_decoder");

// Module Scaffolding
const handler = {};

handler.handleReqRes = (req, res) => {
  // This data variable is for accumulating the body sent by the user
  let data = "";
  const decoder = new StringDecoder("utf-8");

  // console.log(url.parse(req.url, true));

  // parsing the url
  const parsedUrl = url.parse(req.url, true);

  // Saving the original path
  const originalPath = parsedUrl.pathname;

  // This is the trimmed and cleaned path
  const cleanedPath = trimmedPath(originalPath);

  // Grabbing the query object
  const queryStringObject = parsedUrl.query;

  // Grabbing the method
  const method = req.method.toLowerCase();

  // Evertime a buffer object is sent an DATA event is triggered and we listen for that event to finally accumulate the body in the data variable
  req.on("data", (buffer) => {
    data += decoder.write(buffer);
  });

  req.on("end", () => {
    data += decoder.end();

    // Gathering all the properties in a requestProperty object
    const requestProperties = {
      parsedUrl,
      originalPath,
      cleanedPath,
      queryStringObject,
      method,
      data: jsonToJsObject(data),
    };
    // console.log(requestProperties.data);

    const currentRouteHander = checkMethodAndUrl(requestProperties)
      ? checkMethodAndUrl(requestProperties)
      : notFoundHandler;
    // console.log(currentRouteHander);

    currentRouteHander(requestProperties, (statusCode, payload) => {
      statusCode = typeof statusCode === "number" ? statusCode : 500;
      let payloadString =
        typeof payload === "object" ? JSON.stringify(payload) : {};
      res.setHeader(`Content-Type`, `application/json`);
      res.writeHead(statusCode);
      res.end(payloadString);
    });
  });
};

// Export
module.exports = handler;
