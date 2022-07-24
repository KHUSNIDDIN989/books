import { useState, useEffect } from "react";
import Kitob from "../../utils/img/kitob.svg";
import Slider from "react-slick";
import { getApi } from "../../utils/Api/Api";

import "./carousel.css";
import { Link } from "react-router-dom";

const Slider1 = () => {
  const [count, setCount] = useState(null);

  const [data, setData] = useState([]);
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
  console.log(count);
  useEffect(() => {
    getApi(`books`).then((res) => setData(res.data));
  }, []);

  return (
    <div className="mt-5 row">
      <Slider {...settings}>
        {data &&
          data.map((e) => (
            <div className="card " key={e.book_id}>
              <img src={e.book_img} alt="" className="img-fluid w-100" />
              <div className="px-3">
                <Link
                  to="/aboutbook"
                  className="text-dark"
                  onClick={(e) => setCount((count) => count + 1)}
                >
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

export default Slider1;
