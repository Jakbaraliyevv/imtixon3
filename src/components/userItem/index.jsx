import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import Header from "../home/header";
import Footer from "../home/footer";
import "./item.scss";
// Img
import { FaRegStar } from "react-icons/fa";
import { FaBuffer } from "react-icons/fa";
import { TbFlagStar } from "react-icons/tb";
import { FaBabyCarriage } from "react-icons/fa";
import { ShopAppContext } from "../../contex";

function UserItem() {
  const { id } = useParams();

  const { data } = useAxios({ url: `products/${id}` });
  console.log(data, "dataID");
  const { dispatch } = useContext(ShopAppContext);

  return (
    <>
      <Header />
      <section className="product">
        <div className="container">
          <div className="all" key={data.id}>
            <div className="product__top">
              <div className="top__left">
                <img src={data.image} alt="" />
              </div>
              <div className="alll">
                <div className="top__middle">
                  <h2>{data.title}</h2>
                  <div className="rate">
                    <button>
                      <FaRegStar className="star" />
                      <p>{data.rate}</p>
                    </button>
                    <p>sold 125</p>
                  </div>

                  <div className="icons">
                    <div className="icon">
                      <FaBuffer className="icon1" />
                      <p>In Stock</p>
                    </div>
                    <div className="icon">
                      <TbFlagStar className="icon1" />

                      <p>In Guaranteed</p>
                    </div>
                    <div className="icon">
                      <FaBabyCarriage className="icon1" />

                      <p>Free Delivery</p>
                    </div>
                  </div>
                  <div className="all__ul">
                    <ul className="ol">
                      <li className="li">
                        <p>brand</p>
                      </li>
                      <li className="li">
                        <p>Model Name </p>
                      </li>
                      <li className="li">
                        <p>Hard Disk Size</p>
                      </li>
                      <li className="li">
                        <p>Ram Memory</p>
                      </li>
                    </ul>
                    <ul className="ol2">
                      <li className="li">
                        <p>{data.brand}</p>
                      </li>
                      <li className="li">
                        <p>{data.model} </p>
                      </li>
                      <li className="li">
                        <p>{data.size}</p>
                      </li>
                      <li className="li">
                        <p>{data.ram}</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="top__right">
                  <h2>
                    <span>{data.dollar}</span>
                    {data.newPrice}
                  </h2>
                  <p>
                    last price<s>$ 1410,87</s>
                  </p>

                  <button
                    onClick={() => {
                      dispatch({ type: "add", value: data });
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>

            <div className="product__bottom">
              <h2>Technical Details</h2>

              <div className="bottom__div">
                <h3>Display</h3>
                <p>{data.display}</p>
              </div>
              <div className="bottom__div">
                <h3>Graphics</h3>
                <p>{data.graphics}</p>
              </div>
              <div className="bottom__div">
                <h3>Height</h3>
                <p>{data.height}</p>
              </div>
              <div className="bottom__div">
                <h3>Processor</h3>
                <p>{data.processor}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
export default UserItem;
