"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import CardSeminar from "../elemets/CardSeminar.jsx";

const Seminar = () => {
  return (
    <>
    <div className='mx-auto text-secondary text-xl mt-12 -mb-2  px-1 font-extrabold sm:text-2xl'>SEMINAR</div>
      <div className="hidden sm:flex sm:items-center mt-5">
        <Swiper
          pagination={{
            clickable: false,
            type: "custom",
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: -100,
            },
            900: {
              slidesPerView: 3,
              spaceBetween: 80,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <CardSeminar image="/images/5.png" judul="Seminar 1">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </CardSeminar>
          </SwiperSlide>
          <SwiperSlide>
            <CardSeminar image="/images/5.png" judul="Seminar 1">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </CardSeminar>
          </SwiperSlide>
          <SwiperSlide>
            <CardSeminar image="/images/5.png" judul="Seminar 1">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </CardSeminar>
          </SwiperSlide>
          <SwiperSlide>
            <CardSeminar image="/images/5.png" judul="Seminar 1">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </CardSeminar>
          </SwiperSlide>
          <SwiperSlide>
            <CardSeminar image="/images/5.png" judul="Seminar 1">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </CardSeminar>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="w-full  flex flex-col items-center sm:hidden">
        <CardSeminar image="/images/5.png" judul="Seminar 1">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </CardSeminar>
        <CardSeminar image="/images/5.png" judul="Seminar 1">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </CardSeminar>
        <CardSeminar image="/images/5.png" judul="Seminar 1">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </CardSeminar>
        <CardSeminar image="/images/5.png" judul="Seminar 1">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </CardSeminar>
      </div>
    </>
  );
};

export default Seminar;
