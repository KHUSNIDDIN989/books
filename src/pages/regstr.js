import React from "react";
import { Link } from "react-router-dom";

const Regstr = () => {
  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center ">
      <form className="w-50 shadow-lg rounded-4 p-5">
        <h3>Ro’yxatdan o’tish</h3>
        <input
          type="text"
          className="form-control my-3 shadow-sm"
          placeholder="ism familiya"
        />
        <input
          type="text"
          className="form-control my-3 shadow-sm"
          placeholder="telefo  raqam"
        />
        <input
          type="password"
          className="form-control my-3 shadow-sm"
          placeholder="parolni kiriting"
        />
        <input
          type="password"
          className="form-control my-3 shadow-sm"
          placeholder="parolni qayta kiriting"
        />
        <button className="btn btn-secondary w-100 mb-3 shadow-sm">
          Kirish
        </button>
        <p>
          Menda acount bor
          <Link to="/login" className="text-primary cursor">
            {" "}
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Regstr;
