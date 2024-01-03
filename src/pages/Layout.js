import { Outlet, Link } from "react-router-dom";
import LOGO from '../assets/food-logo.png'
import { useState } from "react";

const Layout = () => {

  const [open, setopen] = useState(false)
  return (
    <>
      <nav className=" bg-slate-900 py-5 text-white ">

        <div className="flex justify-between py-1 md:py-2 items-center">
          <div className="z-50  md:w-auto w-full flex items-center text-xl md:text-2xl ml-5  cursor-pointer justify-between">
            <img className="h-9" src={LOGO} alt="logo" />
            Zumbara Restaurant

            <div className='text-3xl pt-2   md:hidden' onClick={() => setopen(!open)}>
              <ion-icon name={`${open ? 'close' : 'menu'}`} ></ion-icon>
            </div>
          </div>
          
          <div className=" text-2xl font-[poppins] md:flex hidden cursor-pointer mr-12 ">
          <ul className=" flex gap-5">
            <li className=" ml-3 hover:text-gray-500 duration-500">
              <Link to="/">Home</Link>
            </li>
            <li className=" ml-3 hover:text-gray-500 duration-500">
              <Link to="/services">Services</Link>
            </li>
            <li className=" ml-3 hover:text-gray-500 duration-500">
              <Link to="/contact">Contact</Link>
            </li>
            <li className=" ml-3 hover:text-gray-500 duration-500">
              <Link to="/testimonial">Testimonial</Link>
            </li>
          </ul>
          </div>
        </div>

        <ul className={`
           md:hidden bg-black absolute w-full h-full bottom-2 py-24 pl-4 duration-500 ${open ? 'left-0' : 'left-[-100%]'}`}>
            <li  className='py-5 '>
              <Link to="/">Home</Link>
            </li>
            <li className='py-5 '>
              <Link to="/services">Services</Link>
            </li>
            <li className='py-5 '>
              <Link to="/contact">Contact</Link>
            </li>
            <li className='py-5 '>
              <Link to="/testimonial">Testimonial</Link>
            </li>
          </ul>
       

          
        </nav>
     

      <Outlet />
      
    </>
  )
};

export default Layout;