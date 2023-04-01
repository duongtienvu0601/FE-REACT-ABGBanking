import React, { useState, useEffect } from "react";
import QRCode from "react-qr-code";
import Header from "../partials/Header";
import PageIllustration from "../partials/PageIllustration";
import Footer from "../partials/Footer";

function Wallet() {
  const [showForm, setShowForm] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const [showMpass, setShowMpass] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [transactionHistory, setTransactionHistory] = useState([
    {
      id: 1,
      date: "2022-03-01",
      address: "appleghost1101@gmail.com",
      amount: 100,
    },
    {
      id: 2,
      date: "2022-03-05",
      address: "appleghost1101@gmail.com",
      amount: 50,
    },
    {
      id: 3,
      date: "2022-03-10",
      address: "appleghost1101@gmail.com",
      amount: 200,
    },
  ]);

  const handleClick = () => {
    setShowForm(true);
    setShowMpass(false);
    setShowQR(false);
    setShowHistory(false);
  };
  const handleQRClick = () => {
    setShowQR(true);
    setShowMpass(false);
    setShowHistory(false);
    setShowForm(false);
  };
  const handleMpass = () => {
    setShowMpass(true);
  };

  const handleShowHistory = () => {
    setShowHistory(true);
    setShowMpass(false);
    setShowForm(false);
    setShowQR(false);
  };

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch("/api/transactionHistory");
  //     const data = await response.json();
  //     setTransactionHistory(data);
  //   }
  //   fetchData();
  // }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">
        {/*  Page illustration */}
        <div
          className="relative max-w-6xl mx-auto h-0 pointer-events-none"
          aria-hidden="true"
        >
          <PageIllustration />
        </div>
        <section className="relative ">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 ">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20 ">
              {/* Page header */}
              <div class="flex flex-col md:flex-row md:items-center md:justify-between bg-gradient rounded-lg shadow-md p-8 mb-8">
                <div class="text-center md:text-left">
                  <p class="text-xl font-semibold text-gray-900 mb-4">
                  Current balance
                  </p>
                  <p class="text-3xl md:text-4xl font-bold text-purple-600">
                    $10,000.00
                  </p>
                </div>
                <div class="text-center md:text-right mt-4 md:mt-0">
                  <p class="text-xl font-semibold text-gray-900 mb-4">
                  Total value
                  </p>
                  <p class="text-3xl md:text-4xl font-bold text-purple-600">
                    $15,000.00
                  </p>
                </div>
              </div>
              <div className="flex justify-center space-x-20 mt-10">
                <button
                  className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-1 rounded"
                  onClick={handleClick}
                >
                Transfer
                </button>
                <button
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-1 rounded"
                  onClick={handleQRClick}
                >
                Receive
                </button>
                <button
                  className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-1 rounded"
                  onClick={handleShowHistory}
                >
                Transaction History
                </button>
              </div>
              <div className="max-w-1/2 mx-auto mt-10">
                {/* Form fields */}
                <form>
                  {/* Form show QR */}
                  {showQR && (
                    <div className="max-w-sm mx-auto">
                      <div className="flex flex-col items-center justify-center my-4">
                        <div className="bg-white p-4 rounded-md shadow-lg">
                          <QRCode
                            value="https://www.facebook.com/appleghostx"
                            size={200}
                            fgColor="#000000"
                          />
                          <p className="text-red-500 text-base mt-3 font-medium text-center">
                          My QR Code
                          </p>
                        </div>
                        <div className="mt-4">
                          <a
                            href="#"
                            className="btn btn-primary mr-2 px-4 py-2 rounded-md text-white font-medium bg-blue-600 hover:bg-blue-700"
                          >
                            Share
                          </a>
                          <a
                            href="#"
                            className="btn btn-secondary px-4 py-2 rounded-md text-green-100 font-medium bg-green-600 hover:bg-green-500"
                          >
                            Copy
                          </a>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Form show nhập liệu */}
                  {showForm && (
                    <div className="max-w-sm mx-auto">
                      <form className="w-full">
                        <div className="flex flex-wrap -mx-3 mb-4">
                          <div className="w-full px-3">
                            <label
                              className="block text-black-500 text-sm font-medium mb-1"
                              htmlFor="email"
                            >
                            Wallet address <span className="text-red-600">*</span>
                            </label>
                            <input
                              id="email"
                              type="email"
                              className="form-input w-full bg-white text-black-500 border border-gray-400 py-2 px-3 rounded focus:outline-none focus:border-blue-500"
                              placeholder="Enter wallet address"
                              required
                            />
                          </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-4">
                          <div className="w-full px-3">
                            <label className="block text-black-500 text-sm font-medium mb-1">
                            Amount of money <span className="text-red-600">*</span>
                            </label>
                            <input
                              id="money"
                              type="text"
                              className="form-input w-full bg-white text-black-500 border border-gray-400 py-2 px-3 rounded focus:outline-none focus:border-blue-500"
                              placeholder="Enter the amount to be transferred"
                              onKeyPress={(e) => {
                                if (isNaN(parseInt(e.key))) {
                                  e.preventDefault();
                                }
                              }}
                              required
                            />
                          </div>
                        </div>
                        <div className="flex flex-wrap -mx-2 mb-4">
                          <label className="block text-black-500 text-sm font-medium mb-1">
                          Enter mPass <span className="text-red-600">*</span>
                          </label>
                          <div className="mt-1 flex">
                            {[...Array(6)].map((_, index) => (
                              <input
                                key={index}
                                type="tel"
                                maxLength="1"
                                className="w-11 h-11 text-center text-gray-700 border rounded-md mx-3 focus:outline-none focus:border-blue-500"
                                onKeyPress={(e) => {
                                  if (isNaN(parseInt(e.key))) {
                                    e.preventDefault();
                                  }
                                }}
                                onInput={(e) => {
                                  const currentIndex = index;
                                  const nextInput = e.target.nextElementSibling;
                                  const prevInput =
                                    e.target.previousElementSibling;
                                  const { value, maxLength } = e.target;

                                  if (
                                    value &&
                                    value.length >= maxLength &&
                                    nextInput
                                  ) {
                                    nextInput.focus();
                                  } else if (!value && prevInput) {
                                    prevInput.focus();
                                  }
                                }}
                              />
                            ))}
                          </div>
                        </div>
                        <button
                          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mt-7 rounded float-right"
                          onClick={handleMpass}
                        >
                        Payment
                        </button>
                      </form>
                    </div>
                  )}
                  {/* Form show lịch sử */}
                  {showHistory && (
                    <div className="w-full h-full">
                      <div className="my-10">
                        <h2 className="text-white-500 text-lg font-bold mb-5">
                        Transaction history
                        </h2>
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg sm:w-100">
                          <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                              <tr>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                  Day
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                Sender address
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                Amount of money
                                </th>
                              </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                              {transactionHistory.map((transaction) => (
                                <tr key={transaction.id}>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">
                                      {transaction.date}
                                    </div>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">
                                      {transaction.address}
                                    </div>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">
                                      {transaction.amount} $
                                    </div>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Wallet;
