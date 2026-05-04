import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/students")
      .then(res => setStudents(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>ISCC - A</h2>
      <h3>FSDB Student Records</h3>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Enrollment No</th>
            <th>Name</th>
            <th>E mail ID</th>
            <th>Mobile</th>
            <th>City</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Father's Name</th>
            <th>Father's Number</th>
            <th>Year/Semester</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.Eno}>
              <td>{s.Eno}</td>
              <td>{s.name}</td>
              <td>{s.edu_id}</td>
              <td>{s.mobile_no}</td>
              <td>{s.city}</td>
              <td>{s.gender}</td>
              <td>{s.age}</td>
              <td>{s.father_name}</td>
              <td>{s.Father_no}</td>
              <td>{s.year_sem}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
