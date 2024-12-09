import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./card.scss";
import useAxios from "../../../hooks/useAxios";
import { Link } from "react-router-dom";

function Cardlar() {
  const { data, loading, error } = useAxios({ url: "cards" });

  // const cards = data.find((item) => item.cards)?.cards || [];

  // console.log(cards);

  return (
    <section className="cardlar">
      <div className="container">
        <div className="card__all">
          <Swiper
            spaceBetween={30}
            slidesPerView={6}
            modules={[Pagination, Navigation]} // Swiper modulini faollashtirish
            className="mySwiper"
            pagination={false} // Paginationni o'chirish
            navigation={false} // Navigationni o'chirish
            breakpoints={{
              1084: {
                // Katta ekranlar uchun
                slidesPerView: 5,
                spaceBetween: 30,
              },
              800: {
                // O'rta ekranlar uchun (planshetlar)
                slidesPerView: 4,
                spaceBetween: 20,
              },
              640: {
                // Kichik ekranlar uchun (telefonlar)
                slidesPerView: 3,
                spaceBetween: 15,
              },
              340: {
                // Juda kichik ekranlar uchun
                slidesPerView: 2,
                spaceBetween: 10,
              },
              0: {
                // Juda kichik ekranlar uchun
                slidesPerView: 1,
                spaceBetween: 10,
              },
            }}
          >
            {/* Static Swiper Slides */}
            {data.map((value) => (
              <SwiperSlide key={value.id}>
                <div className="card">
                  <div className="img">
                    <img src={value.image} alt="Accessories" />
                    <h4>{value.title}</h4>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Cardlar;

// <SwiperSlide>
// <div className="card">
//   <div className="img">
//     <img src={card1} alt="Accessories" />
//     <h4>Accessories</h4>
//   </div>
// </div>
// </SwiperSlide>
// <SwiperSlide>
// <div className="card">
//   <div className="img">
//     <img src={card1} alt="Accessories" />
//     <h4>Accessories</h4>
//   </div>
// </div>
// </SwiperSlide>
// <SwiperSlide>
// <div className="card">
//   <div className="img">
//     <img src={card1} alt="Accessories" />
//     <h4>Accessories</h4>
//   </div>
// </div>
// </SwiperSlide>
// <SwiperSlide>
// <div className="card">
//   <div className="img">
//     <img src={card1} alt="Accessories" />
//     <h4>Accessories</h4>
//   </div>
// </div>
// </SwiperSlide>
// <SwiperSlide>
// <div className="card">
//   <div className="img">
//     <img src={card1} alt="Accessories" />
//     <h4>Accessories</h4>
//   </div>
// </div>
// </SwiperSlide>
// <SwiperSlide>
// <div className="card">
//   <div className="img">
//     <img src={card1} alt="Accessories" />
//     <h4>Accessories</h4>
//   </div>
// </div>
// </SwiperSlide>
