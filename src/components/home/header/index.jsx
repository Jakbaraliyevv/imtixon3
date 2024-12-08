import React, { useState } from "react";
import "./header.scss";

// Iconlar
import { FaBars } from "react-icons/fa";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
// Imglar
import shop from "../../../img/bag.svg";
import user from "../../../img/user.svg";
import like from "../../../img/heart.svg";
import logo from "../../../img/logo.svg";
function Header() {
  const [menu, setMenu] = useState(false);

  const toogle = () => {
    console.log("salom");
    // setMenu(!menu);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="" />
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
          <button>
            <img src={shop} alt="" />
          </button>
          <button>
            <img src={user} alt="" />
          </button>
          <button onClick={toogle}>
            <FaBars className="bars" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
