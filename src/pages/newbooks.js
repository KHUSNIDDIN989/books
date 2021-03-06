import React from "react";

import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Filter from "../components/filter/filter";
import Newbook from "../components/cotegories/newbook";

const Newbooks = () => {
  return (
    <div>
      <div className="container mb-5  ">
        <Navbar />
        <Filter />
        <h1 className="mt-5 text-center">Yangi Kitoblar</h1>
        <Newbook />
      </div>
      <Footer />
    </div>
  );
};

export default Newbooks;
