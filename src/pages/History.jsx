import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../partials/Header";
import PageIllustration from "../partials/PageIllustration";

function History() {
  // define transaction data as an array of objects https://api.stripe.com/v1/charges https://api.stripe.com/v1/charges/{charge_id}
  const [transactions, setTransactions] = useState([
    { id: 1, type: "Mua ETH", amount: 1000, date: "2022-03-01" },
    { id: 2, type: "Bán BTC", amount: 2500, date: "2022-03-01" },
    { id: 3, type: "Mua LTC", amount: 500, date: "2022-03-01" },
    { id: 4, type: "Mua BTC", amount: 2000, date: "2022-03-01" },
  ]);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-black">
      {/* Site header */}
      <Header />

      {/* Page content */}
      <main className="flex-grow">
        {/* Page illustration */}
        <div
          className="relative max-w-6xl mx-auto h-0 pointer-events-none"
          aria-hidden="true"
        >
          <PageIllustration />
        </div>

        {/* Wallet section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 md:pt-40 pb-12 md:pb-20">
          {/* Wallet transaction history */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Transaction history
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto mx-auto">
                <thead>
                  <tr className="text-center bg-gray-800 border-b-2 border-gray-700">
                    <th className="py-3 px-4 font-semibold text-black-700">
                      Transaction type
                    </th>
                    <th className="py-3 px-4 font-semibold text-gray-300">
                      Amount
                    </th>
                    <th className="py-3 px-4 font-semibold text-gray-300">
                      Execution date
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {transactions.map(({ id, type, amount, date }) => (
                    <tr
                      key={id}
                      className="text-center border-b border-gray-700"
                    >
                      <td className="py-4 px-4 text-black-900">{type}</td>
                      <td className="py-4 px-4 text-black-900">${amount}</td>
                      <td className="py-6 px-4 text-black-900">{date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
export default History;
