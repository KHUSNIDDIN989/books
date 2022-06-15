import React from "react";
import Slider from "../components/carousel1/slider1";
import Slider2 from "../components/carousel2/slider2";
import Slider3 from "../components/carousel3/slider3";
import Slider4 from "../components/carousel4/slider4";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";

const Main = () => {
  return (
    <div>
      <div className="container mb-5  ">
        <Navbar />
        <form
          className=" w-100 d-flex justify-content-center mt-5"
          role="search"
        >
          <div className="input-group mb-3 w-50">
            <input
              type="text"
              className="form-control"
              placeholder="search"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button className="btn btn-dark " type="button" id="button-addon2">
              Izlash
            </button>
          </div>
        </form>
        <h1 className="mt-5 text-center">Siz izlagan Kitoblar</h1>
        <Slider />
        <Slider2 />
        <Slider3 />
        <Slider4 />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
