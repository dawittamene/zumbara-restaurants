import { Outlet, Link } from "react-router-dom";
import LOGO from '../assets/food-logo.png'
import { useState } from "react";
import Button from "../Components/Button/Button";
import DarkMode from "../Components/DarkMode/DarkMode";

const Layout = () => {

  const [open, setopen] = useState(false)
  return (
    <>
      <nav className=" bg-white shadow-md dark:bg-gray-900 dark:text-white py-5 text-black">

        <div className="flex justify-between py-1 md:py-2 items-center">
          <div className="z-50  md:w-auto w-full flex items-center text-xl md:text-2xl ml-5  cursor-pointer justify-between">
            <a className=" flex gap-2 text-2xl sm:text-3xl items-center font-bold" href="/">
              <img className="h-9 " src={LOGO} alt="logo" />Zumbara Restaurant
            </a>
            
            

            <div className='text-3xl pt-2   md:hidden' onClick={() => setopen(!open)}>
              <ion-icon name={`${open ? 'close' : 'menu'}`} ></ion-icon>
            </div>

            
          </div>
          
          
          <div className=" text-2xl font-[poppins] md:flex hidden cursor-pointer mr-12 ">
            <div className=" pr-10">
              <DarkMode/>
            </div>
          <ul className=" flex gap-6">
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
          <div className=" ml-5">
            <Button/>
          </div>
          </div>
        </div>

        <ul className={`
           md:hidden bg-white dark:bg-gray-900 dark:text-white absolute w-full h-full bottom-2 py-24 pl-4 duration-500   ${open ? 'top-0' : 'top-[-100%]'}`}>
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
            <div className="pt-5 justify-center gap-48 flex">
            <Button/>
            <div className=" pt-2">
              <DarkMode/>
            </div>
            
            </div>

         
          </ul>
          
         

          
        </nav>
     

      <Outlet />
      
    </>
  )
};

export default Layout;