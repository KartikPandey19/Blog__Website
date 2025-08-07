import React from "react";
import "./../styles/PencilLogo.css";
import pencil from "../pencil.svg";


export const PencilLogo = () => {
  return (
    <div className="pencil-wrapper">
      <img src={pencil} alt="Pencil Logo" className="pencil" />
      <span className="logo-text">TECH READ</span>
    </div>
  );
};

