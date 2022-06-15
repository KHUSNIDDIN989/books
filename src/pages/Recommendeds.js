import React from "react";
import Recommended from "../components/cotegories/recommended";
import Filter from "../components/filter/filter";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";

const Recommendeds = () => {
  return (
    <div>
      <div className="container mb-5  ">
        <Navbar />
        <Filter />
        <h1 className="mt-5 text-center">Yangi Kitoblar</h1>
        <Recommended />
      </div>
      <Footer />
    </div>
  );
};

export default Recommendeds;
