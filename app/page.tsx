// 'use client';

// import React, { useState } from 'react';
// import EmployeeForm from '@/components/EmployeeForm.jsx';
// import '../styles/index.css';

// export default function Home() {
//   return (
//     <div className="page-wrapper">
//       <div className="page-header">
//         <div className="container">
//           <h1>Employee Salary Management System</h1>
//           <p>Manage and track employee salary information</p>
//         </div>
//       </div>
      
//       <div className="container">
//         <EmployeeForm />
//       </div>
//     </div>
//   );
// }

"use client";

import React, { useState } from "react";

import CostpointForm from "@/components/CostpointForm";

export default function Home() {

  const [activeScreen, setActiveScreen] = useState("home");

  return (
    <div style={{padding:"30px"}}>

      <h1>Costpoint Integration</h1>

      {/* Navigation Buttons */}
      <div style={{marginBottom:"20px"}}>

        <button onClick={() => setActiveScreen("home")}>
          Home
        </button>

        <button onClick={() => setActiveScreen("import")}>
          Import Employee
        </button>

      </div>

      {/* Screen Switch */}

      {activeScreen === "home" && (
        <div>
          <h2>Welcome</h2>
          <p>Select an option above.</p>
        </div>
      )}

      {activeScreen === "import" && (
        <CostpointForm />
      )}

    </div>
  );
}

