import React from "react";
import "./showcase.scss";
// IMglar

import useAxios from "../../../hooks/useAxios";
function Showcase() {
  const { data } = useAxios({ url: "hero" });

  // const hero = data.find((item) => item.hero)?.hero || [];

  // console.log(hero);

  return (
    <section className="showcase">
      <div className="container">
        {data.map((value) => (
          <div key={value.id} className="showcase__item">
            <div className="showcase__left">
              <div className="showcase__text">
                <h1>{value.title}</h1>
                <p>
                  {value.textp}
                  <span>{value.textspan}</span>"
                </p>
              </div>
              <button>{value.textBtn}</button>
            </div>

            <div className="showcase__right">
              <img src={value.image} alt="" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Showcase;
