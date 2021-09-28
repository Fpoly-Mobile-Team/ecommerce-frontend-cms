import React from "react";
import { AiFillMail, AiFillNotification } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      {/* User Setting */}
      <div className="user-settings flex justify-between h-16 px-10 py-5 shadow">
        <div className="left">
          <Link to="/settings">
            <h3>Setting</h3>
          </Link>
        </div>
        <div className="right flex items-center">
          <AiFillNotification className="mx-1" />
          <AiFillMail className="mx-1" />
          <div className="user-logo mx-1 w-8">
            <img
              className="w-full"
              src="https://files.readme.io/6742b35-VRChat_2018-12-18_15-08-53.png"
              alt=""
            />
          </div>
          <Link to="/login">Logout</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
