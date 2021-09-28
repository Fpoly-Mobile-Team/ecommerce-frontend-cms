import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
// import NavBarSeller from "../components/NavBarSeller";

const Login = () => {
  return (
    <div>
      {/* <NavBarSeller /> */}
      <div className="flex h-screen bg-white mt-36 mx-20">
        
        {/* RIGHT */}
        <div className="form-sign-up-center w-100 mx-auto my-20">
          <div className="form">
              <h3 className="text-2xl font-bold text-gray-900 p-10 text-center">
                Đăng nhập Kênh Người Bán
              </h3>
              <input
                type="text"
                className="w-full p-3 shadow m-2"
                name=""
                id=""
                placeholder="Email..."
              />
              <input
                type="text"
                className="w-full p-3 shadow m-2"
                name=""
                id=""
                placeholder="password..."
              />
              <div className="flex">
              <input type="checkbox" name="" id="" className="w-5 h-5 p-3 shadow m-2"
                />
              <p className="text-sm text-gray-400 py-2" > Remember Me</p>
              </div>
              <button className="w-full m-2 p-3 bg-main text-white rounded">Đăng Nhập</button>

              <Link className="text-sm text-gray-400 p-3" to="/forgot-password" >Lost Your Password?</Link>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
