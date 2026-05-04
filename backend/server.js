const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

/* API to fetch students */
app.get("/students", (req, res) => {
  const sql = "SELECT * FROM fsdb_std";
  db.query(sql, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(result);
    }
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000 🚀");
});
