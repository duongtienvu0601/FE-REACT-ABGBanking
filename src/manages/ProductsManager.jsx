import React, { useState } from "react";
import Header from "../partials/Header";
import PageIllustration from "../partials/PageIllustration";
import ReactPaginate from "react-paginate";
import Footer from "../partials/Footer";
import { ReactFragment } from "react";

function ProductsManager() {
  let [products, setProducts] = useState([
    { id: 1, name: "Sản phẩm 1", price: 10, image: "src/images/ABG_logo.png" },
    { id: 2, name: "Sản phẩm 2", price: 20, image: "src/images/ABG_logo.png" },
    { id: 3, name: "Sản phẩm 3", price: 30, image: "src/images/ABG_logo.png" },
    { id: 4, name: "Sản phẩm 1", price: 10, image: "src/images/ABG_logo.png" },
    { id: 5, name: "Sản phẩm 2", price: 20, image: "src/images/ABG_logo.png" },
    { id: 6, name: "Sản phẩm 3", price: 30, image: "src/images/ABG_logo.png" },
    { id: 7, name: "Sản phẩm 1", price: 10, image: "src/images/ABG_logo.png" },
    { id: 8, name: "Sản phẩm 2", price: 20, image: "src/images/ABG_logo.png" },
    { id: 9, name: "Sản phẩm 3", price: 30, image: "src/images/ABG_logo.png" },
    { id: 10, name: "Sản phẩm 1", price: 10, image: "src/images/ABG_logo.png" },
    { id: 11, name: "Sản phẩm 2", price: 20, image: "src/images/ABG_logo.png" },
    { id: 12, name: "Sản phẩm 3", price: 30, image: "src/images/ABG_logo.png"   },
  ]);
  let [page, setPage] = useState(0);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(products.length / itemsPerPage);
  // lưu trữ thông tin sản phẩm mới
  const [newProduct, setNewProduct] = useState({ name: "", price: "" });
  // thêm sản phẩm mới vào danh sách
  const addProduct = () => {
    if (newProduct.name !== "" && newProduct.price !== "") {
      const newId = products.length + 1;
      const newProductWithId = { ...newProduct, id: newId };
      setProducts((prevProducts) => [...prevProducts, newProductWithId]);
      setNewProduct({ name: "", price: "" });
    }
  };

  // xóa sản phẩm khỏi danh sách
  const deleteProduct = (id) => {
    setProducts((prevProducts) =>
      prevProducts
        .filter((product) => product.id !== id)
        .map((product, index) => ({ ...product, id: index + 1 }))
    );
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <PageIllustration />
      <div className="my-10">
        <div className="my-4 mb-10">
          <React.Fragment>
            <div className="flex justify-center">
              <form className="mr-20">
                <h1 className="text-white-500 text-2xl font-bold my-10 mb-5">
                  List Products
                </h1>
                <div className="grid justify-center">
                  <table className="table-auto border-collapse border-gray-300">
                    <thead className="bg-black-800 text-white">
                      <tr>
                        <th className="p-3">ID</th>
                        <th className="p-3 text-center">Name</th>
                        <th className="p-3">Price</th>
                        <th className="p-3">Functionality</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products
                        .slice(page * itemsPerPage, (page + 1) * itemsPerPage)
                        .map((product) => (
                          <tr
                            key={product.id}
                            className={`${
                              product.id % 2 === 0
                                ? "bg-gray-200"
                                : "bg-gray-100"
                            } hover:bg-gray-300`}
                          >
                            <td className="p-3 text-black">{product.id}</td>
                            <td className="p-3">
                              <div className="flex items-center">
                                <img
                                  src={product.image}
                                  alt={product.name}
                                  className="w-8 h-8 mr-2"
                                />
                                <span className="text-black">
                                  {product.name}
                                </span>
                              </div>
                            </td>
                            <td className="p-3 text-black">{product.price}</td>
                            <td className="p-3 text-black">
                              <button
                                type="button"
                                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                                onClick={() => deleteProduct(product.id)}
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
                <ReactPaginate
                  previousLabel={"<"}
                  nextLabel={">"}
                  pageCount={totalPages}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={(data) => setPage(data.selected)}
                  containerClassName={"pagination"}
                  activeClassName={"active"}
                  ariaLabel={"Product navigation"}
                />
              </form>
              <form>
                <div className="add-product-form">
                  <h2 className="text-white-500 text-2xl font-bold my-10 mb-5">
                    Add Products
                  </h2>
                  <div className="form-group">
                    <label htmlFor="productName">Name</label>
                    <input
                      type="text"
                      id="productName"
                      className="form-control w-80"
                      value={newProduct.name}
                      onChange={(e) =>
                        setNewProduct({ ...newProduct, name: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group ">
                    <label htmlFor="productPrice">Price</label>
                    <div className="input-group">
                      <input
                        type="text"
                        id="productPrice"
                        className="form-control w-80"
                        value={newProduct.price}
                        onChange={(e) =>
                          setNewProduct({
                            ...newProduct,
                            price: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <button
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                    onClick={() => addProduct()}
                    disabled={newProduct.name === "" || newProduct.price === ""}
                  >
                    Add
                  </button>
                </div>
              </form>
            </div>
          </React.Fragment>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductsManager;
