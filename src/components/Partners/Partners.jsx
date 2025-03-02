import React from "react";
import wheat from "../../assets/wheat.png";
import agro from "../../assets/agro.png";
import ferm from "../../assets/ferm.png";
import rices from "../../assets/rices.png";
import agric from "../../assets/agric.png";
import "./Partners.css";

const Partners = () => {
  return (
    <section className="partners">
      <div className="partners-wrapper">
        <div className="partners-list">
          <img src={wheat} alt="" />
          <img src={agro} alt="" />
          <img src={ferm} alt="" />
          <img src={rices} alt="" />
          <img src={agric} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Partners;
