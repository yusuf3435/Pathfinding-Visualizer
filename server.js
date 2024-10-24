const express = require("express");
const app = express();

// Used to boot up the back end Express Server
app.use("/public", express.static(__dirname + "/public"))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
})

app.listen(1337, () => {
  console.log("The server is up and running!");
});
