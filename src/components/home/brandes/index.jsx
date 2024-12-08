import React from "react";
import "./brands.scss";
import bren1 from "../../../img/bren1.svg";
import bren2 from "../../../img/bren2.svg";
import bren3 from "../../../img/bren3.svg";
import bren4 from "../../../img/bren4.svg";
import bren5 from "../../../img/bren5.svg";
import bren6 from "../../../img/bren6.svg";
function Brandes() {
  return (
    <section className="brands">
      <div className="container">
        <div className="brands__top">
          <h2>Top Brands</h2>
        </div>
        <div className="brands__middle">
          <img src={bren1} alt="" />
          <img src={bren2} alt="" />
          <img src={bren3} alt="" />
          <img src={bren4} alt="" />
          <img src={bren5} alt="" />
          <img src={bren6} alt="" />
        </div>
        {/* <div className="brands__bottom">
          <div className="text__bottom">
            <h2>SMART WATCH</h2>
            <p>Various designs and brands</p>
            <button>view</button>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default Brandes;
