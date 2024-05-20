// Dependecies

// Module Scaffolding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
  callback(404, {
    message: `Your requested url and method was not found: ${requestProperties.cleanedPath}`,
  });
};

// Export
module.exports = handler;