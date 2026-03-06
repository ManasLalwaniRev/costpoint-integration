// require("dotenv").config();
// const express = require("express");
// const router = express.Router();
// const { importEmployee } = require("../services/costpointImport");

// router.post("/import-employee", async (req, res) => {
//   try {
//     const result = await importEmployee(req.body);
//     res.json(result);
//   } catch (err) {
//     res.status(500).json({ error: "Costpoint Import Failed" });
//   }
// });

// module.exports = router;


require("dotenv").config();
const express = require("express");
const router = express.Router();

const { 
  importEmployee,
  exportEmployee,
  fetchEmployeeManagementInfo
} = require("../services/costpointImport");


// const { fetchEmployeeManagementInfo } = require("../services/costpointImport");

// Add this route


router.get("/manage-employee-data", async (req, res) => {
  try {
    const result = await fetchEmployeeManagementInfo();
    res.json(result);
  } catch (err) {
    console.error("Fetch Error:", err);
    res.status(500).json({ error: "Failed to fetch employee management data" });
  }
});



// Import Employee
router.post("/import-employee", async (req, res) => {
  try {

    const result = await importEmployee(req.body);

    res.json(result);

  } catch (err) {

    console.error("Import Error:", err);
    res.status(500).json({ error: "Costpoint Import Failed" });

  }
});


// Export Employee Data
router.get("/export-employee", async (req, res) => {
  try {

    const result = await exportEmployee();

    res.json(result);

  } catch (err) {

    console.error("Export Error:", err);
    res.status(500).json({ error: "Costpoint Export Failed" });

  }
});

module.exports = router;