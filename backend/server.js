// // server.js
// require("dotenv").config(); 
// const express = require("express");
// const soap = require("soap");
// const cors = require("cors");

// const costpointRoutes = require("./routes/costpointRoutes"); // ✅ ADD THIS


// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use("/api", costpointRoutes);



// const WSDL_URL = "https://your-wsdl-url?wsdl";

// app.post("/api/employee", async (req, res) => {
//   try {
//     const client = await soap.createClientAsync(WSDL_URL);

//     // If authentication needed:
//     // client.setSecurity(new soap.WSSecurity("username", "password"));

//     const args = {
//       EmployeeName: req.body.employeeName,
//       EmployeeId: req.body.employeeId,
//       Salary: req.body.salary,
//       Department: req.body.department
//     };

//     const result = await client.CreateEmployeeAsync(args);

//     res.json(result);

//   } catch (err) {
//     console.error("SOAP Error:", err);
//     res.status(500).json({ error: "SOAP call failed" });
//   }
// });

// app.listen(5000, () => console.log("Server running"));


// server.js

require("dotenv").config();

const express = require("express");
const cors = require("cors");

const costpointRoutes = require("./routes/costpointRoutes");

const app = express();

// app.use(cors());
app.use(cors({
  origin: "*"
}));
app.use(express.json());

// Costpoint routes
app.use("/api", costpointRoutes);

app.get("/", (req, res) => {
  res.send("Costpoint API Running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});