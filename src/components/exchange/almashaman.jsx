import React from "react";
import "./almashaman.css";

const Almashaman = () => {
  return (
    <div>
      <div className="modal1 my-5">
        <form action="" className="">
          <label htmlFor="inputEmail" className="form-label mt-4">
            kitob nomini kiriting
          </label>
          <input type="text" className="form-control w-50" id="inputEmail" />
          <label htmlFor="inputEmail1" className="form-label mt-4">
            kitob yozuvchisini kiriting
          </label>
          <input type="text" className="form-control w-50" id="inputEmail1" />
          <label htmlFor="inputEmail2" className="form-label mt-4">
            kitob janerini kiriting
          </label>
          <input type="text" className="form-control w-50" id="inputEmail2" />
          <label htmlFor="inputEmail3" className="form-label mt-4">
            kitob holatini kiriting
          </label>
          <input type="text" className="form-control w-50" id="inputEmail3" />
          <label htmlFor="inputEmail4" className="form-label mt-4">
            Kitobga oid rasimni kiriting
          </label>
          <input type="file" className="form-control w-25" id="inputEmail4" />
          <label htmlFor="inputEmail5" className="form-label mt-4">
            kitob haqida qo’shimcha ma’lumot kiriting
          </label>
          <textarea
            className="form-control w-50"
            type="text"
            id="inputEmail5"
            colmn="10"
            rows="8"
          />
          <div className="w-50 my-3 mx-1 row justify-content-end">
            <button className="btn btn-color w-25 ">E’loni joylash</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Almashaman;
