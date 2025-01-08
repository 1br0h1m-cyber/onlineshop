import React from 'react'

//icons
import { FaFacebook, FaGithub, FaInstagram, FaTelegram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

//logo
import logo from '../../assets/logo.png'

const Footer = () => {

  return (
    <div>

      <footer class="bg-slate-800">
          <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div class="sm:flex sm:flex-col sm:items-center sm:justify-between md:flex-row md:justify-between" id='footerDiv'>

              <a href="/" class="flex items-center mb-4 sm:mb-6 px-6 py-1 sm:p-0 md:mb-0 space-x-3 rtl:space-x-reverse">
                  <img src={logo} class="h-9 rounded-[50%]" alt="Flowbite Logo" />
                  <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Virtual Shop</span>
              </a>

              <div className='grid grid-cols-2 px-6 space-x-[60px] md:space-x-[0px] md:gap-[0px] md:none justify-between' id='footer'>

                <ul class="flex flex-col md:flex-row items-start sm:items-start md:items-center font-medium text-gray-400 space-y-4 md:space-y-0 md:space-x-7 lg:space-x-8">
                  <li>
                    <a className='hover:text-blue-500 transition' href="/">Home</a>
                  </li>
                  <li>
                    <a className='hover:text-blue-500 transition' href="/about">About</a>
                  </li>
                  <li>
                    <a className='hover:text-blue-500 transition' href="/login">Login</a>
                  </li>
                  <li>
                    <a className='hover:text-blue-500 transition' href="https://policies.google.com/terms">Terms</a>
                  </li>
                  <li>
                    <a className='hover:text-blue-500 transition' href="https://policies.google.com/privacy">Privacy</a>
                  </li>
                </ul>

                <ul class="flex flex-col sm:flex-col md:flex-row items-start sm:items-start md:items-center text-gray-400 space-y-4 md:space-y-0 sm:gap-x-4 md:justify-end md:gap-x-8">
                  <li>
                    <a className='hover:text-blue-500 transition' href="https://telegram.org"><div className='flex items-center gap-2'>
                      <FaTelegram className='text-[25px]'/><span className='md:hidden font-medium'>Telegram</span></div></a>
                  </li>
                  <li>
                    <a className='hover:text-blue-500 transition' href="https://www.instagram.com/"><div className='flex items-center gap-2'>
                    <FaInstagram className='text-[25px]'/><span className='md:hidden font-medium'>Instagram</span></div></a>
                  </li>
                  <li>
                    <a className='hover:text-blue-500 transition' href="https://x.com"><div className='flex items-center gap-2'>
                    <FaXTwitter className='text-[25px]'/><span className='md:hidden font-medium'>Twitter</span></div></a>
                  </li>
                  <li>
                    <a className='hover:text-blue-500 transition' href="https://www.facebook.com"><div className='flex items-center gap-2'>
                    <FaFacebook className='text-[25px]'/><span className='md:hidden font-medium'>Facebook</span></div></a>
                  </li>
                  <li>
                    <a className='hover:text-blue-500 transition' href="https://github.com"><div className='flex items-center gap-2'>
                    <FaGithub className='text-[25px]'/><span className='md:hidden font-medium'>Github</span></div></a>
                  </li>
                </ul>

              </div>

            </div>

            <hr class="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
            <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© {new Date().getFullYear()} <a href="/" class="hover:text-blue-400">Online Shop™</a>. All Rights Reserved.</span>
          
          </div>
      </footer>

    </div>
  )
}

export default Footer