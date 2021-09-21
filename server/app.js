const express = require("express");
const path = require("path");

//start our express application
const app = express();

const port = process.env.PORT || 5000;

//create paths
const publicFilesPath = path.join(__dirname, "build");

//serve up this static file(which connects to our react buld folder)
app.use(express.static(path.join(publicFilesPath)));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Our app is live on port ${port}`);
});
