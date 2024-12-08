import React from "react";
import "./blog.scss";
// Icons
import { MdOutlineTimer } from "react-icons/md";
import { FaCalendarDays } from "react-icons/fa6";
import { VscSaveAll } from "react-icons/vsc";
// IMgs
import naushnik from "../../../img/airpods.png";
import siniq from "../../../img/siniq.png";
import meta from "../../../img/meta.png";
import blog1 from "../../../img/blog1.svg";
import blog2 from "../../../img/blog2.svg";
import blog3 from "../../../img/blog3.svg";
import blog4 from "../../../img/blog4.svg";
function Blogs() {
  return (
    <section className="blogs">
      <div className="container">
        <div className="blogs__top">
          <h2>Our Blogs</h2>
          <a href="#">View all</a>
        </div>
        <div className="blogs__middle">
          <div className="middle__left">
            <div className="left__img">
              <img src={meta} alt="" />
            </div>

            <div className="left__text">
              <div className="day">
                <div className="time">
                  <FaCalendarDays className="time1" />
                  <p>August , 8 , 2023</p>
                </div>
                <div className="time">
                  <MdOutlineTimer className="time1" />
                  <p>3 min read</p>
                </div>
              </div>
              <h3>Meta Platforms plans to release free software that...</h3>
              <p>
                The parent company of Facebook, Meta Platforms, is introducing
                software to help developers
              </p>
            </div>
          </div>

          <div className="middle__right">
            <div className="naushnik">
              <div className="n_img">
                <img src={naushnik} alt="" />
              </div>
              <div className="n_text">
                <h3>8 Things You Probably Didn’t Know About Headphones</h3>
                <p>
                  Owning a headphone could mean a different thing for different
                  people. For some, it act as a fashion statement. It’s easy to
                  spot these people, the headphone are almost always just
                  hanging around the neck.
                </p>
                <div className="saved__All">
                  <div className="saved">
                    <FaCalendarDays className="time__icon" />
                    <p>August , 8 , 2023</p>
                  </div>
                  <VscSaveAll className="time__icon" />
                </div>
              </div>
            </div>
            <div className="naushnik">
              <div className="n_img">
                <img src={siniq} alt="" />
              </div>
              <div className="n_text">
                <h3 className="h3">
                  8 Things You Probably Didn’t Know About Headphones
                </h3>
                <p>
                  Owning a headphone could mean a different thing for different
                  people. For some, it act as a fashion statement. It’s easy to
                  spot these people, the headphone are almost always just
                  hanging around the neck.
                </p>
                <div className="saved">
                  <FaCalendarDays className="time__icon" />
                  <p>August , 8 , 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="blogs__bottom">
          <div className="bottom__card">
            <img src={blog1} alt="" />
            <p>Latest and Greatest Tech</p>
          </div>
          <div className="bottom__card">
            <img src={blog2} alt="" />
            <p>Guarantee</p>
          </div>
          <div className="bottom__card">
            <img src={blog3} alt="" />
            <p>Free Shipping over 1000$</p>
          </div>
          <div className="bottom__card">
            <img src={blog4} alt="" />
            <p>24/7 Support</p>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default Blogs;
