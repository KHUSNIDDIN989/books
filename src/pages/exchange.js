import React from "react";
import Almashaman from "../components/exchange/almashaman";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";

const Exchange = () => {
  return (
    <div className="bg-yellow container-fluid">
      <div className=" container py-1">
        <Navbar />
        <Almashaman />
      </div>
      <Footer />
    </div>
  );
};

export default Exchange;
