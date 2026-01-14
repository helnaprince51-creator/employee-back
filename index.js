const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3001;

// Middleware
app.use(express.json());
app.use(cors());

// In-memory storage for employees
let employees = []; // array to store employee objects

// POST API - Add Employee
app.post("/add", (req, res) => {
  try {
    const newEmployee = {
      id: Date.now(), // unique id
      ...req.body,
    };
    employees.push(newEmployee);
    console.log("Added:", newEmployee);
    res.status(201).json({ message: "Employee added", employee: newEmployee });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to add employee" });
  }
});

// GET API - Get all Employees
app.get("/get", (req, res) => {
  try {
    res.status(200).json(employees); // always return JSON
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch employees" });
  }
});

// DELETE API - Delete Employee by ID
app.delete("/delete/:id", (req, res) => {
  try {
    const id = Number(req.params.id);
    employees = employees.filter((emp) => emp.id !== id);
    res.status(200).json({ message: "Employee deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete employee" });
  }
});

// PUT API - Update Employee by ID
app.put("/update/:id", (req, res) => {
  try {
    const id = Number(req.params.id);
    let updatedEmployee;
    employees = employees.map((emp) => {
      if (emp.id === id) {
        updatedEmployee = { ...emp, ...req.body };
        return updatedEmployee;
      }
      return emp;
    });
    res.status(200).json({ message: "Employee updated", employee: updatedEmployee });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update employee" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
