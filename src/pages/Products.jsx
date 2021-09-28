import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NavLeft from "../components/NavLeft";

const Products = () => {
  return (
    <div>
      <div className="flex w-full,">
        <div className="nav-left w-2/12 h-screen bg-gray-700">
          <NavLeft />
        </div>
        <div className="main w-10/12 bg-mainWhite">
          <Navbar />
          <div className="content px-10 py-5 mx-auto">
            <table class="table-auto mx-auto">
              <thead className="bg-gray-900 text-white uppercase">
                <tr>
                  <th className="p-5">Id</th>
                  <th className="p-5">Image</th>
                  <th className="p-5">Title</th>
                  <th className="p-5">Category</th>
                  <th className="p-5">Tag</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3">
                    <p className="w-3 overflow-ellipsis whitespace-nowrap">
                      gdfgdfgdfg
                    </p>
                  </td>
                  <td>
                    <img
                      className="w-10"
                      src="https://files.readme.io/6742b35-VRChat_2018-12-18_15-08-53.png"
                      alt=""
                    />
                  </td>
                  <td>Product 1</td>
                  <td>Category 1, Caterogy 2</td>
                  <td>Tag 1, Tag 2</td>
                </tr>
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
