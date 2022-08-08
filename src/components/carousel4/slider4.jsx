import Kitob from "../../utils/img/kitob.svg";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getApi } from "../../utils/Api/Api";

const Slider4 = () => {
  const [data, setData] = useState([]);
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
  useEffect(() => {
    getApi(`bookcheldren`).then((res) => setData(res.data));
  }, []);
  return (
    <div className="mt-5 row">
      <Link to="/childrenbook">
        <h1 className=" text-start">Bolalar kitobi</h1>
      </Link>
      <Slider {...settings}>
        {data &&
          data.map((e) => (
            <div className="card " key={e.book_id}>
              <Link to="/aboutbook">
                <img src={e.book_img} alt="" className="img-fluid w-100" />
              </Link>
              <div className="px-3">
                <Link to="/aboutbook" className="text-dark">
                  <h3 className="text-start mt-3">Ihyou Ulumid din</h3>
                  <p className="text-start">Abu Homid G’azzoliy</p>
                  <p className="text-start cursor text-primary">
                    Vaqtincha Almashtiraman
                  </p>
                  <p className="text-start ">
                    Holati: <span>O’rtacha</span>
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
};

export default Slider4;
