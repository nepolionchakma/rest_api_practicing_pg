const express = require("express");
const database = require("./services/database");
const app = express();

// app.get("/", (req, res) => {
//   res.send("server Testing 3000 port");
// });

app.get("/departments", async (req, res) => {
  try {
    const result = await database.client.query("SELECT * FROM departments");
    return res.status(200).json(result.rows);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => console.log("server start on port 3000"));
