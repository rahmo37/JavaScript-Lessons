//In this file we process the form
const http = require("http");
const formidable = require("formidable");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  if (req.url == "/upload" && req.method.toLowerCase() === "post") {
    const form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      if (!err) {
        const imageData = files.image[0];
        const oldPath = imageData.filepath;
        const newPath = path.join(__dirname, "img.jpg");

        // Using the copyFile method in this occassion. because rename is giving me some issues
        fs.copyFile(oldPath, newPath, (err) => {
          if (err) {
            // console.error() is a function in JavaScript that is used to display error messages in the web browser's console. It works similarly to console.log(), which is used for general logging, but console.error() is specifically intended for logging error messages. When you use console.error(), the message often appears in a different color (usually red) in the console, making it stand out from other types of log messages. This visual cue helps developers quickly identify issues in the code.
            console.error("Error while moving the file: ", err);
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Server-Side error while saving the file");
            return;
          } else {
            console.log("File Saved Successfully");
          }
        });
        let authorName = fields.name;
        let title = fields.title;
        let postedContent = fields.postedContent;
        if (authorName && title && postedContent) {
          let blogPost = `
          <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
</head>
<body>
<img src="Arnob.jpg">
<p>${authorName}</p>
<p>${title}</p>
<p>${postedContent}</p>
</body>
</html>`;
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(blogPost);
        } else {
          res.end("Bad Request...");
        }
      } else {
        console.error("Error parsing the files: ", err);
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Error Processing files");
        return;
      }
    });
  } else {
    // res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Bad Request...");
  }
});

server.listen(3000, () => {
  console.log("This server is started to listen in port 3000...");
});
