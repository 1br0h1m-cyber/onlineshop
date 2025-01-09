import React from 'react'

const Home = () => {
  return (
    <div>    
      <div className='home flex items-center p-9 h-screen'>
        <div className='home-title backdrop-blur-sm lg:h-[160px] px-3 w-full'>
          <b className='lg:text-[65px] md:text-[50px] text-[40px] uppercase text-sky-800 text-shadow-md'>New Season Arrivals</b>
          <p className='lg:text-[40px] md:text-[35px] text-[30px] uppercase text-sky-800 text-shadow-md'>Check out all trends</p>
        </div>
      </div>
    </div>
  );
  
}

export default Home