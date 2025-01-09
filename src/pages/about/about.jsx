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

// icons
import { FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { LiaTelegramPlane } from 'react-icons/lia';


const About = () => {
  return (
    <div className='lg:flex items-center justify-between px-8 gap-8 mt-1'>

      <div className='lg:w-1/2 py-5 px-3'>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide> <img src={swiper1} alt="Swiper1"/> </SwiperSlide>
          <SwiperSlide> <img src={swiper2} alt="Swiper2"/> </SwiperSlide>
          <SwiperSlide> <img src={swiper3} alt="Swiper3"/> </SwiperSlide>
          <SwiperSlide> <img src={swiper4} alt="Swiper4"/> </SwiperSlide>
        </Swiper>
      </div>

      <div className='lg:w-1/2 px-3 pb-3'>
        <h1 className='text-[50px] font-bold text-blue-100'>About Us</h1>
        <p className='text-white text-[18px]'>
          Virtual Shop offers seamless, convenient online shopping with diverse products, secure payments, mobile optimization, personalized recommendations, real-time inventory, flexible shipping, easy returns, detailed analytics, email marketing, eco-friendly packaging, seasonal campaigns, gamification, e-commerce integrations, subscription plans, gift wrapping, multi-currency options, FAQs, SEO optimization, featured products, push notifications, functionality, social media integration, and transparent policies.
        </p>
        
        <div className='flex gap-9 my-3'>
          <button className='border-solid border-blue-200 border-[2px] text-blue-200 rounded-md h-10 px-2 font-medium text-[15px] sm:text-[20px] hover:text-blue-400 hover:border-blue-400 hover:bg-sky-900 transition'>Read More</button>
          <div className='flex gap-3'>
            <button onClick={window.location.href = 'https://www.instagram.com/'} className='border-solid border-blue-200 border-[2px] text-blue-200 rounded-md h-10 w-10 flex justify-center items-center text-[25px] hover:text-blue-400 hover:border-blue-400 hover:bg-sky-900 transition'><FaInstagram/></button>
            <button onClick={window.location.href = 'https://telegram.org'} className='border-solid border-blue-200 border-[2px] text-blue-200 rounded-md h-10 w-10 flex justify-center items-center text-[25px] hover:text-blue-400 hover:border-blue-400 hover:bg-sky-900 transition'><LiaTelegramPlane/></button>
            <button onClick={window.location.href = 'https://x.com'} className='border-solid border-blue-200 border-[2px] text-blue-200 rounded-md h-10 w-10 flex justify-center items-center text-[25px] hover:text-blue-400 hover:border-blue-400 hover:bg-sky-900 transition'><FaXTwitter/></button>
          </div>
        </div>

      </div>

    </div>
  );
};

export default About;
