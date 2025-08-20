export default function CreateBill() {
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
            <input type="text" placeholder="Enter Medicine Name or Batch No"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
            <input type="text" placeholder="Batch No" readOnly
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
                <tr className="border-t even:bg-gray-50">
                  <td className="px-4 py-2">1</td>
                  <td className="px-4 py-2">Paracetamol</td>
                  <td className="px-4 py-2">2</td>
                  <td className="px-4 py-2">$10</td>
                </tr>
                                <tr className="border-t even:bg-gray-50">
                  <td className="px-4 py-2">1</td>
                  <td className="px-4 py-2">Paracetamol</td>
                  <td className="px-4 py-2">2</td>
                  <td className="px-4 py-2">$10</td>
                </tr>
                                <tr className="border-t even:bg-gray-50">
                  <td className="px-4 py-2">1</td>
                  <td className="px-4 py-2">Paracetamol</td>
                  <td className="px-4 py-2">2</td>
                  <td className="px-4 py-2">$10</td>
                </tr>
                                <tr className="border-t even:bg-gray-50">
                  <td className="px-4 py-2">1</td>
                  <td className="px-4 py-2">Paracetamol</td>
                  <td className="px-4 py-2">2</td>
                  <td className="px-4 py-2">$10</td>
                </tr>
                                <tr className="border-t even:bg-gray-50">
                  <td className="px-4 py-2">1</td>
                  <td className="px-4 py-2">Paracetamol</td>
                  <td className="px-4 py-2">2</td>
                  <td className="px-4 py-2">$10</td>
                </tr>
                                <tr className="border-t even:bg-gray-50">
                  <td className="px-4 py-2">1</td>
                  <td className="px-4 py-2">Paracetamol</td>
                  <td className="px-4 py-2">2</td>
                  <td className="px-4 py-2">$10</td>
                </tr>
                                <tr className="border-t even:bg-gray-50">
                  <td className="px-4 py-2">1</td>
                  <td className="px-4 py-2">Paracetamol</td>
                  <td className="px-4 py-2">2</td>
                  <td className="px-4 py-2">$10</td>
                </tr>
                <tr className="border-t even:bg-gray-50">
                  <td className="px-4 py-2">2</td>
                  <td className="px-4 py-2">Amoxicillin</td>
                  <td className="px-4 py-2">1</td>
                  <td className="px-4 py-2">$15</td>
                </tr>
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
