const express = require("express");
const cors = require("cors");


const app = express();
var PORT = 3001;

app.use(express.json());
app.use(cors());

// DB connection
require("./connection");

// ✅ MISSING CODE 1: Import Model
const BlogModel = require("./model"); 
// (file path ningalude project structure anusarichu adjust cheyyam)

// ---------------- POST API ----------------
app.post("/add", async (req, res) => {
  try {
    console.log(req.body);
    await BlogModel(req.body).save();
    res.send({ message: "Employee added" });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

// ---------------- GET API ----------------
// ✅ MISSING CODE 2: GET API
app.get("/view", async (req, res) => {
  try {
    const data = await BlogModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

// ---------------- SERVER ----------------
app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});

// DELETE API
app.delete("/delete/:id", async (req, res) => {
  try {
    await BlogModel.findByIdAndDelete(req.params.id);
    res.send({ message: "Employee deleted" });
  } catch (error) {
    res.status(500).send(error);
  }
});

// UPDATE API
app.put("/update/:id", async (req, res) => {
  try {
    await BlogModel.findByIdAndUpdate(req.params.id, req.body);
    res.send({ message: "Employee updated" });
  } catch (error) {
    res.status(500).send(error);
  }
});
