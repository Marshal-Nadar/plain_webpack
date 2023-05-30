const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

app.get("/", function (paramsreq, res) {
  const pathToHtmlFile = path.resolve(__dirname, "../dist/hello-world.html");
  const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, "utf-8");
  res.send(contentFromHtmlFile);
});

app.use("/", express.static(path.resolve(__dirname, "../dist")));

app.listen(9001, function () {
  console.log("Application is running on http://localhost:9001/");
});
