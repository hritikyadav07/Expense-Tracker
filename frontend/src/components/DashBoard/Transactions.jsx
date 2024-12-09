import React, { useEffect, useState } from 'react';
import transactions from '../../resources/transactions.json';

function Transaction() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Since transactions are already imported, we can set them directly
    setData(transactions.transactions);
  }, []);

  return (
    <div className="bg-slate-100 p-3">
      <div className="text-3xl font-semibold">Transaction</div>
      <div className="py-4 overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left text-gray-600 font-semibold bg-gray-200 border-b">Description</th>
              <th className="px-4 py-2 text-left text-gray-600 font-semibold bg-gray-200 border-b">Date</th>
              <th className="px-4 py-2 text-left text-gray-600 font-semibold bg-gray-200 border-b">Category</th>
              {/* <th className="px-4 py-2 text-left text-gray-600 font-semibold bg-gray-200 border-b">To/From</th> */}
              <th className="px-4 py-2 text-left text-gray-600 font-semibold bg-gray-200 border-b">Amount</th>
            </tr>
          </thead>
          <tbody id="transaction-table-body">
            {data.map((transaction, index) => (
              <tr key={index} className="border-b hover:bg-gray-100">
                <td className="px-4 py-2 text-gray-700">{transaction.description}</td>
                <td className="px-4 py-2 text-gray-700">{transaction.date}</td>
                <td className="px-4 py-2 text-gray-700">{transaction.category}</td>
                {/* <td className="px-4 py-2 text-gray-700">{transaction.person}</td> */}
                <td className={`px-4 py-2 ${transaction.amount.startsWith('+') ? 'text-green-500' : 'text-red-500'} font-medium`}>
                  {transaction.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Transaction;

// to fetch data form the mongo db

// useEffect(() => {
//   async function fetchTransactions() {
//     try {
//       const response = await fetch('http://localhost:5000/api/transactions');
//       const data = await response.json();
//       setTransactions(data);
//     } catch (error) {
//       console.error('Error fetching transactions:', error);
//     }
//   }

//   fetchTransactions();
// }, []);
