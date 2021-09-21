const express = require("express");
const path = require("path");

const app = express();

const port = process.env.PORT || 5000;
//create paths
const publicFolderPath = path.join(__dirname, "build");

//set up express to use our publicFolder path
app.use(express.static(publicFolderPath));

//if user requests a resource currently not in the public foler, just redirect to
//homepage
app.get("*", (req, res) => {
  res.send(publicFolderPath, "index.html");
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
