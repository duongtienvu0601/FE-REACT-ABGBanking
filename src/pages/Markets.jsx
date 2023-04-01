import React, { useState, useEffect } from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import axios from "axios";
import ReactPaginate from "react-paginate";

const Markets = () => {
  const [marketList, setMarketList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(marketList.length / itemsPerPage);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=100&page=1&sparkline=false&price_change_percentage=24h`
      );
      setMarketList(result.data);
    };

    // Call the fetchData function immediately
    fetchData();

    // Update the data every 4 seconds
    const intervalId = setInterval(fetchData, 4000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const renderMarketRows = () =>
    marketList
      .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
      .map((market) => (
        <tr key={market.symbol} className="border-b border-gray-300">
          <td className="p-3 w-80">
            <div className="flex items-center">
              <img
                src={market.image}
                alt={`${market.name} logo`}
                height="25"
                width="25"
              />
              <span className="text-center pl-5">{market.name}</span>
            </div>
          </td>
          <td className="p-3 w-80">{market.current_price.toFixed(3)}$</td>
          <td
            className={`p-3 w-80 ${
              market.price_change_percentage_24h > 0
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {market.price_change_percentage_24h > 0 ? (
              <span>
                &#8593; {market.price_change_percentage_24h.toFixed(2)}%
              </span>
            ) : (
              <span>
                &#8595;
                {Math.abs(market.price_change_percentage_24h).toFixed(2)}%
              </span>
            )}
          </td>
        </tr>
      ));

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <div className="my-10">
        <div className="my-4 mb-10">
          <h1 className="text-white-500 text-2xl font-bold my-10 mb-5">
            Markets
          </h1>
          <table className="w-full border-collapse border-gray-300">
            <thead className="bg-white">
              <tr className="bg-gray-600 ">
                <th className="p-3 text-left text-center text-emerald-400">
                  Symbol
                </th>
                <th className="p-3 text-left text-center text-red-500">
                  Current Price
                </th>
                <th className="p-3 text-left text-center">Price Change 24h</th>
              </tr>
            </thead>
            <tbody>{renderMarketRows()}</tbody>
          </table>
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            pageCount={totalPages}
            onPageChange={({ selected }) => setCurrentPage(selected)}
            containerClassName={"pagination"}
            activeClassName={"active"}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Markets;
