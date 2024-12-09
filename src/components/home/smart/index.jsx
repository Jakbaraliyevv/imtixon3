import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./smart.scss";
import img from "../../../img/card1.png";
import useAxios from "../../../hooks/useAxios";

function Smart() {
  const { data, loading, error } = useAxios({ url: "smart" });
  // const smart = data.find((item) => item.smart)?.smart || [];

  // console.log(smart);

  return (
    <section className="smart">
      <div className="container">
        <Swiper
          spaceBetween={30}
          slidesPerView={4}
          pagination={false}
          navigation={false}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            1260: {
              // Katta ekranlar uchun
              slidesPerView: 4,
              spaceBetween: 30,
            },
            990: {
              // O'rta ekranlar uchun (planshetlar)
              slidesPerView: 3,
              spaceBetween: 20,
            },
            598: {
              // Kichik ekranlar uchun (telefonlar)
              slidesPerView: 2,
              spaceBetween: 15,
            },
            0: {
              // Juda kichik ekranlar uchun
              slidesPerView: 1,
              spaceBetween: 5,
            },
          }}
        >
          {data.map((value) => (
            <SwiperSlide key={value.id}>
              <div className="smart_card">
                <div className="smart__img">
                  <img src={value.image} alt="Logitech G502 Gaming Mouse" />
                  <button>
                    <p>{value.chegirma}</p>
                  </button>
                </div>
                <div className="smart__text">
                  <p>{value.title}</p>
                  <div className="prices">
                    <p className="all__Price">
                      <s>{value.oldPricede}</s>
                    </p>
                    <p className="all__Price">
                      {value.newPrice}
                      <span>{value.dollar}</span>
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Smart;

// <SwiperSlide>
// <div className="smart_card">
//   <div className="smart__img">
//     <img src={img} alt="NPET K10 Wired Keyboard" />
//     <button>
//       <p>-30%</p>
//     </button>
//   </div>
//   <div className="smart__text">
//     <p>NPET K10 Wired Gaming Keyboard</p>
//     <div className="prices">
//       <p className="all__Price">
//         <s>$49.00</s>
//       </p>
//       <p className="all__Price">$34.30</p>
//     </div>
//   </div>
// </div>
// </SwiperSlide>
// <SwiperSlide>
// <div className="smart_card">
//   <div className="smart__img">
//     <img src={img} alt="Apple Watch" />
//     <button>
//       <p>-20%</p>
//     </button>
//   </div>
//   <div className="smart__text">
//     <p>Apple Watch Series 7</p>
//     <div className="prices">
//       <p className="all__Price">
//         <s>$289.00</s>
//       </p>
//       <p className="all__Price">$231.20</p>
//     </div>
//   </div>
// </div>
// </SwiperSlide>
// <SwiperSlide>
// <div className="smart_card">
//   <div className="smart__img">
//     <img src={img} alt="Apple MacBook" />
//     <button>
//       <p>-25%</p>
//     </button>
//   </div>
//   <div className="smart__text">
//     <p>Apple 2022 MacBook Air M2</p>
//     <div className="prices">
//       <p className="all__Price">
//         <s>$950.22</s>
//       </p>
//       <p className="all__Price">$712.66</p>
//     </div>
//   </div>
// </div>
// </SwiperSlide>
// <SwiperSlide>
// <div className="smart_card">
//   <div className="smart__img">
//     <img src={img} alt="Samsung Watch" />
//     <button>
//       <p>-17%</p>
//     </button>
//   </div>
//   <div className="smart__text">
//     <p>Samsung Titan Smart Watch</p>
//     <div className="prices">
//       <p className="all__Price">
//         <s>$120.00</s>
//       </p>
//       <p className="all__Price">$99.60</p>
//     </div>
//   </div>
// </div>
// </SwiperSlide>
