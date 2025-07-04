const express = require('express');
const app = express();
app.use(express.json());

let students = ["student1", "student2"];
let assignments = [];

app.post('/addassignment', (req, res) => {
  assignments.push(req.body);
  res.send("Assignment added");
});

app.get('/searchstudent', (req, res) => {
  const q = req.query.name;
  const result = students.filter(s => s.includes(q));
  res.json(result);
});

app.delete('/removestudent', (req, res) => {
  const name = req.body.name;
  students = students.filter(s => s !== name);
  res.send("Student removed");
});

app.listen(3002, () => console.log("Teacher MS running on port 3002"));
