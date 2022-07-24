import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer pt-5">
      <hr />
      <footer className="p-3 w-100">
        <div className="w-100 d-flex justify-content-around">
          <p>©2022 Thousand Sunny. All rights reserved</p>
          <div className="col-4">
            <div className="d-flex justify-content-between w-50">
              <div className="cursor bg-secondary rounded-circle px-2 py-1 d-flex justify-content-center align-items-center">
                <i className="bi bi-telephone index"></i>
              </div>
              <div className="cursor bg-secondary rounded-circle px-2 py-1 d-flex justify-content-center align-items-center">
                <i className="bi bi-telegram index"></i>
              </div>
              <div className="cursor bg-secondary rounded-circle px-2 py-1 d-flex justify-content-center align-items-center">
                <i className="bi bi-instagram index"></i>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
