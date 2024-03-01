"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "./style.css";
import { testimonials } from "@/constants";
import Image from "next/image";
import { Pagination } from "swiper/modules";

const Testimonial = () => {
  return (
    <div className="testimonials">
      <div className="intro">
        <h3>Testimonials</h3>
        <h4>
          Unveiling Client Feedback <span>Testimonials</span> from Our Esteemed
          Customers
        </h4>
        <p>
          Celebrating the voices of our esteemed clients, our testimonials
          provide an authentic glimpse into the experiences of those we&apos;ve
          had the pleasure of serving.
        </p>
      </div>
      <div className="list">
        <Swiper
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {testimonials.map(({ img, name, designation, description }) => (
            <SwiperSlide key={name}>
              <div className="testmonial">
                <Image src={img} width={60} height={60} alt={name} />
                <h5>{name}</h5>
                <span>{designation}</span>
                <p>{description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
