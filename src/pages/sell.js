import React from "react";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";
import Selling from "../components/selling/selling";

const Sell = () => {
  return (
    <div className="bg-yellow container-fluid">
      <div className=" container py-1">
        <Navbar />
        <Selling />
      </div>
      <Footer />
    </div>
  );
};

export default Sell;
