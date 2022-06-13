import "./navbar.css";

const Navbar = () => {
  return (
    <div className="nav row justify-content-between align-items-center mt-3">
      <div className="logo col-3">
        <h3 className="fs-3 fw-bold">Kitob Olami</h3>
      </div>
      <div className="nav__item col-6 h-100">
        <ul className="navbar  d-flex justify-content-between align-items-center h-100">
          <li className="nav-item">Almashaman</li>
          <li className="nav-item">Vaqtincha almashaman</li>
          <li className="nav-item">Sotaman</li>
          <li className="nav-item">Hadyam</li>
          <li className="nav-item">Izlayapman</li>
        </ul>
      </div>
      <div className="buttons col-3 ">
        <button className="btn border-hover hover mx-2">+add</button>
        <button className="btn hover1 mx-2">Ro’yxatdan o’tish</button>
      </div>
    </div>
  );
};

export default Navbar;
