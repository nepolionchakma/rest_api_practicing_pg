const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(express.json());
// Use the CORS middleware
app.use(
  cors({
    origin: "http://localhost:5173", // Replace with your React app's URL
  })
);
app.get("/", (req, res) => {
  res.send("server Testing 3000 port");
});

app.use(require("./routes/departmentsRoute"));
app.use(require("./routes/employeesRoute"));
app.use(require("./routes/employeeStateRoute"));

app.listen(port, () => console.log(`server start on port ${port}`));
