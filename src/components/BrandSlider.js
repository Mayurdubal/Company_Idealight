import { Swiper, SwiperSlide } from 'swiper/react';
import { brandswiper } from '../sliderProps';

const BrandSlider = () => {
  return (
    <Swiper {...brandswiper} className="swiper-container brandswiper">
      <div className="swiper-wrapper">
        <SwiperSlide className="swiper-slide">
          <div className="brand-img">
            <img alt="img" src="assets/img/tech-aws.png" />
          </div>
          <span>Amazon web services</span>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="brand-img">
            <img alt="img" src="assets/img/tech-ts.png" />
          </div>
          <span>TypeScript</span>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="brand-img">
            <img alt="img" src="assets/img/tech-node.png" />
          </div>
          <span>Node.js</span>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="brand-img">
            <img alt="img" src="assets/img/tech-react.png" />
          </div>
          <span>React.js</span>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="brand-img">
            <img alt="img" src="assets/img/tech-react-native.png" />
          </div>
          <span>React Native</span>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="brand-img">
            <img alt="img" src="assets/img/tech-redux.png" />
          </div>
          <span>Redux</span>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="brand-img">
            <img alt="img" src="assets/img/tech-postgres.png" />
          </div>
          <span>Postgres</span>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="brand-img">
            <img alt="img" src="assets/img/tech-mongo.png" />
          </div>
          <span>Mongo DB</span>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="brand-img">
            <img alt="img" src="assets/img/tech-wp.png" />
          </div>
          <span>Wordpress</span>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="brand-img">
            <img alt="img" src="assets/img/tech-js.png" />
          </div>
          <span>Js Frameworks</span>
        </SwiperSlide>
      </div>
    </Swiper>
  );
};
export default BrandSlider;
