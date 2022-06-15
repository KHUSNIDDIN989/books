import "./navbar.css";
import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [modal1, setModal1] = useState();
  useEffect(() => {
    setModal1(window.localStorage.getItem("token"));
  }, []);
  return (
    <>
      <div className="nav row justify-content-between align-items-center mt-3">
        <div className="logo col-3">
          <Link to="/">
            <h3 className="fs-3 fw-bold logo">Kitob Olami</h3>
          </Link>
        </div>
        <div className="nav__item col-6 h-100">
          <ul className="navbar  d-flex justify-content-between align-items-center h-100">
            <NavLink to="/exchange">
              <li className="nav-item"> Almashaman</li>
            </NavLink>
            <NavLink to="/temporarily">
              <li className="nav-item">Vaqtincha almashaman</li>
            </NavLink>
            <NavLink to="/sell">
              <li className="nav-item">Sotaman</li>
            </NavLink>
            <NavLink to="/gift">
              <li className="nav-item">Hadyam</li>
            </NavLink>
          </ul>
        </div>
        <div className="buttons col-3 d-flex justify-content-center">
          {!modal1 ? (
            <>
              <i className="bi bi-trash fs-1 mx-4"></i>
              <i className="bi bi-person-circle fs-1"></i>
            </>
          ) : (
            <>
              <button className="btn border-hover  mx-2 hover1">Log In</button>
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
