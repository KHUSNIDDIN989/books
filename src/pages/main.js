import React from "react";
import Slider from "../components/carousel1/slider1";
import Slider2 from "../components/carousel2/slider2";
import Slider3 from "../components/carousel3/slider3";
import Slider4 from "../components/carousel4/slider4";
import Filter from "../components/filter/filter";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";

const Main = () => {
  return (
    <div>
      <div className="container mb-5  ">
        <Navbar />
        <Filter />
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
