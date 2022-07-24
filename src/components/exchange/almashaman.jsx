import React from "react";
import Empty from "../../utils/img/empty.svg";
import Kitob from "../../utils/img/login.png";
import "./almashaman.css";

const Almashaman = () => {
  return (
    <div className="overflow">
      <div className="d-flex justify-content-center align-items-center">
        <img src={Empty} alt="" width={400} />
      </div>

      {/* <div className="card_1 d-flex justify-content-between m-3 pe-4 py-3">
        <div className="w-25">
          <img src={Kitob} alt="" width={180} className="h-100 img-fluid  " />
        </div>
        <h3>Ihyou Ulumid din</h3>
        <div className="d-flex">
          <p className="mx-5">narxi 500 000</p>
          <div className="btn-group1 d-flex my-3 flex-column">
            <button className="btn btn-success mb-2">savatga qushish</button>
            <button className="btn btn-danger">o'chirish</button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Almashaman;
