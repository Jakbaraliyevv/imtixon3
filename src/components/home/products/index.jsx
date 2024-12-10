import { HeartFilled } from "@ant-design/icons";
import { HeartOutlined } from "@ant-design/icons";

import React, { useContext } from "react";
import "./products.scss";
import { ShopAppContext } from "../../../contex";
import useAxios from "../../../hooks/useAxios";
import { Link } from "react-router-dom";

function Products() {
  const { data, loading, error } = useAxios({ url: "products" });
  const { state, dispatch } = useContext(ShopAppContext);

  // console.log(state.liked. ,"state")

  const handleLike = (value) => {
    const isLiked = state.liked.find((item) => item.id === value.id);
    if (!isLiked) {
      console.log(value.isLiked, "1");
      dispatch({ type: "liked_add", value__like: value });
    } else {
      dispatch({ type: "liked_add", value__like: value });
      console.log(value.isLiked, "5");
    }
  };

  return (
    <section className="products">
      <div className="container">
        <div className="products__top">
          <h2>New Products</h2>
          <a href="#">View all</a>
        </div>
        <div className="products__middle">
          {data.map((value) => (
            <div className="card" key={value.id}>
              <div className="card__img">
                <img src={value.image} alt="" />

                <button>
                  {value.isLiked ? (
                    <HeartFilled
                      style={{ color: "red", fontSize: "24px" }}
                      onClick={() => handleLike(value)}
                    />
                  ) : (
                    <HeartOutlined
                      style={{ color: "gray", fontSize: "24px" }}
                      onClick={() => handleLike(value)}
                    />
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
                    <p>{value.rate}</p>
                  </button>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
