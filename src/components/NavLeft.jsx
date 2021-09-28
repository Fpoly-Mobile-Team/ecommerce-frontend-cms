import React from "react";
import { Link } from "react-router-dom";

const NavLeft = () => {
  return (
    <div>
      {/* Logo */}
      <div className="logo w-full px-10 py-7">
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Shopee.svg/2560px-Shopee.svg.png"
            alt=""
          />
        </Link>
      </div>
      {/* Welcome */}
      <div className="welcome bg-white">
        <h3 className="text-center py-3 font-bold text-gray-800 uppercase">
          Seller
        </h3>
      </div>
      {/* Menu */}
      <nav className="text-white">
        {/* Function Seller */}
        <h3 className="font-bold uppercase text-center py-2">Product</h3>
        <div className="bg-gray-800">
          <div className="products py-3 pl-5 hover:bg-gray-900">
            <Link to="/products">All Product</Link>
          </div>
          <div className="add-product py-3 pl-5 hover:bg-gray-900">
            <Link to="/add-product">Add Product</Link>
          </div>
        </div>
        <h3 className="font-bold uppercase text-center py-2">Analytic</h3>
      </nav>
    </div>
  );
};

export default NavLeft;
