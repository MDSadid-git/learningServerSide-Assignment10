const express = require("express");
const app = express();
const core = require("cors");

const port = process.env.PORT || 5000;

app.use(core());

const MERN = require("./data/mern.json");
const mernalldata = require("./data/mernalldata.json");
app.get("/", (req, res) => {
  res.send("Learning MERN");
});
app.get("/mern", (req, res) => {
  res.send(MERN);
});
app.get("/mernalldata", (req, res) => {
  res.send(mernalldata);
});
app.get("/mernalldata/:id", (req, res) => {
  console.log(req.params.id);
  const id = req.params.id;
  const mernId = mernalldata.filter((n) => n.category_id === id);
  res.send(mernId);
});
app.get("/category/:id", (req, res) => {
  console.log(req.params.id);
  const id = req.params.id;
  const mernId = mernalldata.find((n) => n.id === id);
  res.send(mernId);
});
app.listen(port, () => {
  console.log(`MY Server is Ruinning!!!${port}`);
});
