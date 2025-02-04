import React, { useContext, useEffect, useState } from "react";
import { ShopAppContext } from "../../contex";
import { FaRegHeart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Footer from "../home/footer";
import Header from "../home/header";
import { HeartFilled } from "@ant-design/icons";

function Like() {
  const { state, dispatch } = useContext(ShopAppContext);
  const [likedIt, setLikedIt] = useState([]);
  const navi = useNavigate();
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setLikedIt(data));
  }, []);

  const navigete_button = () => {
    navi("/");
  };
  const handleLike = (product) => {
    if (product.isLiked) {
      dispatch({
        type: "liked_remove",
        value__like: product,
      });
    } else {
      dispatch({
        type: "liked_add",
        value__like: product,
      });
    }
  };

  return (
    <>
      <Header />
      {likedIt.length ? (
        <section className="like">
          <div className="container">
            <div className="products__middle">
              {likedIt.map((value) => {
                if (value.isLiked) {
                  return (
                    <div className="card" key={value.id}>
                      <div className="card__img">
                        <img src={value.image} alt={value.title} />
                        <button onClick={() => handleLike(value)}>
                          {value.isLiked ? (
                            <HeartFilled
                              style={{ color: "red", fontSize: "24px" }}
                            />
                          ) : (
                            <FaRegHeart className="heart" />
                          )}
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
                return null;
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
