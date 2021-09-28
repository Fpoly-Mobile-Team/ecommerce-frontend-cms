import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NavLeft from "../components/NavLeft";

const AddProduct = () => {
  return (
    <div>
      <div className="flex w-full">
        <div className="nav-left w-2/12 h-screen bg-gray-700">
          <NavLeft />
        </div>
        <div className="main w-10/12 bg-mainWhite">
          <Navbar />
          <div className="content">Add Product</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddProduct;
