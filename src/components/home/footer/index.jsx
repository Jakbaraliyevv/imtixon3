import React from "react";
import "./footer.scss";
// Iconlar
import { CiLocationOn } from "react-icons/ci";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { MdOutlineAttachEmail } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { FaAngleRight } from "react-icons/fa";
import { AiOutlineFacebook } from "react-icons/ai";
import { TfiTwitter } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import { RiYoutubeLine } from "react-icons/ri";
import { BiMessageDetail } from "react-icons/bi";
// Imglar
import img1 from "../../../img/footer1.svg";
import img2 from "../../../img/footer2.svg";
import img3 from "../../../img/footer3.svg";
import img4 from "../../../img/footer4.svg";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__top">
            <div className="footer__link">
              <p>Company</p>
              <a href="#">about us</a>
              <a href="#">blog</a>
              <a href="#">returns</a>
              <a href="#">order status </a>
            </div>

            <div className="footer__link">
              <p>Info</p>
              <a href="#">How it works?</a>
              <a href="#">our promises</a>
              <a href="#">FAQ</a>
            </div>

            <div className="footer__sosials">
              <p>Contact us</p>
              <div className="footer__sosial">
                <CiLocationOn className="link" />
                <a href="#">123 Main Street, Anytown,USA</a>
              </div>
              <div className="footer__sosial">
                <MdOutlinePhoneInTalk className="link" />
                <a href="tel:+1 (555) 123-4567">+1 (555) 123-4567</a>
              </div>
              <div className="footer__sosial">
                <MdOutlineAttachEmail className="link" />
                <a href="#">TechHeimSupport@gmail.com</a>
              </div>
            </div>

            <div className="footer___sign">
              <div className="sign__left">
                <p>Sign up for News and updates</p>
                <button>
                  <CiUser />
                  <p>E-mail Address</p>
                  <FaAngleRight />
                </button>
                <div className="sosial">
                  <button>
                    <AiOutlineFacebook />
                  </button>
                  <button>
                    <TfiTwitter />
                  </button>
                  <button>
                    <FaInstagram />
                  </button>
                  <button>
                    <RiYoutubeLine />
                  </button>
                </div>
              </div>

              <button>
                <BiMessageDetail />
              </button>
            </div>
          </div>
          <div className="footer__middle">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
          </div>

          <div className="footer__bottom">
            <div className="bottom__left">
              <button>C</button>
              <p>2023 Tech Heim. </p>
            </div>
            <div className="bottom__right">
              <a href="#">cookie settings</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms and Conditions </a>
              <a href="#">Imprint </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
