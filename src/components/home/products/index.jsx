import React from "react";
import "./products.scss";
import iphone from "../../../img/iphone.png";
// Iconlar
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHeart } from "@fortawesome/free-solid-svg-icons";
import img from "../../../img/card1.png";
import left from "../../../img/left.png";
function Products() {
  return (
    <section className="products">
      <div className="container">
        <div className="products__top">
          <h2>New Products</h2>
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
        <div className="products__bottom">
          <div className="left">
            <div className="left_img">
              <h3>
                Iphone <span>15 Series</span>
              </h3>

              <img src={iphone} alt="" />
            </div>
            <div className="left_text">
              <div className="text__btn">
                <button>
                  <p>8</p>
                  <p>Days</p>
                </button>
                <button>
                  <p>8</p>
                  <p>Days</p>
                </button>
                <button>
                  <p>8</p>
                  <p>Days</p>
                </button>
                <button>
                  <p>8</p>
                  <p>Days</p>
                </button>
              </div>

              <h3>It feels good to be the first</h3>
              <p>
                Get ready for the future of smartphones.Experience innovation
                like never before. Stay tuned for the big iPhone 15 pre-sale.
              </p>

              <button>Register Now</button>
            </div>
          </div>
          <div className="right">
            <img src={left} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
