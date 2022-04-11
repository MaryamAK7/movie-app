import React from "react";
import "./Footer.css";
import popcorn from "./popcorn.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footerTitle">Movie App</div>
      <img src={popcorn} alt="" className="footerImg" />
      <div>Enjoy!</div>
    </div>
  );
}
