// ✅ MISSING CODE 1: Import mongoose
const mongoose = require("mongoose");

// Schema
const schema = mongoose.Schema({
  EmpName: String,
  designation: String,
  empId: String,
  img_url: String,
});

// ✅ MISSING CODE 2: Create & export model
const EmployeeModel = mongoose.model("employee", schema);

module.exports = EmployeeModel;
