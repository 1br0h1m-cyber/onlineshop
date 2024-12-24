import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

//icons
import { FaBars} from 'react-icons/fa'
import { RiCloseLargeLine } from 'react-icons/ri';
import { GrLogin } from 'react-icons/gr';
import { IoMdPersonAdd } from 'react-icons/io';
import { FaCartPlus } from 'react-icons/fa';

const NavbarSm = () => {

  const [bars, setBars] = useState(false)
  
  const navigate = useNavigate()

  const button = () => {
    setBars(!bars)
  }

  return (

    <div>
        <div className='lg:hidden block bg-blue-950 flex justify-center items-center h-[60px]'>

          <div className='flex justify-between w-full px-20 items-center'>
            <a href="/" className='font-bold text-[24px] text-white cursor-default'>Virtual Shop</a>
            <button className={`p-[6px] text-[20px] text-white hover:text-blue-400 hover:bg-slate-800 transition outline rounded`} onClick={button}>
              {bars === false ? <FaBars/> : <RiCloseLargeLine />}  
            </button>
          </div>

        </div>

        {bars === true ?

        <div className='bg-blue-950 w-full lg:hidden border-t border-white'>
          <div className='text-white text-center space-x-[50px] pt-3 lg:hidden'>
            <a className='hover:text-blue-500 transition' href="/">Home</a>
            <a className='hover:text-blue-500 transition' href="/products">Product</a>
            <a className='hover:text-blue-500 transition' href="/about">About</a>
            <a className='hover:text-blue-500 transition' href="/contact">Contact</a>
          </div>
          <div className='text-white space-x-[50px] py-3 flex justify-center'>
            <button onClick={()=>navigate('/login')} className='outline rounded-lg py-1 px-3 hover:text-blue-400 hover:bg-slate-800 transition'>
              <div className='flex gap-1 justify-center items-center'><GrLogin className='text-[20px]'/> Login</div></button>
            <button onClick={()=>navigate('/register')} className='outline rounded-lg py-1 px-3 hover:text-blue-400 hover:bg-slate-800 transition'>
              <div className='flex gap-1 justify-center items-center'><IoMdPersonAdd className='text-[20px]'/> Register</div></button>
            <button onClick={()=>navigate('/cart')} className='outline rounded-lg py-1 px-3 hover:text-blue-400 hover:bg-slate-800 transition'>
              <div className='flex gap-1 justify-center items-center'><FaCartPlus className='text-[20px]'/> Cart</div></button>
          </div>
        </div>

        : '' }

    </div>

  )
}

export default NavbarSm