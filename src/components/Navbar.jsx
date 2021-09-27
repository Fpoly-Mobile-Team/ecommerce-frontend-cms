import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillNotification,
  AiFillQuestionCircle,
  AiOutlineSearch,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    // NAVBAR
    <div className="w-full px-8 py-2 fixed shadow-xl top-0 z-20 bg-mainWhite">
      {/* Top */}
      <div className="flex justify-between">
        {/* Top-Left */}
        <nav className="menu-top-left w-1/3">
          <ul className="flex items-center justify-evenly">
            <li>Channel Seller</li>
            <li>
              <Link to="/sign-up-seller">Become Seller</Link>
            </li>
            <li>Get the App</li>
            <li>
              <AiFillFacebook className="rounded-lg" />
            </li>
            <li>
              <AiFillInstagram className="rounded-lg" />
            </li>
          </ul>
        </nav>
        {/* Top-Right */}
        <nav className="menu-top-right w-1/3">
          <ul className="flex items-center justify-evenly">
            <li className="flex items-center">
              <AiFillNotification className="mr-1" />
              Notification
            </li>
            <li className="flex items-center">
              <AiFillQuestionCircle className="mr-1" />
              Help
            </li>
            <li className="font-bold">Sign Up</li>
            <li className="font-bold">Login</li>
          </ul>
        </nav>
      </div>
      {/* Main */}
      <div className="flex items-center py-4">
        <div className="logo w-1/4 flex justify-center">
          <Link to="/">
            <img
              className="w-2/3"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Shopee.svg/2560px-Shopee.svg.png"
              alt=""
            />
          </Link>
        </div>
        <div className="flex search-main w-1/2 shadow rounded">
          <input
            type="search"
            name=""
            id=""
            className="p-3 w-10/12 rounded"
            placeholder="Seach..."
          />
          <button className="btn-search-main p-0.5 w-2/12 bg-main text-white rounded">
            <AiOutlineSearch className="fill-current w-full h-6" />
          </button>
        </div>
        <div className="cart w-1/4 flex justify-center">
          <button className="btn-search-main p-0.5 w-2/12 text-main">
            <FaShoppingCart className="fill-current w-full h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
