const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.use("/", express.static(path.resolve(__dirname, "../dist")));

app.get("*", function (req, res) {
  const pathToHtmlFile = path.resolve(__dirname, "../dist/dashboard.html");
  const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, "utf-8");
  res.send(contentFromHtmlFile);
});

app.listen(9000, function () {
  console.log("Application is running on http://localhost:9000/");
});
