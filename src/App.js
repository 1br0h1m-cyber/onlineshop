import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

// images
import PageNotFound from './assets/error-page.png'

// navbar & footer
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';

//navbar elements
const Home = lazy(()=>import('./pages/home/home'))
const About = lazy(()=>import('./pages/about/about'))
const Products = lazy(()=>import('./pages/products/products'))
const Contact = lazy(()=>import('./pages/contact/contact'))
const Login = lazy(()=>import('./pages/login/login'))
const Register = lazy(()=>import('./pages/register/register'))
const Cart = lazy(()=>import('./pages/cart/cart'))

function App(){
  return (
    <div>
      <Navbar/>

      <div className='pt-12'>        
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='*' element={<div className='flex justify-center items-center h-screen'>
            <img src={PageNotFound} alt='error' className='h-[500px] rounded-3xl'/></div>}/>
        </Routes>
        </div>

      <Footer/>
    </div>
  );
}

export default App;