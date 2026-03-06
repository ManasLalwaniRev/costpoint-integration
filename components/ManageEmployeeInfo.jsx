// import React, { useState } from 'react';
// import { 
//   Plus, Copy, Trash2, Search, ChevronLeft, 
//   ChevronRight, ChevronsLeft, ChevronsRight, 
//   Calendar, RotateCcw, Layout, Maximize2, X, Info
// } from 'lucide-react';

// const EmployeeManagementSystem = () => {
//   const [activeTab, setActiveTab] = useState('Employee Info');

//   const tabs = [
//     'Employee Info', 'HR Data', 'Address/Contact', 
//     'Timesheet Defaults', 'Product Interface', 'Notes'
//   ];

//   // Helper component for labeled inputs to keep code clean
//   const Field = ({ label, children, width = "full" }) => (
//     <div className="flex items-center mb-1.5">
//       <label className="text-[11px] text-slate-600 w-32 shrink-0">{label}</label>
//       <div className={`relative flex-1 max-w-${width}`}>
//         {children}
//       </div>
//     </div>
//   );

//   return (
//     <div className="flex flex-col h-screen bg-white text-slate-700 font-sans border border-slate-300">
//       {/* --- Main Header --- */}
//       <header className="flex items-center justify-between px-3 py-1.5 bg-white border-b border-slate-200">
//         <h1 className="text-sm font-medium text-slate-700">Manage Employee Information</h1>
//         <div className="flex items-center space-x-3">
//           <div className="flex border rounded shadow-sm overflow-hidden">
//             <button className="px-3 py-1 bg-[#5b9bd5] text-white flex items-center text-xs font-medium">
//               <Plus size={14} className="mr-1" /> New
//             </button>
//             {/* <button className="px-3 py-1 bg-white border-l text-slate-600 hover:bg-slate-50 flex items-center text-xs">
//               Copy <ChevronRight size={12} className="ml-1 rotate-90" />
//             </button> */}
//             <button className="px-3 py-1 bg-white border-l text-slate-600 hover:bg-slate-50 text-xs">
//               Delete
//             </button>
//           </div>
//           <div className="flex items-center space-x-1 px-3 border-x border-slate-200 text-slate-500">
//             {/* <input type="checkbox" className="mr-2" /> */}
//             {/* <ChevronsLeft size={16} className="cursor-pointer hover:text-blue-500" /> */}
//             {/* <ChevronLeft size={16} className="cursor-pointer hover:text-blue-500" /> */}
//             {/* <span className="text-[11px] font-bold px-1 whitespace-nowrap">2 of 2 Existing</span> */}
//             {/* <RotateCcw size={14} className="mx-1 cursor-pointer hover:text-blue-500" /> */}
//             {/* <ChevronRight size={16} className="cursor-pointer hover:text-blue-500" /> */}
//             {/* <ChevronsRight size={16} className="cursor-pointer hover:text-blue-500" /> */}
//           </div>
//           <div className="flex items-center space-x-2">
//             <div className="relative">
//               <input type="text" placeholder="Find" className="border rounded px-2 py-0.5 text-xs w-36 focus:outline-blue-400" />
//             </div>
//             {/* <button className="border rounded px-2 py-0.5 text-xs bg-white flex items-center text-slate-600">
//               Query <ChevronRight size={12} className="ml-1 rotate-90" />
//             </button> */}
//             <div className="flex border rounded overflow-hidden">
//                 {/* <button className="p-1 bg-[#5b9bd5] text-white border-r border-blue-400"><Layout size={14}/></button> */}
//                 {/* <button className="p-1 bg-white text-slate-500"><Maximize2 size={14}/></button> */}
//             </div>
//             {/* <X size={18} className="text-slate-400 cursor-pointer hover:text-red-500" /> */}
//           </div>
//         </div>
//       </header>

//       {/* --- Primary Employee Context --- */}
//       <section className="px-4 py-3 bg-white border-b border-slate-200 flex items-center space-x-12">
//         <div className="flex items-center flex-1 max-w-sm">
//           <label className="text-[11px] font-medium w-24">Employee *</label>
//           <input type="text" value="10002" readOnly className="border bg-slate-50 rounded px-2 py-1 w-full text-xs text-slate-600 outline-none" />
//         </div>
//         <div className="flex items-center flex-1 max-w-md">
//           <label className="text-[11px] font-medium w-16 text-center">Name</label>
//           <input type="text" value="Smith, Greg" readOnly className="border bg-slate-50 rounded px-2 py-1 w-full text-xs text-slate-600 outline-none" />
//         </div>
//         <div className="flex items-center space-x-2">
//           <input type="checkbox" id="contractor" className="rounded" />
//           <label htmlFor="contractor" className="text-[11px] font-medium">Contractor</label>
//         </div>
//       </section>

//       {/* --- Tab Navigation --- */}
//       <nav className="flex bg-white border-b border-slate-200 px-2 overflow-x-auto">
//         {tabs.map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`px-4 py-2 text-[11px] transition-all border-b-2 whitespace-nowrap ${
//               activeTab === tab 
//               ? 'border-blue-500 text-blue-600 font-bold bg-blue-50/30' 
//               : 'border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50'
//             }`}
//           >
//             {tab}
//           </button>
//         ))}
//       </nav>

//       {/* --- Dynamic Tab Content --- */}
//       <main className="flex-1 overflow-auto p-5 bg-white">
        
//         {/* TAB 1: Employee Info */}
//         {activeTab === 'Employee Info' && (
//           <div className="grid grid-cols-3 gap-10">
//             <div className="space-y-1">
//               <Field label="Social Security No *"><input type="text" defaultValue="999-99-9999" className="border rounded px-2 py-1 w-full text-xs border-slate-300 focus:border-blue-400 outline-none" /></Field>
//               <Field label="Status *">
//                 <select className="border rounded px-2 py-1 w-full text-xs border-slate-300 bg-white">
//                   <option>Active</option>
//                   <option>Inactive</option>
//                 </select>
//               </Field>
//               <div className="h-4" />
//               <Field label="Last Name *"><input type="text" defaultValue="Smith" className="border rounded px-2 py-1 w-full text-xs border-slate-300" /></Field>
//               <Field label="First Name *"><input type="text" defaultValue="Greg" className="border rounded px-2 py-1 w-full text-xs border-slate-300" /></Field>
//               <Field label="Middle Name"><input type="text" className="border rounded px-2 py-1 w-full text-xs border-slate-300" /></Field>
//               <Field label="Suffix" width="24"><input type="text" className="border rounded px-2 py-1 w-full text-xs border-slate-300" /></Field>
//               <Field label="Displayed Name"><input type="text" defaultValue="Smith, Greg" className="border rounded px-2 py-1 w-full text-xs border-slate-300" /></Field>
//               <div className="h-4" />
//               <Field label="Birth Date">
//                 <input type="text" defaultValue="10/08/1994" className="border rounded px-2 py-1 w-full text-xs border-slate-300" />
//                 <Calendar size={14} className="absolute right-2 top-1.5 text-slate-400" />
//               </Field>
//             </div>

//             <div className="space-y-1">
//               <Field label="Current Hire Date *">
//                 <input type="text" defaultValue="01/01/2016" className="border rounded px-2 py-1 w-full text-xs border-slate-300" />
//                 <Calendar size={14} className="absolute right-2 top-1.5 text-slate-400" />
//               </Field>
//               <Field label="Termination Date">
//                 <input type="text" className="border rounded px-2 py-1 w-full text-xs border-slate-300" />
//                 <Calendar size={14} className="absolute right-2 top-1.5 text-slate-400" />
//               </Field>
//               <Field label="Last Day Worked"><input type="text" disabled className="border rounded px-2 py-1 w-full text-xs bg-slate-50 text-slate-400 cursor-not-allowed border-slate-200" /></Field>
//               <Field label="Past Hire Date">
//                 <input type="text" className="border rounded px-2 py-1 w-full text-xs border-slate-300" />
//                 <Calendar size={14} className="absolute right-2 top-1.5 text-slate-400" />
//               </Field>
//               <div className="h-4" />
//               <Field label="Taxable Entity *">
//                 <input type="text" defaultValue="1" className="border rounded px-2 py-1 w-full text-xs border-slate-300" />
//                 <Search size={14} className="absolute right-2 top-1.5 text-slate-400" />
//               </Field>
//               <Field label="Timesheet Cycle *">
//                 <input type="text" defaultValue="SM" className="border rounded px-2 py-1 w-full text-xs border-slate-300" />
//                 <Search size={14} className="absolute right-2 top-1.5 text-slate-400" />
//               </Field>
//               <Field label="Leave Cycle">
//                 <input type="text" className="border rounded px-2 py-1 w-full text-xs border-slate-300" />
//                 <Search size={14} className="absolute right-2 top-1.5 text-slate-400" />
//               </Field>
//             </div>

//             <div className="space-y-1">
//               <Field label="Locator Code">
//                 <input type="text" className="border rounded px-2 py-1 w-full text-xs border-slate-300" />
//                 <Search size={14} className="absolute right-2 top-1.5 text-slate-400" />
//               </Field>
//               <Field label="Administrator Name"><input type="text" className="border rounded px-2 py-1 w-full text-xs border-slate-300" /></Field>
//               <Field label="Preferred Name"><input type="text" className="border rounded px-2 py-1 w-full text-xs border-slate-300" /></Field>
//               <Field label="Prefix" width="32"><input type="text" className="border rounded px-2 py-1 w-full text-xs border-slate-300" /></Field>
//               <Field label="Prior Name"><input type="text" className="border rounded px-2 py-1 w-full text-xs border-slate-300" /></Field>
//               <div className="flex items-center space-x-2 py-1">
//                 <input type="checkbox" className="rounded border-slate-300" />
//                 <label className="text-[11px] text-slate-600">Eligible for Auto-Pay</label>
//               </div>
//               <div className="h-10" />
//               <Field label="Vendor"><input type="text" disabled className="border rounded px-2 py-1 w-full text-xs bg-slate-50 border-slate-200" /></Field>
//             </div>
//           </div>
//         )}

//         {/* TAB 2: HR Data */}
//         {activeTab === 'HR Data' && (
//           <div className="grid grid-cols-2 gap-16">
//             <div className="space-y-1.5">
//               <Field label="Gender" width="md">
//                 <select className="border rounded px-2 py-1 w-full text-xs border-slate-300 bg-white">
//                   <option>Male</option>
//                   <option>Female</option>
//                 </select>
//               </Field>
//               <Field label="Marital Status" width="24"><input type="text" className="border rounded px-2 py-1 w-full text-xs border-slate-300" /></Field>
//               <div className="flex items-center mb-1.5">
//                 <label className="text-[11px] text-slate-600 w-32 shrink-0">Race</label>
//                 <div className="flex space-x-2 flex-1">
//                   <div className="relative w-32">
//                     <input type="text" defaultValue="ASIAN_WH" className="border rounded px-2 py-1 w-full text-xs border-slate-300" />
//                     <Search size={12} className="absolute right-2 top-1.5 text-slate-400" />
//                   </div>
//                   <div className="relative flex-1 group">
//                     <input type="text" defaultValue="Asian & White non-Hispanic" readOnly className="border rounded px-2 py-1 w-full text-xs bg-slate-50 border-slate-300 pr-7" />
//                     <Info size={14} className="absolute right-2 top-1.5 text-slate-400" />
//                   </div>
//                 </div>
//               </div>
//               <div className="h-4" />
//               <Field label="Visa Type" width="32"><div className="relative"><input type="text" className="border rounded px-2 py-1 w-full text-xs border-slate-300" /><Search size={12} className="absolute right-2 top-1.5 text-slate-400" /></div></Field>
//               <Field label="Visa Exp Date" width="32"><div className="relative"><input type="text" className="border rounded px-2 py-1 w-full text-xs border-slate-300" /><Calendar size={12} className="absolute right-2 top-1.5 text-slate-400" /></div></Field>
//               <div className="h-4" />
//               <Field label="Last Review Date" width="32"><div className="relative"><input type="text" className="border rounded px-2 py-1 w-full text-xs border-slate-300" /><Calendar size={12} className="absolute right-2 top-1.5 text-slate-400" /></div></Field>
//               <Field label="Next Review Date" width="32"><div className="relative"><input type="text" className="border rounded px-2 py-1 w-full text-xs border-slate-300" /><Calendar size={12} className="absolute right-2 top-1.5 text-slate-400" /></div></Field>
//               <div className="h-4" />
//               <Field label="Birth City"><input type="text" className="border rounded px-2 py-1 w-full text-xs border-slate-300" /></Field>
//               <Field label="Birth State/Province" width="48"><div className="relative"><input type="text" className="border rounded px-2 py-1 w-full text-xs border-slate-300" /><Search size={12} className="absolute right-2 top-1.5 text-slate-400" /></div></Field>
//               <Field label="Birth Country" width="48"><div className="relative"><input type="text" className="border rounded px-2 py-1 w-full text-xs border-slate-300" /><Search size={12} className="absolute right-2 top-1.5 text-slate-400" /></div></Field>
//             </div>
            
//             <div className="space-y-4">
//               <div className="space-y-1 pl-4">
//                 <div className="flex items-center space-x-2"><input type="checkbox" className="rounded" /><label className="text-[11px]">Disabled</label></div>
//                 <div className="flex items-center space-x-2"><input type="checkbox" className="rounded" /><label className="text-[11px]">Blind</label></div>
//               </div>
//               <div className="relative border border-slate-200 rounded-sm p-4 mt-6">
//                 <span className="absolute -top-2 left-3 bg-white px-1 text-[10px] font-bold text-blue-600">VETS-4212 Protected Veteran Status</span>
//                 <div className="grid grid-cols-5 gap-2">
//                   <div className="col-span-3 space-y-1">
//                     {[
//                       "Disabled Veteran", "Active Duty Wartime Veteran", "Armed Forces Service Medal Veteran", 
//                       "Recently Separated Veteran", "Protected Veteran (Declined)", "Not a Protected Veteran", "Declined"
//                     ].map(v => (
//                       <div key={v} className="flex items-start space-x-2">
//                         <input type="checkbox" className="mt-0.5 rounded" />
//                         <label className="text-[10px] leading-tight text-slate-600">{v}</label>
//                       </div>
//                     ))}
//                   </div>
//                   <div className="col-span-2 flex flex-col justify-start space-y-1">
//                     <label className="text-[10px] text-slate-500 whitespace-nowrap">Discharge/Release Date</label>
//                     <div className="relative">
//                       <input type="text" className="border rounded px-2 py-0.5 w-full text-xs border-slate-300" />
//                       <Calendar size={12} className="absolute right-2 top-1 text-slate-400" />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* TAB 3: Address/Contact */}
//         {activeTab === 'Address/Contact' && (
//           <div className="space-y-4">
//             <div className="flex space-x-6">
//               <fieldset className="flex-1 border border-slate-200 rounded p-4 relative">
//                 <legend className="text-[10px] font-bold text-blue-600 px-1 ml-2">Mailing Address</legend>
//                 <div className="space-y-1">
//                   {['Line 1', 'Line 2', 'Line 3', 'City'].map(l => (
//                     <Field key={l} label={l}><input type="text" className="border rounded px-2 py-1 w-full text-xs border-slate-300" /></Field>
//                   ))}
//                   {['State/Province', 'Postal Code', 'Country'].map(l => (
//                     <Field key={l} label={l} width="48"><div className="relative"><input type="text" className="border rounded px-2 py-1 w-full text-xs border-slate-300" /><Search size={12} className="absolute right-2 top-1.5 text-slate-400" /></div></Field>
//                   ))}
//                 </div>
//               </fieldset>

//               <fieldset className="flex-1 border border-slate-200 rounded p-4 relative">
//                 <legend className="text-[10px] font-bold text-blue-600 px-1 ml-2">Emergency Contact</legend>
//                 <div className="space-y-1">
//                   {['Contact 1 Name', 'Contact 1 Phone', 'Contact 1 Relationship', 'Contact 2 Name', 'Contact 2 Phone', 'Contact 2 Relationship'].map(l => (
//                     <Field key={l} label={l}><input type="text" className="border rounded px-2 py-1 w-full text-xs border-slate-300" /></Field>
//                   ))}
//                 </div>
//               </fieldset>
//             </div>

//             <fieldset className="border border-slate-200 rounded p-4 relative">
//               <legend className="text-[10px] font-bold text-blue-600 px-1 ml-2">Email Addresses</legend>
//               <div className="space-y-1">
//                 <Field label="Work"><input type="text" className="border rounded px-2 py-1 w-full text-xs border-slate-300" /></Field>
//                 <Field label="Personal"><input type="text" className="border rounded px-2 py-1 w-full text-xs border-slate-300" /></Field>
//               </div>
//             </fieldset>
//           </div>
//         )}

//         {/* TAB 4: Timesheet Defaults */}
//         {activeTab === 'Timesheet Defaults' && (
//           <div className="space-y-1 max-w-2xl">
//             {['Account', 'Organization'].map(f => (
//               <Field key={f} label={f} width="md"><div className="relative"><input type="text" className="border rounded px-2 py-1 w-full text-xs border-slate-300" /><Search size={14} className="absolute right-2 top-1.5 text-slate-400" /></div></Field>
//             ))}
//             <Field label="Project"><div className="relative"><input type="text" className="border rounded px-2 py-1 w-full text-xs border-slate-300" /><Search size={14} className="absolute right-2 top-1.5 text-slate-400" /></div></Field>
//             {['GLC', 'Pay Type'].map(f => (
//               <Field key={f} label={f} width="48"><div className="relative"><input type="text" defaultValue={f === 'GLC' ? 'ZZZ' : 'R'} className="border rounded px-2 py-1 w-full text-xs border-slate-300" /><Search size={14} className="absolute right-2 top-1.5 text-slate-400" /></div></Field>
//             ))}
//             {['Labor Location', "Workers' Comp", 'Ref No 1', 'Ref No 2'].map(f => (
//               <Field key={f} label={f} width="md"><div className="relative"><input type="text" defaultValue={f === "Workers' Comp" ? '7231' : ''} className="border rounded px-2 py-1 w-full text-xs border-slate-300" /><Search size={14} className="absolute right-2 top-1.5 text-slate-400" /></div></Field>
//             ))}
//           </div>
//         )}

//         {/* TAB 5: Product Interface */}
//         {activeTab === 'Product Interface' && (
//           <div className="space-y-8">
//             <div className="pt-2">
//               <Field label="Payroll Service ID" width="48">
//                 <input type="text" className="border rounded px-2 py-1 w-full text-xs border-slate-300" />
//               </Field>
//             </div>
//             <fieldset className="border-t border-slate-200 relative pt-6">
//               <legend className="absolute -top-2.5 left-0 text-[11px] font-bold text-blue-600 pr-2 bg-white">Project Manufacturing</legend>
//               <Field label="Plant">
//                 <input type="text" disabled className="border rounded px-2 py-1 w-full text-xs bg-slate-50 border-slate-200" />
//               </Field>
//             </fieldset>
//           </div>
//         )}

//         {/* TAB 6: Notes */}
//         {activeTab === 'Notes' && (
//           <div className="h-full flex flex-col">
//             <textarea 
//               className="flex-1 w-full border border-slate-200 rounded p-4 text-xs focus:outline-blue-200 resize-none"
//               placeholder="Enter employee notes here..."
//             />
//           </div>
//         )}

//       </main>

//       {/* --- Footer Controls --- */}
//       <footer className="bg-slate-50 border-t border-slate-200 px-4 py-2 flex items-center space-x-6 text-[11px] text-[#5b9bd5] font-semibold">
//         <button className="hover:underline">Salary Details</button>
//         <span className="text-slate-300">|</span>
//         <button className="hover:underline">Leave Beginning Balances</button>
//         <span className="text-slate-300">|</span>
//         <button className="hover:underline">Leave</button>
//         <span className="text-slate-300">|</span>
//         <button className="border rounded px-2 py-0.5 bg-white text-slate-600 flex items-center hover:bg-white shadow-sm">
//           <span className="mr-1 font-bold">⋮</span> More
//         </button>
//       </footer>
//     </div>
//   );
// };

// export default EmployeeManagementSystem;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  Plus, Search, Calendar, Info, ChevronLeft, 
  ChevronRight, ChevronsLeft, ChevronsRight, 
  RotateCcw, Layout, Maximize2, X 
} from 'lucide-react';

const EmployeeManagementSystem = () => {
  const [activeTab, setActiveTab] = useState('Employee Info');
  const [employeeData, setEmployeeData] = useState(null);
  const [loading, setLoading] = useState(true);

  const tabs = [
    'Employee Info', 'HR Data', 'Address/Contact', 
    'Timesheet Defaults', 'Product Interface', 'Notes'
  ];

  // 1. Fetching Data from your Backend Route
  useEffect(() => {
    const fetchData = async () => {
      try {
        const API = process.env.NEXT_PUBLIC_API_URL;
        const res = await axios.get(`${API}/api/manage-employee-data`);
        
        // Path matches your provided XML: <empl_info><LDMEINFO_EMPL>
        const employees = res.data?.empl_info?.LDMEINFO_EMPL || [];
        const selectedEmpl = Array.isArray(employees) ? employees[0] : employees;
        
        setEmployeeData(selectedEmpl);
        setLoading(false);
      } catch (err) {
        console.error("Error loading employee data:", err);
        setLoading(false); // Fallback to dummy state if API fails
      }
    };
    fetchData();
  }, []);

  // Helper: Get the most recent labor child record
  const latestLabor = employeeData?.LDM_EMPLLABINFO_CHILD?.[0] || {};

  // UI Helper for fields
  const Field = ({ label, children, width = "full" }) => (
    <div className="flex items-center mb-1.5">
      <label className="text-[11px] text-slate-600 w-32 shrink-0">{label}</label>
      <div className={`relative flex-1 max-w-${width}`}>
        {children}
      </div>
    </div>
  );

  if (loading) return <div className="p-10 text-slate-500 text-xs">Connecting to Costpoint...</div>;

  return (
    <div className="flex flex-col h-screen bg-white text-slate-700 font-sans border border-slate-300">
      
      {/* --- TOP HEADER BAR --- */}
      <header className="flex items-center justify-between px-3 py-1.5 bg-white border-b border-slate-200">
        <h1 className="text-sm font-medium text-slate-700">Manage Employee Information</h1>
        <div className="flex items-center space-x-3">
          <div className="flex border rounded shadow-sm overflow-hidden text-xs">
            <button className="px-3 py-1 bg-[#5b9bd5] text-white flex items-center font-medium">
              <Plus size={14} className="mr-1" /> New
            </button>
            <button className="px-3 py-1 bg-white border-l text-slate-600">Delete</button>
          </div>
          <div className="flex items-center space-x-1 px-3 border-x border-slate-200 text-slate-500">
            <ChevronsLeft size={16} className="cursor-pointer hover:text-blue-500" />
            <ChevronLeft size={16} className="cursor-pointer hover:text-blue-500" />
            <span className="text-[11px] font-bold px-1 whitespace-nowrap">1 of 2 Existing</span>
            <RotateCcw size={14} className="mx-1" />
            <ChevronRight size={16} className="cursor-pointer hover:text-blue-500" />
            <ChevronsRight size={16} className="cursor-pointer hover:text-blue-500" />
          </div>
          <X size={18} className="text-slate-400 cursor-pointer" />
        </div>
      </header>

      {/* --- PRIMARY CONTEXT (Mapped from XML) --- */}
      <section className="px-4 py-3 bg-white border-b border-slate-200 flex items-center space-x-12">
        <div className="flex items-center flex-1 max-w-sm">
          <label className="text-[11px] font-medium w-24">Employee *</label>
          <input 
            type="text" 
            value={employeeData?.EMPL_ID || "10002"} 
            readOnly 
            className="border bg-slate-50 rounded px-2 py-1 w-full text-xs outline-none" 
          />
        </div>
        <div className="flex items-center flex-1 max-w-md">
          <label className="text-[11px] font-medium w-16 text-center">Name</label>
          <input 
            type="text" 
            value={employeeData?.LAST_FIRST_NAME || "Smith, Greg"} 
            readOnly 
            className="border bg-slate-50 rounded px-2 py-1 w-full text-xs outline-none" 
          />
        </div>
        <div className="flex items-center space-x-2">
          <input type="checkbox" checked={employeeData?.CONTRACTOR_FL === 'Y'} readOnly className="rounded" />
          <label className="text-[11px] font-medium">Contractor</label>
        </div>
      </section>

      {/* --- TAB NAVIGATION --- */}
      <nav className="flex bg-white border-b border-slate-200 px-2 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-[11px] transition-all border-b-2 whitespace-nowrap ${
              activeTab === tab 
              ? 'border-blue-500 text-blue-600 font-bold bg-blue-50/30' 
              : 'border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50'
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>

      {/* --- DYNAMIC TAB CONTENT --- */}
      <main className="flex-1 overflow-auto p-5 bg-white">
        
        {/* TAB 1: EMPLOYEE INFO */}
        {activeTab === 'Employee Info' && (
          <div className="grid grid-cols-3 gap-10">
            <div className="space-y-1">
              <Field label="Social Security No *">
                <input type="text" defaultValue={employeeData?.SSN_ID || "999-99-9999"} className="border rounded px-2 py-1 w-full text-xs border-slate-300" />
              </Field>
              <Field label="Status *">
                <select className="border rounded px-2 py-1 w-full text-xs border-slate-300 bg-white" value={employeeData?.S_EMPL_STATUS_CD || "ACT"}>
                  <option value="ACT">Active</option>
                  <option value="IN">Inactive</option>
                </select>
              </Field>
              <div className="h-4" />
              <Field label="Last Name *"><input type="text" defaultValue={employeeData?.LAST_NAME || "Smith"} className="border rounded px-2 py-1 w-full text-xs border-slate-300" /></Field>
              <Field label="First Name *"><input type="text" defaultValue={employeeData?.FIRST_NAME || "Greg"} className="border rounded px-2 py-1 w-full text-xs border-slate-300" /></Field>
              <Field label="Displayed Name"><input type="text" defaultValue={employeeData?.LAST_FIRST_NAME || "Smith, Greg"} className="border rounded px-2 py-1 w-full text-xs border-slate-300" /></Field>
              <div className="h-4" />
              <Field label="Birth Date">
                <div className="relative">
                  <input type="text" defaultValue={employeeData?.BIRTH_DT?.split('T')[0] || "1994-10-08"} className="border rounded px-2 py-1 w-full text-xs border-slate-300" />
                  <Calendar size={14} className="absolute right-2 top-1.5 text-slate-400" />
                </div>
              </Field>
            </div>

            <div className="space-y-1">
              <Field label="Current Hire Date *">
                <div className="relative">
                  <input type="text" defaultValue={employeeData?.ORIG_HIRE_DT?.split('T')[0] || "2016-01-01"} className="border rounded px-2 py-1 w-full text-xs border-slate-300" />
                  <Calendar size={14} className="absolute right-2 top-1.5 text-slate-400" />
                </div>
              </Field>
              <Field label="Last Day Worked">
                <input type="text" disabled value={latestLabor?.LDM_EMPLLABINFO_CHILD_EFFECT_DT?.split('T')[0] || ""} className="border rounded px-2 py-1 w-full text-xs bg-slate-50 border-slate-200" />
              </Field>
              <div className="h-4" />
              <Field label="Taxable Entity *">
                <div className="relative">
                  <input type="text" defaultValue={employeeData?.TAXBLE_ENTITY_ID || "1"} className="border rounded px-2 py-1 w-full text-xs border-slate-300" />
                  <Search size={14} className="absolute right-2 top-1.5 text-slate-400" />
                </div>
              </Field>
              <Field label="Timesheet Cycle *">
                <div className="relative">
                  <input type="text" defaultValue={employeeData?.TS_PD_CD || "SM"} className="border rounded px-2 py-1 w-full text-xs border-slate-300" />
                  <Search size={14} className="absolute right-2 top-1.5 text-slate-400" />
                </div>
              </Field>
            </div>
          </div>
        )}

        {/* TAB 2: HR DATA */}
        {activeTab === 'HR Data' && (
          <div className="grid grid-cols-2 gap-16">
            <div className="space-y-1.5">
              <Field label="Gender" width="md">
                <input type="text" value={employeeData?.SEX_CD_DESC || "Male"} className="border rounded px-2 py-1 w-full text-xs border-slate-300" />
              </Field>
              <Field label="Race" width="md">
                <div className="relative">
                  <input type="text" value={employeeData?.S_RACE_CD || "ASIAN_WH"} className="border rounded px-2 py-1 w-full text-xs border-slate-300" />
                  <Search size={12} className="absolute right-2 top-1.5 text-slate-400" />
                </div>
              </Field>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-1 pl-4">
                <div className="flex items-center space-x-2"><input type="checkbox" checked={employeeData?.DISABLED_FL === 'Y'} readOnly className="rounded" /><label className="text-[11px]">Disabled</label></div>
                <div className="flex items-center space-x-2"><input type="checkbox" checked={employeeData?.BLIND_FL === 'Y'} readOnly className="rounded" /><label className="text-[11px]">Blind</label></div>
              </div>
              <div className="relative border border-slate-200 rounded-sm p-4 mt-6">
                <span className="absolute -top-2 left-3 bg-white px-1 text-[10px] font-bold text-blue-600">VETS-4212 Protected Veteran Status</span>
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" checked={employeeData?.VET_STATUS_NP === 'Y'} readOnly className="rounded" />
                    <label className="text-[10px] text-slate-600">Not a Protected Veteran</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" checked={employeeData?.VET_STATUS_DECLINED === 'Y'} readOnly className="rounded" />
                    <label className="text-[10px] text-slate-600">Declined to provide veteran status</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: TIMESHEET DEFAULTS */}
        {activeTab === 'Timesheet Defaults' && (
          <div className="space-y-1 max-w-2xl">
            <Field label="Organization" width="md">
              <div className="relative">
                <input type="text" value={latestLabor?.LDM_EMPLLABINFO_CHILD_ORG_ID || "1.01.02"} className="border rounded px-2 py-1 w-full text-xs border-slate-300" />
                <Search size={14} className="absolute right-2 top-1.5 text-slate-400" />
              </div>
            </Field>
            <Field label="Pay Type" width="48">
               <input type="text" value={employeeData?.PAY_TYPE || "R"} className="border rounded px-2 py-1 w-full text-xs border-slate-300" />
            </Field>
            <Field label="Workers' Comp" width="md">
              <div className="relative">
                <input type="text" value={employeeData?.WORK_COMP_CD || "7231"} className="border rounded px-2 py-1 w-full text-xs border-slate-300" />
                <Search size={14} className="absolute right-2 top-1.5 text-slate-400" />
              </div>
            </Field>
          </div>
        )}

        {/* TAB 6: NOTES (Empty placeholder as requested) */}
        {activeTab === 'Notes' && (
          <div className="h-full flex flex-col">
            <textarea 
              className="flex-1 w-full border border-slate-200 rounded p-4 text-xs focus:outline-blue-200 resize-none"
              placeholder="Enter employee notes here..."
            />
          </div>
        )}

      </main>

      {/* --- FOOTER CONTROLS --- */}
      <footer className="bg-slate-50 border-t border-slate-200 px-4 py-2 flex items-center space-x-6 text-[11px] text-[#5b9bd5] font-semibold">
        <button className="hover:underline">Salary Details</button>
        <span className="text-slate-300">|</span>
        <button className="hover:underline">Leave Beginning Balances</button>
        <button className="border rounded px-2 py-0.5 bg-white text-slate-600 ml-auto flex items-center shadow-sm">
          <span className="mr-1 font-bold">⋮</span> More
        </button>
      </footer>
    </div>
  );
};

export default EmployeeManagementSystem;