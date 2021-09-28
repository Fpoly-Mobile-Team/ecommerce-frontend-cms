import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NavLeft from "../components/NavLeft";
import { products } from "../data/products";
import { Link } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";
import { useState } from "react";

const checkProducts = (list) => {
  if (list.length >= 5) {
    return list.slice(0, 5);
  }
  return list;
};

const searchProductByKeyWord = (list, keyword) => {
  if (keyword.length > 0) {
    return list.filter(
      (el) => el.title.toLowerCase() === keyword.toLowerCase()
    );
  }
  return checkProducts(list);
};

const Products = () => {
  const [keyword, setKeyword] = useState("");
  return (
    <div>
      <div className="flex w-full,">
        <div className="nav-left w-2/12 h-screen bg-gray-700">
          <NavLeft />
        </div>
        <div className="main w-10/12 bg-mainWhite">
          <Navbar />
          <div className="content px-10 py-5 w-full">
            <div className="search-product flex justify-center shadow my-2 ">
              <input
                className="w-full p-2"
                type="search"
                name=""
                id=""
                placeholder="Search by Product name ..."
                onChange={(e) => setKeyword(e.target.value)}
              />
            </div>
            <table className="table-auto w-full">
              <thead className="bg-gray-900 text-white uppercase">
                <tr>
                  <th className="p-3">Id</th>
                  <th className="p-3">Image</th>
                  <th className="p-3">Title</th>
                  <th className="p-3">Category</th>
                  <th className="p-3">Tag</th>
                  <th className="p-3">Edit</th>
                </tr>
              </thead>
              <tbody>
                {searchProductByKeyWord(products, keyword).map((el) => {
                  return (
                    <tr key={el.id} className="shadow">
                      {/* ID */}
                      <td>
                        <p className="pro_id w-40 truncate">{el.id}</p>
                      </td>
                      {/* IMG */}
                      <td>
                        <img
                          className="pro_img w-16 rounded  mx-auto"
                          src={el.img[0]}
                          alt=""
                        />
                      </td>
                      {/* TITLE */}
                      <td>
                        <p className="pro_title w-72 truncate">{el.title}</p>
                      </td>
                      {/* CAT */}
                      <td>
                        <div className="w-64 flex flex-col h-28">
                          <span className="bg-green-900 rounded m-2 p-1 text-center text-white">
                            {el.category[0]}
                          </span>
                          <div className="sub-cat flex flex-wrap">
                            {el.category.slice(1).map((item) => (
                              <span className="bg-green-500 m-2 p-1 rounded text-center text-white">
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </td>
                      {/* TAG */}
                      <td>
                        <div className="w-64 flex-wrap flex h-28 items-start justify-center">
                          {el.tag.map((item) => {
                            return (
                              <span className="bg-green-500 rounded m-2 p-1 text-center text-white">
                                {item}
                              </span>
                            );
                          })}
                        </div>
                      </td>
                      {/* EDIT */}
                      <td className="flex justify-center items-center h-28">
                        <button className="bg-red-400 hover:bg-red-500 rounded p-3">
                          <Link to="/edit-product">
                            <AiFillEdit className="text-white mx-auto" />
                          </Link>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
