import React from "react";
import loaderImg from "../../assets/logo.png";
import "../../App.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader-wrapper">
        <span className="loader-text">L</span>

        <img src={loaderImg} alt="Loading Icon" className="spinner" />
        <span className="loader-text">OADING</span>
      </div>
    </div>
  );
};

export default Loader;
