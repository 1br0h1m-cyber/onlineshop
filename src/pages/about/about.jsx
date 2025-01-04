import React from 'react';

// swipers css
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Swiper modules
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


// images
import swiper1 from '../../assets/swiper1.jpg';
import swiper2 from '../../assets/swiper2.jpg';
import swiper3 from '../../assets/swiper3.avif';
import swiper4 from '../../assets/swiper4.jpg';


const About = () => {
  return (
    <div className='lg:flex items-center justify-between px-8 gap-8'>

      <div className='w-90 lg:w-1/2 p-5'>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide> <img src={swiper1} alt="Swiper 1" /> </SwiperSlide>
          <SwiperSlide> <img src={swiper2} alt="Swiper 2" /> </SwiperSlide>
          <SwiperSlide> <img src={swiper3} alt="Swiper 3" /> </SwiperSlide>
          <SwiperSlide> <img src={swiper4} alt="Swiper 4" /> </SwiperSlide>
        </Swiper>
      </div>

      <div className='w-90 lg:w-1/2 p-3'>
        <h1 className='text-[50px] font-bold text-blue-100'>About Us</h1>
        <p className='text-white text-[18px]'>
          Virtual Shop offers seamless, convenient online shopping with diverse products, secure payments, mobile optimization, personalized recommendations, real-time inventory, flexible shipping, easy returns, detailed analytics, email marketing, eco-friendly packaging, seasonal campaigns, gamification, e-commerce integrations, subscription plans, gift wrapping, multi-currency options, FAQs, SEO optimization, featured products, push notifications, responsive support, user-generated content, sleek design, tailored filters, live chat, discount offers, wishlist functionality, social media integration, and transparent policies.
        </p>
      </div>

    </div>
  );
};

export default About;
