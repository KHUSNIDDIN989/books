import React from "react";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";
import Vaqtincha from "../components/temporarilies/vaqtincha";

const Temporarily = () => {
  return (
    <div className="bg-yellow container-fluid">
      <div className=" container py-1">
        <Navbar />
        <Vaqtincha />
      </div>
      <Footer />
    </div>
  );
};

export default Temporarily;
