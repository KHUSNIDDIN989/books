import Kitob from "../../utils/img/kitob.svg";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const Slider2 = () => {
  const settings = {
    infinite: true,
    speed: 500,
    autoplaySpeed: 3000,
    focusOnSelect: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    pauseOnHover: true,
  };
  return (
    <div className="mt-5 row">
      <Link to="/newbooks">
        <h1 className="  text-start">Yangi Kitoblar</h1>
      </Link>

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
};

export default Slider2;
