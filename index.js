const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/", (req, res) => {
    var data = req.body;
    let sum = data.first + data.second + data.third
    let average = sum / 3
    res.send("Average: " + average);
    console.log(req.params);
})

app.get("/serveHtml",(req,res) => {
  res.sendFile(path.join(__dirname,"/index.html"));
})

app.get("/:name",(req,res) => {
  res.send("Name: " + req.params.name);
  console.log(req.params);
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});



