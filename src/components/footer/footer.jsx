import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer pt-5">
      <div className="container ">
        <div className="nav row justify-content-between align-items-center mt-5">
          <div className="logo col-3">
            <h3 className="fs-3 fw-bold">Kitob Olami</h3>
          </div>
          <div className="nav__item col-6 h-100">
            <ul className="navbar  d-flex justify-content-between align-items-center h-100 ">
              <li className="nav-item text-light">Almashaman</li>
              <li className="nav-item text-light">Vaqtincha almashaman</li>
              <li className="nav-item text-light">Sotaman</li>
              <li className="nav-item text-light">Hadyam</li>
              <li className="nav-item text-light">Izlayapman</li>
            </ul>
          </div>
          <div className="buttons col-3 ">
            <button className="btn border-hover hover1 mx-2">+add</button>
            <button className="btn hover1 mx-2">Ro’yxatdan o’tish</button>
          </div>
        </div>
        <section className="mt-5 row">
          <div className="col-7">
            <h4 className="w-50    text-start">
              Umid qilamizki, bizdan yaxshi foyda kurdingiz
            </h4>
          </div>
          <div className="col-5">
            <ul className="d-flex justify-content-between align-items-center px-3">
              <li className="text-light">Biz haqimizda</li>
              <li className="text-light">Asosiy</li>
              <li className="text-light">E’lonlar</li>
              <li className="text-light">Kontaktlar</li>
            </ul>
          </div>
        </section>
      </div>
      <hr />
      <footer className="p-3 w-100">
        <div className="w-100 d-flex justify-content-around">
          <p>©2022 Thousand Sunny. All rights reserved</p>
          <div className="col-4">
            <div className="d-flex justify-content-between w-50">
              <div className="cursor bg-secondary rounded-circle px-2 py-1 d-flex justify-content-center align-items-center">
                <i class="bi bi-telephone index"></i>
              </div>

              <div className="cursor bg-secondary rounded-circle px-2 py-1 d-flex justify-content-center align-items-center">
                <i class="bi bi-telegram index"></i>
              </div>

              <div className="cursor bg-secondary rounded-circle px-2 py-1 d-flex justify-content-center align-items-center">
                <i class="bi bi-instagram index"></i>
              </div>
            </div>
          </div>
          <p className="">Design by Suges group</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
