const fs = require("fs");
const http = require("http");
const url = require("url");

const filename = process.argv[2];

fs.readFile(filename, "utf-8", (err, data) => {
  if (err) {
    console.error(`Error reading file: ${err}`);
    return;
  }

  const urls = data.split("\n");

  urls.forEach((urlString) => {
    const urlObject = new URL(urlString);
    const hostname = urlObject.hostname;

    http.get(urlString, (res) => {
      let html = "";

      res.on("data", (chunk) => {
        html += chunk;
      });

      res.on("end", () => {
        fs.writeFile(`${hostname}.html`, html, (err) => {
          if (err) {
            console.error(`Error writing file: ${err}`);
          }
        });
      });
    });
  });
});
