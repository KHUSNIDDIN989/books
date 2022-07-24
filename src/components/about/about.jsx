import React from "react";
import Slider from "react-slick";

import Kitob from "../../utils/img/kitob.svg";
import "./about.css";

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
  return (
    <div>
      <div className="row mt-4">
        <div className="col-5 ">
          <img src={Kitob} alt="" className="img-fluid w-100" />
        </div>
        <div className="col-7 mt-4">
          <h3 className="athor">Ihyou Ulumid din</h3>
          <h6 className="title">Abu Homid G’azzoliy</h6>
          <p className="desc">
            matbaa va matn terish sanoatining oddiygina soxta matnidir. Lorem
            Ipsum 1500-yillardan beri sanoatning standart qo'g'irchoq matni
            bo'lib kelgan, o'shandan beri noma'lum printer galleyni olib, kitob
            namunalarini yaratish uchun shifrlagan. U
          </p>
          <div className="d-flex align-items-center">
            <h4 className="title accordion-body m-2">Janer :</h4>
            <p>Diniy adabiyotlar</p>
          </div>
          <div className="d-flex align-items-center">
            <h4 className="title accordion-body m-2">Kitob holati :</h4>
            <p>yangi</p>
          </div>
          <div className="d-flex align-items-center">
            <h4 className="title accordion-body m-2">Kitob tili :</h4>
            <p>O‘zbekcha</p>
          </div>
          <div className="d-flex align-items-center">
            <h4 className="title accordion-body m-2">Manzili :</h4>
            <p> Shayhontoxur tumani, Toshkent, Toshkent vil.</p>
          </div>
          <div className="d-flex align-items-center">
            <h4 className="title accordion-body m-2">Data :</h4>
            <p>16.03.2022 | 1413</p>
          </div>
        </div>
      </div>
      <h3>O‘xshash kitoblar</h3>
      <Slider {...settings}>
        <div className="card">
          <img src={Kitob} alt="" className="img-fluid w-100" />
          <div className="px-3">
            <h3 className="text-start">Ihyou Ulumid din</h3>
            <p className="text-start">Abu Homid G’azzoliy</p>
            <p className="text-start cursor text-primary">
              Vaqtincha Almashtiraman
            </p>
            <p className="text-start ">
              Holati: <span>O’rtacha</span>
            </p>
            <div className="w-100 d-flex justify-content-end  mb-1">
              <i className="bi bi-heart mx-2 fs-4 cursor "></i>
              <i className="bi bi-cart4 mx-2 fs-4 cursor text-end "></i>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={Kitob} alt="" className="img-fluid w-100" />
          <div className="px-3">
            <h3 className="text-start">Ihyou Ulumid din</h3>
            <p className="text-start">Abu Homid G’azzoliy</p>
            <p className="text-start cursor text-primary">
              Vaqtincha Almashtiraman
            </p>
            <p className="text-start ">
              Holati: <span>O’rtacha</span>
            </p>
            <div className="w-100 d-flex justify-content-end  mb-1">
              <i className="bi bi-heart mx-2 fs-4 cursor "></i>
              <i className="bi bi-cart4 mx-2 fs-4 cursor text-end "></i>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={Kitob} alt="" className="img-fluid w-100" />
          <div className="px-3">
            <h3 className="text-start">Ihyou Ulumid din</h3>
            <p className="text-start">Abu Homid G’azzoliy</p>
            <p className="text-start cursor text-primary">
              Vaqtincha Almashtiraman
            </p>
            <p className="text-start ">
              Holati: <span>O’rtacha</span>
            </p>
            <div className="w-100 d-flex justify-content-end  mb-1">
              <i className="bi bi-heart mx-2 fs-4 cursor "></i>
              <i className="bi bi-cart4 mx-2 fs-4 cursor text-end "></i>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={Kitob} alt="" className="img-fluid w-100" />
          <div className="px-3">
            <h3 className="text-start">Ihyou Ulumid din</h3>
            <p className="text-start">Abu Homid G’azzoliy</p>
            <p className="text-start cursor text-primary">
              Vaqtincha Almashtiraman
            </p>
            <p className="text-start ">
              Holati: <span>O’rtacha</span>
            </p>
            <div className="w-100 d-flex justify-content-end  mb-1">
              <i className="bi bi-heart mx-2 fs-4 cursor "></i>
              <i className="bi bi-cart4 mx-2 fs-4 cursor text-end "></i>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={Kitob} alt="" className="img-fluid w-100" />
          <div className="px-3">
            <h3 className="text-start">Ihyou Ulumid din</h3>
            <p className="text-start">Abu Homid G’azzoliy</p>
            <p className="text-start cursor text-primary">
              Vaqtincha Almashtiraman
            </p>
            <p className="text-start ">
              Holati: <span>O’rtacha</span>
            </p>
            <div className="w-100 d-flex justify-content-end  mb-1">
              <i className="bi bi-heart mx-2 fs-4 cursor "></i>
              <i className="bi bi-cart4 mx-2 fs-4 cursor text-end "></i>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={Kitob} alt="" className="img-fluid w-100" />
          <div className="px-3">
            <h3 className="text-start">Ihyou Ulumid din</h3>
            <p className="text-start">Abu Homid G’azzoliy</p>
            <p className="text-start cursor text-primary">
              Vaqtincha Almashtiraman
            </p>
            <p className="text-start ">
              Holati: <span>O’rtacha</span>
            </p>
            <div className="w-100 d-flex justify-content-end  mb-1">
              <i className="bi bi-heart mx-2 fs-4 cursor "></i>
              <i className="bi bi-cart4 mx-2 fs-4 cursor text-end "></i>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={Kitob} alt="" className="img-fluid w-100" />
          <div className="px-3">
            <h3 className="text-start">Ihyou Ulumid din</h3>
            <p className="text-start">Abu Homid G’azzoliy</p>
            <p className="text-start cursor text-primary">
              Vaqtincha Almashtiraman
            </p>
            <p className="text-start ">
              Holati: <span>O’rtacha</span>
            </p>
            <div className="w-100 d-flex justify-content-end  mb-1">
              <i className="bi bi-heart mx-2 fs-4 cursor "></i>
              <i className="bi bi-cart4 mx-2 fs-4 cursor text-end "></i>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={Kitob} alt="" className="img-fluid w-100" />
          <div className="px-3">
            <h3 className="text-start">Ihyou Ulumid din</h3>
            <p className="text-start">Abu Homid G’azzoliy</p>
            <p className="text-start cursor text-primary">
              Vaqtincha Almashtiraman
            </p>
            <p className="text-start ">
              Holati: <span>O’rtacha</span>
            </p>
            <div className="w-100 d-flex justify-content-end  mb-1">
              <i className="bi bi-heart mx-2 fs-4 cursor "></i>
              <i className="bi bi-cart4 mx-2 fs-4 cursor text-end "></i>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default About;
