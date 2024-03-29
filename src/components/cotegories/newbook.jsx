import React, { useEffect, useState } from "react";
import Kitob from "../../utils/img/kitob.svg";
import { getApi } from "../../utils/Api/Api";

const Newbook = () => {
  const [data, setData] = useState();
  useEffect(() => {
    getApi(`booknew`).then((res) => setData(res.data));
  }, []);

  return (
    <div>
      <div className="mt-5 row">
        {data?.map((e) => (
          <div className="col-3 my-3" key={e.book_id}>
            <div className="card w-100">
              <img src={e.book_img} alt="" className="img  w-100" />
              <div className="px-3">
                <h4 className="text-start ">Ihyou Ulumid din</h4>
                <p className="text-start">Abu Homid G’azzoliy</p>
                <p className="text-start cursor ">Vaqtincha Almashtiraman</p>
                <p className="text-start ">
                  Holati: <span>O’rtacha</span>
                </p>
                <div className="w-100 d-flex justify-content-end  mb-1">
                  <i className="bi bi-heart mx-2 fs-4 cursor "></i>
                  <i className="bi bi-cart4 mx-2 fs-4 cursor text-end "></i>
                </div>
              </div>
            </div>
          </div>
        ))}
        <nav aria-label="Page navigation example ">
          <ul className="pagination justify-content-end mx-4">
            <li className="page-item disabled">
              <a className="page-link">
                <i className="bi bi-caret-left"></i>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                <i className="bi bi-caret-right"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Newbook;
