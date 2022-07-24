import React from "react";
import { Link, Navigate } from "react-router-dom";
import { postApi } from "../utils/Api/Api";

import useToken from "../hooks/useToken";

import login from "../utils/img/login.png";

const Login = () => {
  const [token, setToken] = useToken();

  const sendPostLogin = (e) => {
    e.preventDefault();
    const { phone, password } = e.target.elements;
    const data = {
      user_phone: phone.value,
      user_password: password.value,
      token: token,
    };
    postApi("auth", data).then((res) => {
      setToken(res.data.token);
    });
    e.target.reset();
  };

  if (token) {
    return <Navigate to="/" />;
  }

  return (
    <div className="row container">
      <div className="col-8">
        <div className="container vh-100 d-flex justify-content-center align-items-center ">
          <form className="w-75 p-5" onSubmit={(e) => sendPostLogin(e)}>
            <h3>Tizimga Kirish</h3>
            <input
              name="phone"
              type="number"
              className="form-control my-3 shadow-sm"
              placeholder="ruyxatdan utgan imingizni kiriting"
            />
            <input
              name="password"
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
