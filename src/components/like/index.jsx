import React, { useContext } from "react";
import { ShopAppContext } from "../../contex";
import { FaRegHeart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Footer from "../home/footer";
import Header from "../home/header";

function Like() {
  const { state, dispatch } = useContext(ShopAppContext);

  const navi = useNavigate();

  const navigete_button = () => {
    navi("/");
  };

  const handleLike = (productId) => {
    dispatch({
      type: "TOGGLE_LIKE",
      payload: productId,
    });
  };

  return (
    <>
      <Header />

      {state.liked.length ? (
        <section className="like">
          <div className="container">
            <div className="products__middle">
              {state.liked.map((value) => {
                if (value.isLiked) {
                  return (
                    <div className="card" key={value.id}>
                      <div className="card__img">
                        <img src={value.image} alt={value.title} />
                        <button onClick={() => handleLike(value.id)}>
                          <FaRegHeart className="heart" />
                        </button>
                      </div>
                      <Link to={`/products/${value.id}`} className="card__text">
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
                      </Link>
                    </div>
                  );
                }
                return null; // Agar isLiked false bo'lsa, hech narsa ko'rsatilmaydi
              })}
            </div>
          </div>
        </section>
      ) : (
        <div className="bombomsh">
          <div className="container">
            <div className="bosh__text">
              <h2>Yoqtrgan mahsulotlar hozircha yoq</h2>
              <p>
                Bosh sahifadan boshlang — kerakli tovarni qidiruv orqali
                topishingiz yoki to‘plamlarni ko‘rishingiz mumkin
              </p>

              <button onClick={navigete_button} className="bosh__button">
                Bosh sahifa
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default Like;
