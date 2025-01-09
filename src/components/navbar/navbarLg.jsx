import React from 'react'
import { useNavigate } from 'react-router-dom';

//icons
import { GrLogin } from 'react-icons/gr';
import { IoMdPersonAdd } from 'react-icons/io';
import { FaCartPlus } from 'react-icons/fa';

const NavbarLg = () => {

  const navigate = useNavigate()

  return (
    <div className='lg:flex hidden bg-blue-950 flex justify-center items-center h-[60px] fixed w-full'>
      <div className='flex justify-between w-full px-20 items-center'>
        <a href="/" className='font-bold text-[24px] text-white cursor-default'>Virtual Shop</a>
        <div className='text-white space-x-5'>
          <a className='hover:text-blue-400 transition' href="/">Home</a>
          <a className='hover:text-blue-400 transition' href="/products">Product</a>
          <a className='hover:text-blue-400 transition' href="/about">About</a>
          <a className='hover:text-blue-400 transition' href="/contact">Contact</a>
        </div>
        <div className='text-white space-x-4'>
          <button onClick={()=>navigate('/login')} className='outline rounded-lg py-1 px-3 hover:text-blue-400 hover:bg-slate-800 transition'>
            <div className='flex gap-1 justify-center items-center'><GrLogin className='text-[20px]'/> Login</div></button>
          <button onClick={()=>navigate('/register')} className='outline rounded-lg py-1 px-3 hover:text-blue-400 hover:bg-sky-950 transition'>
            <div className='flex gap-1 justify-center items-center'><IoMdPersonAdd className='text-[20px]'/> Register</div></button>
          <button onClick={()=>navigate('/cart')} className='outline rounded-lg py-1 px-3 hover:text-blue-400 hover:bg-sky-950 transition'>
            <div className='flex gap-1 justify-center items-center'><FaCartPlus className='text-[20px]'/> Cart</div></button>
        </div>
      </div>
    </div>
  )
}

export default NavbarLg