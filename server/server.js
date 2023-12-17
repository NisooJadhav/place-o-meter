const express = require("express");
const path = require('path');
const cors = require("cors");
const bodyParser = require("body-parser");

const app = new express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("server is here...");
});

app.get('/b.csv', (req, res) => {
  const filePath = path.join(__dirname, 'b.csv');
  res.sendFile(filePath);
});

app.listen(5000, () => {
  console.log("server is up and running");
});