import React from "react";

import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import About from "../components/about/about";

const Aboutbook = () => {
  return (
    <div>
      <div className="container mb-5">
        <Navbar />
        <About />
      </div>
      <Footer />
    </div>
  );
};

export default Aboutbook;
