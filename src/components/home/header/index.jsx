import React, { useState } from "react";
import "./header.scss";

// Iconlar
import { FaBars } from "react-icons/fa";
// Imglar
import shop from "../../../img/bag.svg";
import user from "../../../img/user.svg";
import like from "../../../img/heart.svg";
import logo from "../../../img/logo.svg";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();

  const navigate_btn = () => {
    navigate("/shop");
  };

  const navigate_btn2 = () => {
    navigate("/");
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img onClick={navigate_btn2} src={logo} alt="" />
        </div>
        <div className="nav__link">
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
          <button>
            <img src={like} alt="" />
          </button>
          <button onClick={navigate_btn}>
            <img src={shop} alt="" />
          </button>
          <button>
            <img src={user} alt="" />
          </button>
          <button>
            <FaBars className="bars" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
