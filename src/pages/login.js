import React from "react";
import { Link } from "react-router-dom";
import login from "../utils/img/login.png";

const Login = () => {
  return (
    <div className="row container">
      <div className="col-8">
        <div className="container vh-100 d-flex justify-content-center align-items-center ">
          <form className="w-75 p-5">
            <h3>Tizimga Kirish</h3>
            <input
              type="text"
              className="form-control my-3 shadow-sm"
              placeholder="ruyxatdan utgan imingizni kiriting"
            />
            <input
              type="password"
              className="form-control my-3 shadow-sm"
              placeholder="parolni kiriting"
            />
            <button className="btn btn-secondary w-100 mb-3 shadow-sm">
              Kirish
            </button>
            <p>
              Men yangi foydalanuvchiman
              <Link to="/regstr" className="text-primary cursor">
                {" "}
                Ro'yxatdan o'tish
              </Link>
            </p>
          </form>
        </div>
      </div>
      <div className="col-4 p-4">
        <img src={login} alt="" width={500} height={550} className=" " />
      </div>
    </div>
  );
};

export default Login;
