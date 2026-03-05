// "use client";

// import React, { useState } from "react";
// import axios from "axios";

// export default function CostpointForm() {

//   const [exportData, setExportData] = useState([]);

// //   const loadExportData = async () => {

// //     try {

// //       const res = await axios.get(
// //         "http://localhost:5000/api/export-employee"
// //       );

// //       console.log("Export Response:", res.data);

// //       setExportData(res.data);

// //     } catch (err) {

// //       console.error("Export error:", err);

// //     }

// //   };


// const loadExportData = async () => {
//   try {

//     const res = await axios.get(
//       "http://localhost:5000/api/export-employee"
//     );

//     console.log("Export API Response:", res.data);

//     const rows =
//       res.data?.empl_slsry_exp_2?.LDM_EMPLLABINFO_CHILD || [];

//     setExportData(rows);

//   } catch (error) {
//     console.error(error);
//   }
// };

//   return (

//     <div style={{padding:"30px"}}>

//       <h2>Costpoint Export Viewer</h2>

//       <button onClick={loadExportData}>
//         Load Export Data
//       </button>

//       <br/><br/>

//       {exportData.length > 0 && (

// <table border="1" style={{marginTop:"20px"}}>

// <thead>
// <tr>

// {Object.keys(exportData[0]).map((key) => (
// <th key={key}>{key}</th>
// ))}

// </tr>
// </thead>

// <tbody>

// {exportData.map((row, index) => (

// <tr key={index}>

// {Object.values(row).map((value, i) => (
// <td key={i}>{value}</td>
// ))}

// </tr>

// ))}

// </tbody>

// </table>

// )}

//     </div>

//   );
// }

////////////////////////////////// Version 1 
// "use client";

// import React, { useState } from "react";
// import axios from "axios";

// export default function CostpointForm() {

//   const [exportData, setExportData] = useState([]);
//   const [searchEmpId, setSearchEmpId] = useState("");
//   const [searchDate, setSearchDate] = useState("");
//   const [selectedRow, setSelectedRow] = useState(null);
//   const [editData, setEditData] = useState({});
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");


//   const loadExportData = async () => {
//     try {

//       const res = await axios.get(
//         "http://localhost:5000/api/export-employee"
//       );

//       const rows =
//         res.data?.empl_slsry_exp_2?.LDM_EMPLLABINFO_CHILD || [];

//       setExportData(rows);

//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const filteredData = exportData.filter((row) => {

//   const empMatch =
//     !searchEmpId ||
//     row.EMPL_ID.toString().includes(searchEmpId);

//   const effectDate = row.EFFECT_DT?.split("T")[0];

//   const afterStart =
//     !startDate || effectDate >= startDate;

//   const beforeEnd =
//     !endDate || effectDate <= endDate;

//   return empMatch && afterStart && beforeEnd;

// });
  
// const updateRecord = async () => {

//   try {

//     await axios.post(
//       "http://localhost:5000/api/import-employee",
//       {
//         ...editData
//       }
//     );

//     alert("Record Updated");

//   } catch (error) {

//     console.error(error);
//     alert("Update Failed");

//   }

// };

//   return (

//     <div style={{ padding: "30px" }}>

//       <h2>Costpoint Export Viewer</h2>

//       <button onClick={loadExportData}>
//         Load Export Data
//       </button>

//       <br/><br/>

//       {/* <div style={{ marginBottom: "20px" }}>

//         <input
//           placeholder="Search EMPL_ID"
//           value={searchEmpId}
//           onChange={(e) => setSearchEmpId(e.target.value)}
//           style={{ marginRight: "10px" }}
//         />

//         <input
//           placeholder="Search EFFECT_DT"
//           value={searchDate}
//           onChange={(e) => setSearchDate(e.target.value)}
//         />

//       </div> */}

//         <div style={{ marginBottom: "20px" }}>

//         <input
//         placeholder="Search EMPL_ID"
//         value={searchEmpId}
//         onChange={(e) => setSearchEmpId(e.target.value)}
//         />

//         <br /><br />

//         <label>From Date</label>

//         <input
//         type="date"
//         value={startDate}
//         onChange={(e) => setStartDate(e.target.value)}
//         />

//         <label style={{marginLeft:"10px"}}>To Date</label>

//         <input
//         type="date"
//         value={endDate}
//         onChange={(e) => setEndDate(e.target.value)}
//         />

//         </div>
            

//       {filteredData.length > 0 && (

//         <table border="1" cellPadding="6">

//           <thead>
//             <tr>

//               {Object.keys(filteredData[0]).map((key) => (
//                 <th key={key}>{key}</th>
//               ))}

//             </tr>
//           </thead>

//           <tbody>

//             {filteredData.map((row, index) => (

//             //   <tr key={index}>
//             <tr
//                 key={index}
//                 onClick={() => {
//                     setSelectedRow(row);
//                     setEditData(row);
//                 }}
//                 style={{ cursor: "pointer", background: "#f9f9f9" }}
//                 >

//                 {Object.values(row).map((value, i) => (
//                   <td key={i}>{value}</td>
//                 ))}

//               </tr>

//             ))}
            

//           </tbody>

//                 {selectedRow && (

// <div style={{marginTop:"40px"}}>

// <h3>Edit Selected Record</h3>

// <div>
// <label>EMPL_ID</label>
// <input value={editData.EMPL_ID || ""} disabled />
// </div>

// <div>
// <label>EFFECT_DT</label>
// {/* <input value={editData.EFFECT_DT || ""} disabled /> */}

// <input
//   value={editData.EFFECT_DT || ""}
//   onChange={(e) =>
//     setEditData({ ...editData, EFFECT_DT: e.target.value })
//   }
// />


// </div>

// <div>
// <label>ANNL_AMT</label>
// <input
//   value={editData.ANNL_AMT || ""}
//   onChange={(e) =>
//     setEditData({ ...editData, ANNL_AMT: e.target.value })
//   }
// />
// </div>

// <div>
// <label>HRLY_AMT</label>
// <input
//   value={editData.HRLY_AMT || ""}
//   onChange={(e) =>
//     setEditData({ ...editData, HRLY_AMT: e.target.value })
//   }
// />
// </div>

// <div>
// <label>ORG_ID</label>
// <input
//   value={editData.ORG_ID || ""}
//   onChange={(e) =>
//     setEditData({ ...editData, ORG_ID: e.target.value })
//   }
// />
// </div>

// <br/>

// <button onClick={updateRecord}>
// Update Record
// </button>

// </div>

// )}


//         </table>




//       )}

//     </div>
//   );
// }


// Version 1 Ends 

// "use client";

// import React, { useState } from "react";
// import axios from "axios";

// export default function CostpointForm() {

// const [exportData, setExportData] = useState([]);
// const [selectedRow, setSelectedRow] = useState(null);
// const [editData, setEditData] = useState({});

// const [searchEmpId, setSearchEmpId] = useState("");
// const [startDate, setStartDate] = useState("");
// const [endDate, setEndDate] = useState("");

// const API = process.env.NEXT_PUBLIC_API_URL;

// // const loadExportData = async () => {

// //   // const res = await axios.get("http://localhost:5000/api/export-employee");

// //   const API = process.env.NEXT_PUBLIC_API_URL;

// // axios.get(`${API}/api/export-employee`)

// //   const rows = res.data?.empl_slsry_exp_2?.LDM_EMPLLABINFO_CHILD || [];

// //   setExportData(rows);

// // };

//   const loadExportData = async () => {

//   try {

//     const res = await axios.get(
//       `${API}/api/export-employee`
//     );

//     const rows =
//       res.data?.empl_slsry_exp_2?.LDM_EMPLLABINFO_CHILD || [];

//     setExportData(rows);

//   } catch (error) {

//     console.error(error);

//   }

// };

// const ALL_FIELDS = [
// "EMPL_ID",
// "LAST_FIRST_NAME",
// "EFFECT_DT",
// "END_DT",
// "ORG_ID",
// "SEC_ORG_ID",
// "GENL_LAB_CAT_CD",
// "WORK_STATE_CD",
// "WORK_YR_HRS_NO",
// "EMPL_CLASS_CD",
// "S_EMPL_STATUS_CD",
// "S_EMPL_TYPE_CD",
// "S_HRLY_SAL_CD",
// "ANNL_AMT",
// "HRLY_AMT",
// "SAL_AMT",
// "MERIT_PCT_RT",
// "PCT_INCR_RT",
// "PROMO_PCT_RT",
// "STD_EFFECT_AMT",
// "STD_EST_HRS",
// "EXMPT_FL",
// "CORP_OFCR_FL",
// "VARIABLE_HRS_FL",
// "HIRE_DT_FL",
// "TERM_DT_FL",
// "SEASON_EMPL_FL",
// "CA_REMOTE_WORKER",
// "CRNCY_NAME",
// "TRN_CRNCY_CD"
// ];

// // const handleSelect = (row) => {

// //   setSelectedRow(row);
// //   // setEditData(row);  
// //     const filledRow = {};

// //     ALL_FIELDS.forEach(field => {
// //       filledRow[field] = row[field] ?? "";
// //     });

// //     setEditData(filledRow);

// // };

// const handleSelect = (row) => {

//   setSelectedRow(row);

//   const filledRow = { ...row };

//   ALL_FIELDS.forEach(field => {
//     if (!(field in filledRow)) {
//       filledRow[field] = "";
//     }
//   });

//   setEditData(filledRow);
// };


// const handleChange = (field, value) => {

//   let updated = { ...editData, [field]: value };

//   // BUSINESS RULE
//   if(field === "HRLY_AMT"){
//     updated.ANNL_AMT = null;
//   }

//   if(field === "ANNL_AMT"){
//     updated.HRLY_AMT = null;
//   }

//   setEditData(updated);

// };

// // const updateRecord = async () => {

// //   try {

// //     // await axios.post(
// //     //   "http://localhost:5000/api/import-employee",
// //     //   editData
// //     // );

// //     await axios.post(`${API}/api/import-employee`, data)

// //     alert("Record Updated");

// //   } catch (err) {

// //     console.error(err);

// //   }

// // };

// const updateRecord = async () => {

//   try {

//     const res = await axios.post(
//       `${API}/api/import-employee`,
//       editData
//     );

//     console.log(res.data);

//   } catch (error) {

//     console.error(error);

//   }

// };


// const filteredData = exportData.filter((row) => {

//   const empMatch =
//     !searchEmpId ||
//     row.EMPL_ID.toString().includes(searchEmpId);

//   const effectDate = row.EFFECT_DT?.split("T")[0];

//   const afterStart =
//     !startDate || effectDate >= startDate;

//   const beforeEnd =
//     !endDate || effectDate <= endDate;

//   return empMatch && afterStart && beforeEnd;

// });

// return (

// <div style={{padding:"30px"}}>

// <h2>Costpoint Employee Salary Manager</h2>

// <button onClick={loadExportData}>
// Load Data
// </button>

// <br/><br/>

// <div style={{display:"flex",gap:"20px"}}>
// <label>Search EMPL_ID</label>

// <input 

// placeholder="Search EMPL_ID"
// value={searchEmpId}
// onChange={(e)=>setSearchEmpId(e.target.value)}
// />

// <label>Effective Date</label>

// <label>Start Date</label>
// <input
// type="date"
// value={startDate}
// onChange={(e)=>setStartDate(e.target.value)}
// />

// <label>End Date</label>
// <input
// type="date"
// value={endDate}
// onChange={(e)=>setEndDate(e.target.value)}
// />

// </div>

// <br/>

// <table border="1" cellPadding="6" style={{width:"100%"}}>

// <div
// style={{
// marginTop:"30px",
// padding:"20px",
// border:"1px solid #ccc",
// borderRadius:"8px",
// maxHeight:"500px",
// overflowY:"auto"
// }}
// ></div>
// <thead style={{background:"#eee"}}>

// <tr>
// <th>EMPL_ID</th>
// <th>NAME</th>
// <th>EFFECT_DT</th>
// <th>ORG_ID</th>
// <th>ANNL_AMT</th>
// <th>HRLY_AMT</th>
// </tr>

// </thead>

// <tbody>

// {filteredData.map((row,index)=>(

// <tr
// key={index}
// onClick={()=>handleSelect(row)}
// style={{
// cursor:"pointer",
// background:selectedRow===row?"#dfefff":"white"
// }}
// >

// <td>{row.EMPL_ID}</td>
// <td>{row.LAST_FIRST_NAME}</td>
// <td>{row.EFFECT_DT?.split("T")[0]}</td>
// <td>{row.ORG_ID}</td>
// <td>{row.ANNL_AMT}</td>
// <td>{row.HRLY_AMT}</td>

// </tr>

// ))}

// </tbody>

// </table>

// {selectedRow && (

// <div
// style={{
// marginTop:"30px",
// padding:"20px",
// border:"1px solid #ccc",
// borderRadius:"8px"
// }}
// >

// <h3>Edit Record</h3>

// {/* <div style={{display:"grid",gridTemplateColumns:"200px 200px",gap:"15px"}}>

// <label>EMPL_ID</label>
// <input value={editData.EMPL_ID || ""} disabled/>

// <label>EFFECT_DT</label>
// <input
// value={editData.EFFECT_DT || ""}
// onChange={(e)=>handleChange("EFFECT_DT",e.target.value)}
// />

// <label>ORG_ID</label>
// <input
// value={editData.ORG_ID || ""}
// onChange={(e)=>handleChange("ORG_ID",e.target.value)}
// />

// <label>ANNL_AMT</label>
// <input
// value={editData.ANNL_AMT || ""}
// onChange={(e)=>handleChange("ANNL_AMT",e.target.value)}
// />

// <label>HRLY_AMT</label>
// <input
// value={editData.HRLY_AMT || ""}
// onChange={(e)=>handleChange("HRLY_AMT",e.target.value)}
// />

// </div> */}


// <div
// style={{
// display:"grid",
// gridTemplateColumns:"220px 220px",
// gap:"12px"
// }}
// >

// {Object.keys(editData).map((field)=>{

// const isDisabled = field === "EMPL_ID";

// return (

// <div key={field}>

// <label>{field}</label>

// <input
// value={editData[field] ?? ""}
// disabled={isDisabled}
// onChange={(e)=>handleChange(field,e.target.value)}
// />

// </div>

// );

// })}

// </div>


// <br/>

// <button onClick={updateRecord}>
// Update Record
// </button>

// </div>

// )}

// </div>

// );

// }


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// "use client";

// import React, { useState } from "react";
// import axios from "axios";

// export default function CostpointForm() {

// const [exportData, setExportData] = useState([]);
// const [selectedRow, setSelectedRow] = useState(null);
// const [editData, setEditData] = useState({});

// const [searchEmpId, setSearchEmpId] = useState("");
// const [startDate, setStartDate] = useState("");
// const [endDate, setEndDate] = useState("");

// const API = process.env.NEXT_PUBLIC_API_URL;


// /* ---------------- LOAD DATA ---------------- */

// // const loadExportData = async () => {

// //   try {

// //     const res = await axios.get(`${API}/api/export-employee`);

// //     const rows =
// //       res.data?.empl_slsry_exp_2?.LDM_EMPLLABINFO_CHILD || [];

// //     setExportData(rows);

// //   } catch (error) {

// //     console.error(error);

// //   }

// // };

// const [columns, setColumns] = useState([]);

// const loadExportData = async () => {
//   try {
//     const res = await axios.get(`${API}/api/export-employee`);

//     const rows =
//       res.data?.empl_slsry_exp_2?.LDM_EMPLLABINFO_CHILD || [];

//     setExportData(rows);

//     // Build consistent column list
//     const allCols = new Set();

//     rows.forEach(row => {
//       Object.keys(row).forEach(key => allCols.add(key));
//     });

//     setColumns(Array.from(allCols));

//   } catch (error) {
//     console.error(error);
//   }
// };


// /* ---------------- SELECT ROW ---------------- */

// const handleSelect = (row) => {

//   setSelectedRow(row);

//   console.log("Selected row:", row);

//   setEditData({ ...row });

// };


// /* ---------------- EDIT HANDLER ---------------- */

// const handleChange = (field, value) => {

//   let updated = { ...editData, [field]: value };

//   if (field === "HRLY_AMT" && value) {
//     updated.ANNL_AMT = null;
//   }

//   if (field === "ANNL_AMT" && value) {
//     updated.HRLY_AMT = null;
//   }

//   setEditData(updated);

// };


// /* ---------------- UPDATE RECORD ---------------- */

// const updateRecord = async () => {

//   try {

//     const res = await axios.post(
//       `${API}/api/import-employee`,
//       editData
//     );

//     console.log(res.data);

//     alert("Record Updated Successfully");

//   } catch (error) {

//     console.error(error);

//   }

// };


// /* ---------------- FILTER DATA ---------------- */

// const filteredData = exportData.filter((row) => {

//   const empMatch =
//     !searchEmpId ||
//     row.EMPL_ID.toString().includes(searchEmpId);

//   const effectDate = row.EFFECT_DT?.split("T")[0];

//   const afterStart =
//     !startDate || effectDate >= startDate;

//   const beforeEnd =
//     !endDate || effectDate <= endDate;

//   return empMatch && afterStart && beforeEnd;

// });


// /* ---------------- UI ---------------- */

// return (

// <div style={{padding:"30px"}}>

// <h2>Costpoint Employee Salary Manager</h2>

// <button onClick={loadExportData}>
// Load Data
// </button>

// <br/><br/>


// {/* ---------------- SEARCH AREA ---------------- */}

// <div style={{display:"flex",gap:"20px"}}>

// <div>
// <label>Search EMPL_ID</label>
// <br/>
// <input
// placeholder="Search EMPL_ID"
// value={searchEmpId}
// onChange={(e)=>setSearchEmpId(e.target.value)}
// />
// </div>

// <div>
// <label>Start Date</label>
// <br/>
// <input
// type="date"
// value={startDate}
// onChange={(e)=>setStartDate(e.target.value)}
// />
// </div>

// <div>
// <label>End Date</label>
// <br/>
// <input
// type="date"
// value={endDate}
// onChange={(e)=>setEndDate(e.target.value)}
// />
// </div>

// </div>

// <br/>


// {/* ---------------- TABLE ---------------- */}

// <div style={{overflowX:"auto"}}>
// <table border="1" cellPadding="6" style={{width:"100%"}}>

// {/* <thead style={{background:"#eee"}}>

// <tr>
// <th>EMPL_ID</th>
// <th>NAME</th>
// <th>EFFECT_DT</th>
// <th>ORG_ID</th>
// <th>ANNL_AMT</th>
// <th>HRLY_AMT</th>
// </tr>

// </thead> */}

// {/* <thead style={{background:"#eee"}}>

// <tr>
// {exportData.length > 0 &&
// Object.keys(exportData[0]).map((field)=>(
// <th key={field}>{field}</th>
// ))}
// </tr>

// </thead> */}

// <thead style={{ background: "#eee" }}>
// <tr>
// {columns.map((field) => (
// <th key={field}>{field}</th>
// ))}
// </tr>
// </thead>

// <tbody>

// {filteredData.map((row, index) => (

// <tr
// key={index}
// onClick={() => handleSelect(row)}
// style={{
// cursor: "pointer",
// background: selectedRow === row ? "#dfefff" : "white"
// }}
// >

// {columns.map((field) => (
// <td key={field}>
// {row[field] ?? ""}
// </td>
// ))}

// </tr>

// ))}

// </tbody>

// </table>

// </div>
// {/* ---------------- EDIT PANEL ---------------- */}

// {selectedRow && (

// <div
// style={{
// marginTop:"30px",
// padding:"20px",
// border:"1px solid #ccc",
// borderRadius:"8px",
// maxHeight:"500px",
// overflowY:"auto"
// }}
// >

// <h3>Edit Record</h3>

// <div
// style={{
// display:"grid",
// gridTemplateColumns:"220px 220px",
// gap:"12px"
// }}
// >

// {Object.keys(editData).map((field)=>{

// const isDisabled = field === "EMPL_ID";

// return (

// <div key={field}>

// <label>{field}</label>

// <br/>

// <input
// value={editData[field] ?? ""}
// disabled={isDisabled}
// onChange={(e)=>handleChange(field,e.target.value)}
// />

// </div>

// );

// })}

// </div>

// <br/>

// <button onClick={updateRecord}>
// Update Record
// </button>

// </div>

// )}

// </div>

// );

// }


"use client";

import React, { useState } from "react";
import axios from "axios";
// Added icons for a consistent professional look
import { 
  Database, 
  Search, 
  ArrowLeftRight, 
  Save, 
  Calendar, 
  UserCircle,
  ExternalLink,
  X
} from "lucide-react";

export default function CostpointForm() {
  const [exportData, setExportData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [editData, setEditData] = useState({});
  const [columns, setColumns] = useState([]);

  const [searchEmpId, setSearchEmpId] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const API = process.env.NEXT_PUBLIC_API_URL;

  /* ---------------- LOAD DATA ---------------- */
  const loadExportData = async () => {
    try {
      const res = await axios.get(`${API}/api/export-employee`);
      const rows = res.data?.empl_slsry_exp_2?.LDM_EMPLLABINFO_CHILD || [];
      setExportData(rows);

      const allCols = new Set();
      rows.forEach(row => {
        Object.keys(row).forEach(key => allCols.add(key));
      });
      setColumns(Array.from(allCols));
    } catch (error) {
      console.error(error);
    }
  };

  /* ---------------- SELECT ROW ---------------- */
  const handleSelect = (row) => {
    setSelectedRow(row);
    setEditData({ ...row });
  };

  /* ---------------- EDIT HANDLER ---------------- */
  const handleChange = (field, value) => {
    let updated = { ...editData, [field]: value };
    if (field === "HRLY_AMT" && value) updated.ANNL_AMT = null;
    if (field === "ANNL_AMT" && value) updated.HRLY_AMT = null;
    setEditData(updated);
  };

  /* ---------------- UPDATE RECORD ---------------- */
  const updateRecord = async () => {
    try {
      const res = await axios.post(`${API}/api/import-employee`, editData);
      alert("Record Updated Successfully");
    } catch (error) {
      console.error(error);
    }
  };

  /* ---------------- FILTER DATA ---------------- */
  const filteredData = exportData.filter((row) => {
    const empMatch = !searchEmpId || row.EMPL_ID?.toString().includes(searchEmpId);
    const effectDate = row.EFFECT_DT?.split("T")[0];
    const afterStart = !startDate || effectDate >= startDate;
    const beforeEnd = !endDate || effectDate <= endDate;
    return empMatch && afterStart && beforeEnd;
  });

  return (
    <div className="min-h-screen bg-slate-50 p-6 font-sans text-slate-700">
      
      {/* --- TOP NAVIGATION BAR --- */}
      <nav className="flex items-center justify-between mb-6 bg-white p-4 rounded-lg shadow-sm border border-slate-200">
        <div className="flex items-center space-x-2">
          <Database className="text-blue-600" size={24} />
          <h1 className="text-xl font-bold text-slate-800">Salary Manager</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <a 
            href="/manage-employee" // Adjust this path to your actual filename/route
            className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
          >
            <span>Manage Employee Info</span>
            <ExternalLink size={14} />
          </a>
          <button 
            onClick={loadExportData}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-all shadow-sm flex items-center"
          >
            <ArrowLeftRight size={16} className="mr-2" />
            Load Latest Data
          </button>
        </div>
      </nav>

      {/* --- FILTER SECTION --- */}
      <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm mb-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-500 uppercase flex items-center">
            <UserCircle size={14} className="mr-1" /> Search Employee ID
          </label>
          <div className="relative">
            <Search className="absolute left-3 top-2.5 text-slate-400" size={16} />
            <input
              placeholder="Ex: 10002..."
              className="w-full pl-10 pr-3 py-2 border rounded-md text-sm focus:ring-2 focus:ring-blue-400 outline-none border-slate-300"
              value={searchEmpId}
              onChange={(e) => setSearchEmpId(e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-500 uppercase flex items-center">
            <Calendar size={14} className="mr-1" /> Effective After
          </label>
          <input
            type="date"
            className="w-full px-3 py-2 border rounded-md text-sm focus:ring-2 focus:ring-blue-400 outline-none border-slate-300"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-500 uppercase flex items-center">
            <Calendar size={14} className="mr-1" /> Effective Before
          </label>
          <input
            type="date"
            className="w-full px-3 py-2 border rounded-md text-sm focus:ring-2 focus:ring-blue-400 outline-none border-slate-300"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      </div>

      {/* --- DATA TABLE --- */}
      <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden mb-8">
        <div className="overflow-x-auto max-h-[400px]">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-100 sticky top-0 z-10 border-b border-slate-200">
              <tr>
                {columns.map((field) => (
                  <th key={field} className="px-4 py-3 text-[11px] font-bold text-slate-600 uppercase tracking-wider whitespace-nowrap">
                    {field.replace(/_/g, ' ')}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredData.map((row, index) => (
                <tr
                  key={index}
                  onClick={() => handleSelect(row)}
                  className={`cursor-pointer transition-colors ${
                    selectedRow === row ? "bg-blue-50" : "hover:bg-slate-50"
                  }`}
                >
                  {columns.map((field) => (
                    <td key={field} className="px-4 py-3 text-xs text-slate-600 whitespace-nowrap">
                      {row[field] ?? "—"}
                    </td>
                  ))}
                </tr>
              ))}
              {filteredData.length === 0 && (
                <tr>
                  <td colSpan={columns.length || 1} className="px-4 py-10 text-center text-slate-400 italic">
                    No records found. Click "Load Data" or adjust filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* --- EDITING PANEL --- */}
      {selectedRow && (
        <div className="bg-white border-2 border-blue-200 rounded-xl shadow-xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="bg-blue-50 px-6 py-4 border-b border-blue-100 flex justify-between items-center">
            <h3 className="font-bold text-blue-800 flex items-center">
              <ArrowLeftRight size={18} className="mr-2" />
              Edit Employee Record: <span className="ml-2 text-blue-600 font-normal">{selectedRow.NAME || selectedRow.EMPL_ID}</span>
            </h3>
            <button onClick={() => setSelectedRow(null)} className="text-blue-400 hover:text-blue-600">
               <X size={20} />
            </button>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-h-[400px] overflow-y-auto pr-2">
              {Object.keys(editData).map((field) => {
                const isDisabled = field === "EMPL_ID";
                return (
                  <div key={field} className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-tight">
                      {field.replace(/_/g, ' ')}
                    </label>
                    <input
                      className={`w-full px-3 py-1.5 border rounded text-xs outline-none transition-all ${
                        isDisabled 
                        ? "bg-slate-50 text-slate-400 border-slate-200 cursor-not-allowed" 
                        : "border-slate-300 focus:border-blue-400 focus:ring-1 focus:ring-blue-100"
                      }`}
                      value={editData[field] ?? ""}
                      disabled={isDisabled}
                      onChange={(e) => handleChange(field, e.target.value)}
                    />
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex justify-end border-t pt-6">
              <button 
                onClick={updateRecord}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-2.5 rounded-lg text-sm font-bold shadow-lg flex items-center transition-all transform hover:-translate-y-0.5"
              >
                <Save size={18} className="mr-2" />
                Update Record
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}