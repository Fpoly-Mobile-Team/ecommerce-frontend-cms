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
          <div className="content px-10 py-5 rounded shadow mt-4 ml-4 mr-4">
            ADD PRODUCT
          </div>
          <div className="px-96">
            <div className="flex">
              <p className="m-8">Title:</p>
              <input
                  type="text"
                  className="w-full p-3 shadow m-5"
                  name=""
                  id=""
                  placeholder="Title..."
                />
            </div>
            <div className="flex">
                <p className="mx-8 py-2">Image Feature:</p>
                <button className="shadow  bg-red-400 ">Choose Media</button>
            </div>
            <div className="flex">
                <p className="mx-8 py-2">Images Gallery:</p>
                <button className="shadow p-2 bg-red-400 ">Choose Media</button>
            </div>
            <div className="flex">
              <p className="p-2">Desc:</p>
              <textarea name="" id="" cols="30" rows="10">Desc....</textarea>
            </div>
            <div className="flex">
                  <p className="m-8">Category:</p>
            </div>
            <div className="flex">
                  <p className="m-8">Tag:</p>
            </div>
        <button className="w-36 p-3 shadow mx-96  bg-black text-white">ADD</button>
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddProduct;
