const express = require("express");
const path = require("path");

const app = express();

const port = process.env.PORT || 5000;

const publicFilesPath = path.join(__dirname, "build");

app.use(express.static(path.join(publicFilesPath)));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Our app is live on port ${port}`);
});
