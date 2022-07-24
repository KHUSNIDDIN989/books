import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import useToken from "../../hooks/useToken";

import "./navbar.css";

const Navbar = () => {
  const [token] = useToken();

  const [modal1, setModal1] = useState(null);
  useEffect(() => {
    setModal1(window.localStorage.getItem("token"));
  }, []);
  return (
    <>
      <div className="nav row justify-content-between align-items-center">
        <div className="logo col-2 mt-2">
          <Link to="/">
            <h3 className="fs-3 fw-bold logo">Kitob Olami</h3>
          </Link>
        </div>
        <div className="col-6">
          <form className="w-100" role="search">
            <div className="input-group w-100">
              <input
                type="text"
                className="form-control"
                placeholder="search"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-dark "
                type="button"
                id="button-addon2"
              >
                Izlash
              </button>
            </div>
          </form>
        </div>
        <div className="col-4 d-flex justify-content-end">
          {token ? (
            <>
              <Link to="/sell" className="mx-4">
                <i className="bi bi-plus-square fs-1 text-dark"></i>
              </Link>
              <Link to="/gift">
                <i className="bi bi-bookmark-heart fs-1 text-dark">
                  <span className=" fs-6 fw-bold fst-normal rounded-circle bg-primary text-light px-2 position-absolute">
                    0
                  </span>
                </i>
              </Link>

              <Link to="/profile" className="ms-5">
                <i className="bi bi-person-circle fs-1 text-dark"></i>
              </Link>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="btn border-hover  mx-2 hover1">
                  Log In
                </button>
              </Link>
              <Link to="/regstr">
                <button className="btn hover mx-2">Ro’yxatdan o’tish</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
