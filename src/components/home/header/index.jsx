import React, { useContext, useEffect, useState } from "react";
import "./header.scss";

// Iconlar
import { FaBars, FaTimes } from "react-icons/fa";
// Imglar
import shop from "../../../img/bag.svg";
import user from "../../../img/user.svg";
import like from "../../../img/heart.svg";
import logo from "../../../img/logo.svg";
import { useNavigate } from "react-router-dom";
import { Badge } from "antd";
import { ShopAppContext } from "../../../contex";
function Header() {
  const navigate = useNavigate();

  const navigate_btn = () => {
    navigate("/shop");
  };

  const navigate_like = () => {
    navigate("/like");
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const { state } = useContext(ShopAppContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigate_btn2 = () => {
    navigate("/");
  };

  const { state } = useContext(ShopAppContext);

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Logo" onClick={navigate_btn2} />
        </div>
        <div className={`nav__link ${isMenuOpen ? "active" : ""}`}>
          <ul className="ul">
            <li className="li">
              <a href="#">Home</a>
            </li>
            <li className="li">
              <a href="#">Products</a>
            </li>
            <li className="li">
              <a href="#">Blog</a>
            </li>
            <li className="li">
              <a href="#">FAQ</a>
            </li>
            <li className="li">
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="nav__user">
          <button onClick={navigate_like}>
            <img src={like} alt="" />
          </button>
          <button onClick={navigate_btn}>
            <Badge count={state.data?.length}>
              <img src={shop} alt="" />
            </Badge>
          </button>
          <button>
            <img src={user} alt="" />
          </button>
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaTimes className="bars" />
            ) : (
              <FaBars className="bars" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
