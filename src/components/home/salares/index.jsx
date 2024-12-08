import React from "react";
import "../products/products.scss";
// Iconlar
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHeart } from "@fortawesome/free-solid-svg-icons";
import img from "../../../img/card1.png";
function Salares() {
  return (
    <section className="products">
      <div className="container">
        <div className="products__top">
          <h2>Best Sellers</h2>
          <a href="#">View all </a>
        </div>
        <div className="products__middle">
          <div className="card">
            <div className="card__img">
              <img src={img} alt="" />
              <button>
                <FontAwesomeIcon icon={faHeart} className="like" />
              </button>
            </div>
            <div className="card__text">
              <h3>Iphone 14 promax 256 gig</h3>
              <div className="reitin">
                <h4>$930.90</h4>
                <button>
                  <FontAwesomeIcon icon={faStar} className="star" />
                  <p>8.6</p>
                </button>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card__img">
              <img src={img} alt="" />
              <button>
                <FontAwesomeIcon icon={faHeart} className="like" />
              </button>
            </div>
            <div className="card__text">
              <h3>Iphone 14 promax 256 gig</h3>
              <div className="reitin">
                <h4>$930.90</h4>
                <button>
                  <FontAwesomeIcon icon={faStar} className="star" />
                  <p>8.6</p>
                </button>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card__img">
              <img src={img} alt="" />
              <button>
                <FontAwesomeIcon icon={faHeart} className="like" />
              </button>
            </div>
            <div className="card__text">
              <h3>Iphone 14 promax 256 gig</h3>
              <div className="reitin">
                <h4>$930.90</h4>
                <button>
                  <FontAwesomeIcon icon={faStar} className="star" />
                  <p>8.6</p>
                </button>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card__img">
              <img src={img} alt="" />
              <button>
                <FontAwesomeIcon icon={faHeart} className="like" />
              </button>
            </div>
            <div className="card__text">
              <h3>Iphone 14 promax 256 gig</h3>
              <div className="reitin">
                <h4>$930.90</h4>
                <button>
                  <FontAwesomeIcon icon={faStar} className="star" />
                  <p>8.6</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Salares;
