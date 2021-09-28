import React from "react";

const NavLeft = () => {
  return (
    <div>
      {/* Logo */}
      <div className="logo w-full px-10 py-7">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Shopee.svg/2560px-Shopee.svg.png"
          alt=""
        />
      </div>
      {/* Menu */}
      <nav className="text-white">
        {/* Function Admin */}
        <ul className="bg-gray-800">
          <h3 className="font-bold uppercase text-center">Seller</h3>
          <li className="hover:bg-gray-900">Add Product</li>
        </ul>
        {/* Function Seller */}
      </nav>
    </div>
  );
};

export default NavLeft;
