import React from "react";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";
import AddBook from "../components/addbook/addbook";

const Addbooks = () => {
  return (
    <div className="container-fluid" style={{ background: "#fffce4" }}>
      <div className=" container py-1">
        <Navbar />
        <AddBook />
      </div>
      <Footer />
    </div>
  );
};

export default Addbooks;
