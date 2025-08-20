"use client"
import BillItem from "@/components/BillItem";
import { useState } from "react";
export default function CreateBill() {
    const medicineData = [
  {
    name: "Paracetamol",
    batchNo: "B001",
    qty: 150,
    price: 2.5,
    expiryDate: "2023-05-20"
  },
  {
    name: "Ibuprofen",
    batchNo: "B002",
    qty: 200,
    price: 3.0,
    expiryDate: "2027-01-15"
  },
  {
    name: "Amoxicillin",
    batchNo: "B003",
    qty: 120,
    price: 5.5,
    expiryDate: "2025-12-01"
  },
  {
    name: "Ciprofloxacin",
    batchNo: "B004",
    qty: 80,
    price: 7.0,
    expiryDate: "2026-09-10"
  },
  {
    name: "Cetirizine",
    batchNo: "B005",
    qty: 300,
    price: 1.2,
    expiryDate: "2025-11-30"
  },
  {
    name: "Metformin",
    batchNo: "B006",
    qty: 250,
    price: 4.0,
    expiryDate: "2027-03-05"
  },
  {
    name: "Aspirin",
    batchNo: "B007",
    qty: 500,
    price: 1.8,
    expiryDate: "2026-07-22"
  },
  {
    name: "Omeprazole",
    batchNo: "B008",
    qty: 180,
    price: 6.0,
    expiryDate: "2026-10-01"
  },
  {
    name: "Azithromycin",
    batchNo: "B009",
    qty: 90,
    price: 8.5,
    expiryDate: "2025-09-15"
  },
  {
    name: "Doxycycline",
    batchNo: "B010",
    qty: 60,
    price: 9.0,
    expiryDate: "2025-12-30"
  }
];

function getExpiryInfo(expiryDate: string) {
  const today = new Date();
  const expiry = new Date(expiryDate);

  const diffMs = expiry.getTime() - today.getTime();
  if (diffMs <= 0) {
    return { value: 0, unit: "expired" };
  }

  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (days < 7) {
    return { value: days, unit: "days" };
  } else if (days < 30) {
    const weeks = Math.floor(days / 7);
    return { value: weeks, unit: "weeks" };
  } else {
    const months = Math.floor(days / 30); // approx
    return { value: months, unit: "months" };
  }
}


    interface BillItems {
    sNo :number ,
    medicineName: string ,
    quantity : number,
    price : number
}
    const [billitems , setBillitems] = useState({});
    const [item , setitems] = useState({});
    const [suggestions , setSuggestions] = useState<any[]>(medicineData);

    const [inputMedicineName , setInputMedicineName] = useState("")
    const handleMedicineNameChange = (e:any) => {
          setInputMedicineName(prev => prev = e.target.value)
          //console.log(inputMedicineName)

    }
    const handleSelectSuggestion = (med : any) => {

    }


  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center ">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center bg-white shadow-sm px-8 py-4 border-b border-gray-200">
        <h1 className="text-xl font-bold text-blue-600">💊 PharmaTracker</h1>
        <div className="space-x-6 text-gray-700 font-medium">
          <a href="#" className="hover:text-blue-600">Create Bill</a>
          <a href="#" className="hover:text-blue-600">Add Medicine</a>
          <a href="#" className="hover:text-blue-600">Search Medicine</a>
          <a href="#" className="hover:text-blue-600">Login</a>
        </div>
      </nav>

      {/* Card Container */}
      <div className="bg-white rounded-xl shadow-md p-8 w-full max-w-5xl grid md:grid-cols-2 gap-8 mt-8">
        {/* Form */}
        <div>
          <h2 className="text-xl font-semibold mb-6 text-gray-800">Create Bill</h2>
          <div className="space-y-4">
            <div className="relative">
            <input  onChange={handleMedicineNameChange} type="text" placeholder="Enter Medicine Name or Batch No"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
               {suggestions.length > 0 && (
              <ul className="absolute z-10 bg-white border border-gray-300 rounded-lg mt-1 w-full max-h-60 overflow-y-auto shadow-md">
                {suggestions.map((med, idx ) => {
                 const {value , unit} = getExpiryInfo(med.expiryDate);
                return  (
                    
                  <li
                    key={idx}
                    onClick={() => handleSelectSuggestion(med)}
                     className={`p-2 cursor-pointer flex justify-between items-center ${
    unit === "expired" ? "bg-red-100 text-red-600" : "hover:bg-blue-100"
  }`}
                  >
                    {med.name} ({med.batchNo} )  
                    {unit == "expired" && 
                      <p className="justify-end inline hi">Expired in {value} {unit} </p> }      

                      <p className="justify-end inline hi">Expired in {value} {unit} </p>     

               
                  </li>
                ) })}
              </ul>
            )}
            </div>
            <input disabled type="text" placeholder="Batch No" readOnly
              className="w-full px-4 py-2 rounded-lg bg-gray-100 border border-gray-300 text-gray-600" />
            <input type="text" placeholder="Price" readOnly
              className="w-full px-4 py-2 rounded-lg bg-gray-100 border border-gray-300 text-gray-600" />
            <div className="flex gap-4">
              <input type="number" placeholder="Quantity"
                className="w-1/2 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
              <input type="number" placeholder="Discount %"
                className="w-1/2 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
            </div>
            <button className="w-full py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
              Add
            </button>
          </div>
        </div>

        {/* Table */}
        <div>
          <h2 className="text-xl font-semibold mb-6 text-gray-800">Bill Items</h2>
          <div className="overflow-hidden rounded-lg border border-gray-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-100 text-gray-700 font-semibold">
                <tr>
                  <th className="px-4 py-2">S.No</th>
                  <th className="px-4 py-2">Medicine Name</th>
                  <th className="px-4 py-2">Quantity</th>
                  <th className="px-4 py-2">Price</th>
                </tr>
              </thead>
              <tbody>
              {/* <BillItem  data = {} /> */}
              </tbody>
              <tfoot className="bg-gray-200 text-gray-900 font-semibold  border-t-2">
                <tr className="border-t even:bg-gray-50">
                  <td className="px-4 py-2">Total Amount</td>
                  <td className="px-4 py-2"> </td>
                  <td className="px-4 py-2"></td>
                   
                  <td className="px-4 py-2">$15</td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div className="mt-2 space-y-4">
                      <input type="text" placeholder="Enter Patient Name: "
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                          <input type="text" placeholder="Enter Patient Email:"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                </div>
          <button className="w-full mt-6 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
            Generate Bill
          </button>
        </div>
      </div>
    </div>
  );
}
