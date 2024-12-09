import React from "react";
import "../products/products.scss";
// Iconlar
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FaRegHeart } from "react-icons/fa";
import useAxios from "../../../hooks/useAxios";
import { Link } from "react-router-dom";
function Salares() {
  const { data } = useAxios({ url: "seleres" });

  // const seleres = data.find((item) => item.seleres)?.seleres || [];

  // console.log(seleres);

  return (
    <section className="products">
      <div className="container">
        <div className="products__top">
          <h2>Best Sellers</h2>
          <a href="#">View all </a>
        </div>
        <div className="products__middle">
          {data.map((value) => (
            <div className="card" key={value.id}>
              <Link to={`/seleres/${value.id}`} className="card__img">
                <img src={value.image} alt="" />
                <button>
                  <FaRegHeart className="heart" />
                </button>
              </Link>
              <div className="card__text">
                <h3>{value.title}</h3>
                <div className="reitin">
                  <h4>
                    {value.newPrice}
                    <span>{value.dollar}</span>
                  </h4>
                  <button>
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <p>{value.rate}</p>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Salares;
