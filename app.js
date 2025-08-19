const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Here is the Homepage!");
});

app.listen(4000, () => {
  console.log("Server is running at PORT 4000");
});
