import { useState, useEffect } from "react";
import Slider from "react-slick";
import { getApi } from "../../utils/Api/Api";
import useData from "../../hooks/useData";

import "./carousel.css";
import { Link } from "react-router-dom";

const Slider1 = () => {
  const [data1, setData1] = useState([]);
  const [data, setData] = useData();
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
  useEffect(() => {
    getApi(`books`).then((res) => setData1(res.data));
  }, []);

  const handleCount = (e) => {
    setData(e.target.id);
  };

  return (
    <div className="mt-5 row">
      <Slider {...settings}>
        {data1 &&
          data1.map((e) => (
            <div className="card " key={e.book_id}>
              <Link
                onClick={(e) => handleCount(e)}
                to={`/aboutbook/${e.book_id}`}
              >
                <img
                  src={e.book_img}
                  alt=""
                  className="img-fluid w-100"
                  id={e.book_id}
                  width={400}
                />
              </Link>
              <div className="px-3">
                <Link
                  to="/aboutbook"
                  className="text-dark"
                  onClick={(e) => handleCount(e.target.id)}
                >
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
};

export default Slider1;
