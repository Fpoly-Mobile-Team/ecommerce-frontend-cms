import React from 'react'
import Footer from '../components/Footer'

const ForgotPassword = () => {
    return (
        <div>
      {/* <NavBarSeller /> */}
      <div className="flex h-screen bg-white mt-36 mx-20">
        
        {/* RIGHT */}
        <div className="form-sign-up-center w-100 mx-auto my-20">
          <div className="form">
              <h3 className="text-2xl font-bold text-gray-900 p-10 text-center">
                Lấy Lại Mật Khẩu
              </h3>
              <input
                type="text"
                className="w-full p-3 shadow m-2"
                name=""
                id=""
                placeholder="Vui Lòng Điền Email..."
              />
              
              <button className="w-full m-2 p-3 bg-main text-white rounded">Send</button>


          </div>
        </div>
      </div>
      <Footer />
        </div>
    )
}

export default ForgotPassword
