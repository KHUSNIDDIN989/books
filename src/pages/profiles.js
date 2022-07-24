import React from "react";
import { Navigate } from "react-router-dom";
// import Slider from "../components/carousel1/slider1";
// import Slider2 from "../components/carousel2/slider2";
// import Slider3 from "../components/carousel3/slider3";
// import Slider4 from "../components/carousel4/slider4";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";
import Profile from "../components/profile/profile";
import useToken from "../hooks/useToken";

const Profiles = () => {
  const [token] = useToken();

  if (!token) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <div className="container mb-5  ">
        <Navbar />
        <Profile />
      </div>
      <Footer />
    </div>
  );
};

export default Profiles;
