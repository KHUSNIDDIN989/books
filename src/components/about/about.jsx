import React, { useEffect, useState } from "react";
import Slider from "react-slick";

import "./about.css";
import { getApi } from "../../utils/Api/Api";
import { useParams, Link } from "react-router-dom";

const About = () => {
  const settings = {
    infinite: true,
    speed: 1200,
    autoplaySpeed: 2500,
    focusOnSelect: true,
    autoplay: false,
    slidesToShow: 4,
    slidesToScroll: 3,
    pauseOnHover: true,
  };
  const [datas, setDatas] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    getApi(`userbook/${id}`).then((res) => setDatas(res.data));
  }, []);
  if (datas?.infoBook) {
    let dat = datas.infoBook;
    return (
      <div>
        <div className="row mt-4">
          <div className="col-5 hidden">
            <img
              src={dat.book_img}
              alt=""
              width={400}
              className="img-fluid rounded"
            />
          </div>
          <div className="col-7 mt-2">
            <div className="d-flex align-items-center">
              <h4 className="title accordion-body m-2">User :</h4>
              <p>{dat.user_name}</p>
            </div>
            <div className="d-flex align-items-center">
              <h4 className="title accordion-body m-2">User phone :</h4>
              <p>{dat.user_phone}</p>
            </div>
            <h3 className="athor">{dat.boot_athor}</h3>
            <h6 className="title ms-2">
              Kitob nomi: <span className="fw-normal">{dat.book_title}</span>
            </h6>
            <div className="d-flex align-items-center">
              <h4 className="title accordion-body m-2">Janer :</h4>
              <p>{dat.book_ganre}</p>
            </div>
            <div className="d-flex align-items-center">
              <h4 className="title accordion-body m-2">Kitob holati :</h4>
              <p>{dat.book_status}</p>
            </div>
            <div className="d-flex align-items-center">
              <h4 className="title accordion-body m-2">Kitob tili :</h4>
              <p>{dat.book_language}</p>
            </div>
            {/* <div className="d-flex align-items-center">
                <h4 className="title accordion-body m-2">Manzili :</h4>
                <p> {dat.book_address}</p>
              </div> */}
            <div className="d-flex align-items-center">
              <h4 className="title accordion-body m-2">Data :</h4>
              <p>{dat.to_char}</p>
            </div>
            <p className="desc">{dat.book_desc}</p>
          </div>
        </div>
        <h3>O‘xshash kitoblar</h3>
        <Slider {...settings}>
          {datas?.bookGanre?.map((e) => (
            <div className="card " key={e.book_id}>
              <Link to={`/aboutbook/${e.book_id}`}>
                <img
                  src={e.book_img}
                  alt=""
                  className="img-fluid w-100"
                  id={e.book_id}
                />
              </Link>
              <div className="px-3">
                <Link to="/aboutbook" className="text-dark">
                  <h3 id={e.book_id} className="text-start mt-3">
                    {e.book_title}
                  </h3>
                  <p id={e.book_id} className="text-start">
                    {e.book_athor}
                  </p>
                  <p id={e.book_id} className="text-start cursor text-primary">
                    {e.book_select}
                  </p>
                  <p id={e.book_id} className="text-start ">
                    Holati: <span>{e.book_status}</span>
                  </p>
                </Link>
                <div className="w-100 d-flex justify-content-end  mb-1">
                  <i className="bi bi-heart mx-2 fs-4 cursor "></i>
                  <i className="bi bi-cart4 mx-2 fs-4 cursor text-end "></i>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
};

export default About;
