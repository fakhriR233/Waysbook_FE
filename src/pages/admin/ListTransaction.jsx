import React from "react";

const ListTransaction = () => {
  return (
    <div className="mt-32 mx-32">
      <p> LIST TRANSACTION WOI</p>

      <div className="overflow-x-auto relative shadow-md sm:rounded-lg p-5">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6 text-red-600">
                No
              </th>
              <th scope="col" className="py-3 px-6 text-red-600">
                Users
              </th>
              <th scope="col" className="py-3 px-6 text-red-600">
                Evidence of Payment
              </th>
              <th scope="col" className="py-3 px-6 text-red-600">
                Book Purchased
              </th>
              <th scope="col" className="py-3 px-6 text-red-600">
                Total Payment
              </th>
              <th scope="col" className="py-3 px-6 text-red-600">
                Status Payment
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                1
              </th>
              <td className="py-4 px-6">Mr. Rogers</td>
              <td className="py-4 px-6  text-green-500">BCA.jpeg</td>
              <td className="py-4 px-6">Book</td>
              <td className="py-4 px-6  text-green-500">$2999</td>
              <td className="py-4 px-6 text-green-500">Success</td>
            </tr>
            <tr className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                2
              </th>
              <td className="py-4 px-6">Mr. White</td>
              <td className="py-4 px-6  text-green-500">Bank of America.png</td>
              <td className="py-4 px-6">Book 2</td>
              <td className="py-4 px-6 text-green-500">$1999</td>
              <td className="py-4 px-6 text-red-600">Failed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListTransaction;
