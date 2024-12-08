import React from "react";
import "./showcase.scss";
// IMglar

import noutbook from "../../../img/showcase_noutbook.png";
function Showcase() {
  return (
    <section className="showcase">
      <div className="container">
        <div className="showcase__left">
          <div className="showcase__text">
          <h1>Tech Heim</h1>
          <p>
            "Join the <span> digital revolution</span>"
          </p>
          </div>
          <button>Explore More</button>
        </div>

        <div className="showcase__right">
          <img src={noutbook} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Showcase;
