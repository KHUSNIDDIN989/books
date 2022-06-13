import Kitob from "../../utils/img/kitob.svg";
import React, { Component } from "react";
import Slider from "react-slick";

import "./carousel.css";
export default class MultipleItems extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 1200,
      autoplaySpeed: 2500,
      focusOnSelect: true,
      autoplay: true,
      slidesToShow: 4,
      slidesToScroll: 3,
      pauseOnHover: true,
    };
    return (
      <div className="mt-5 row">
        <Slider {...settings}>
          <div className="card">
            <img src={Kitob} alt="" className="img-fluid w-100" />
            <div className="px-3">
              <h3 className="text-start">Ihyou Ulumid din</h3>
              <p className="text-start">Abu Homid G’azzoliy</p>
              <p className="text-start cursor text-primary">
                Vaqtincha Almashtiraman
              </p>
              <p className="text-start mb-3">
                Holati: <span>O’rtacha</span>
              </p>
            </div>
          </div>
          <div className="card">
            <img src={Kitob} alt="" className="img-fluid w-100" />
            <div className="px-3">
              <h3 className="text-start">Ihyou Ulumid din</h3>
              <p className="text-start">Abu Homid G’azzoliy</p>
              <p className="text-start cursor ">Vaqtincha Almashtiraman</p>
              <p className="text-start mb-3">
                Holati: <span>O’rtacha</span>
              </p>
            </div>
          </div>
          <div className="card">
            <img src={Kitob} alt="" className="img-fluid w-100" />
            <div className="px-3">
              <h3 className="text-start">Ihyou Ulumid din</h3>
              <p className="text-start">Abu Homid G’azzoliy</p>
              <p className="text-start cursor">Vaqtincha Almashtiraman</p>
              <p className="text-start mb-3">
                Holati: <span>O’rtacha</span>
              </p>
            </div>
          </div>
          <div className="card">
            <img src={Kitob} alt="" className="img-fluid w-100" />
            <div className="px-3">
              <h3 className="text-start">Ihyou Ulumid din</h3>
              <p className="text-start">Abu Homid G’azzoliy</p>
              <p className="text-start cursor">Vaqtincha Almashtiraman</p>
              <p className="text-start mb-3">
                Holati: <span>O’rtacha</span>
              </p>
            </div>
          </div>
          <div className="card">
            <img src={Kitob} alt="" className="img-fluid w-100" />
            <div className="px-3">
              <h3 className="text-start">Ihyou Ulumid din</h3>
              <p className="text-start">Abu Homid G’azzoliy</p>
              <p className="text-start cursor">Vaqtincha Almashtiraman</p>
              <p className="text-start mb-3">
                Holati: <span>O’rtacha</span>
              </p>
            </div>
          </div>
          <div className="card">
            <img src={Kitob} alt="" className="img-fluid w-100" />
            <div className="px-3">
              <h3 className="text-start">Ihyou Ulumid din</h3>
              <p className="text-start">Abu Homid G’azzoliy</p>
              <p className="text-start cursor">Vaqtincha Almashtiraman</p>
              <p className="text-start mb-3">
                Holati: <span>O’rtacha</span>
              </p>
            </div>
          </div>
          <div className="card">
            <img src={Kitob} alt="" className="img-fluid w-100" />
            <div className="px-3">
              <h3 className="text-start">Ihyou Ulumid din</h3>
              <p className="text-start">Abu Homid G’azzoliy</p>
              <p className="text-start cursor">Vaqtincha Almashtiraman</p>
              <p className="text-start mb-3">
                Holati: <span>O’rtacha</span>
              </p>
            </div>
          </div>
          <div className="card">
            <img src={Kitob} alt="" className="img-fluid w-100" />
            <div className="px-3">
              <h3 className="text-start">Ihyou Ulumid din</h3>
              <p className="text-start">Abu Homid G’azzoliy</p>
              <p className="text-start cursor">Vaqtincha Almashtiraman</p>
              <p className="text-start mb-3">
                Holati: <span>O’rtacha</span>
              </p>
            </div>
          </div>
          <div className="card">
            <img src={Kitob} alt="" className="img-fluid w-100" />
            <div className="px-3">
              <h3 className="text-start">Ihyou Ulumid din</h3>
              <p className="text-start">Abu Homid G’azzoliy</p>
              <p className="text-start cursor">Vaqtincha Almashtiraman</p>
              <p className="text-start mb-3">
                Holati: <span>O’rtacha</span>
              </p>
            </div>
          </div>
          <div className="card">
            <img src={Kitob} alt="" className="img-fluid w-100" />
            <div className="px-3">
              <h3 className="text-start">Ihyou Ulumid din</h3>
              <p className="text-start">Abu Homid G’azzoliy</p>
              <p className="text-start cursor">Vaqtincha Almashtiraman</p>
              <p className="text-start mb-3">
                Holati: <span>O’rtacha</span>
              </p>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}