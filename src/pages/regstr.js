import React from "react";
import { Link, Navigate } from "react-router-dom";
import { postApi } from "../utils/Api/Api";

import useToken from "../hooks/useToken";

const Regstr = () => {
  const [token, setToken] = useToken();

  const sendPostRegstr = (e) => {
    e.preventDefault();
    const { name, phone, password1, password2 } = e.target.elements;
    if (password1.value !== password2.value) {
      return window.alert("parol mosemas");
    }
    const data = {
      user_name: name.value,
      user_phone: phone.value,
      user_password: password1.value,
    };

    postApi("user", data).then((res) => setToken(res.data.token));

    e.target.reset();
  };

  if (token) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center ">
      <form
        className="w-50 shadow-lg rounded-4 p-5"
        onSubmit={(e) => sendPostRegstr(e)}
      >
        <h3>Ro’yxatdan o’tish</h3>
        <input
          name="name"
          type="text"
          className="form-control my-3 shadow-sm"
          placeholder="ism familiya"
        />
        <input
          name="phone"
          type="text"
          className="form-control my-3 shadow-sm"
          placeholder="telefo  raqam"
        />
        <input
          name="password1"
          type="password"
          className="form-control my-3 shadow-sm"
          placeholder="parolni kiriting"
        />
        <input
          name="password2"
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
