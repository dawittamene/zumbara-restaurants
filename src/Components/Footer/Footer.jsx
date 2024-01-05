import React from 'react'
import FOOTER from '../../assets/food-logo.png';
import { Link } from "react-router-dom";

import{
    FaLocationArrow,
    FaFacebook,
    FaInstagram,
    FaLinkedinIn,
    FaMobile
} from 'react-icons/fa'

const Footer = () => {
  return (
    <>
    <div className=' bg-gray-100 dark:bg-gray-950 dark:text-gray-200'>
        <div className=' max-w-[1200px] mx-auto'>
            <div className=' grid md:grid-cols-3 py-5'>
                <div className='py-8 px-4'>
                    <h1 className=' flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left'>
                        
                    <img src={FOOTER} alt="FOOTER" className=' max-w-[50px]'/>
                        Zumbara

                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Vitae ab deserunt voluptate 
                        praesentium reiciendis odit quaerat est, rem debitis asperiores!
                    </p>
                    <br />
                    <div className='flex items-center gap-3 mt-6'>
                        <FaLocationArrow/>
                        
                        <p>Assosa , Sherkole, Menge</p>
                    </div>
                    <div className=' flex items-center gap-3 mt-3'>
                        <FaMobile/>
                        <p>+2591234578</p>
                    </div>

                     {/* social */}

                  <div>
                    <div className=' flex items-center gap-6 mt-6'>
                        <a href="#" >
                            <FaLinkedinIn className=' text-3xl'/>
                       </a>
                       <a href="#" >
                            <FaInstagram className=' text-3xl'/>
                       </a>

                       <a href="#" >
                            <FaFacebook className=' text-3xl'/>
                       </a>

                       

                    </div>
                </div>
                </div>

               


                <div className=' grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
                    <div>
                        <div className=' py-8 px-4'>
                            <h1 className=' text-xl font-bold text-justify sm:text-left mb-3 '>Important Link</h1>
                            <ul className=' flex flex-col gap-3'>
                                <li>
                                <Link to="/">Home</Link>
                                </li>
                                <li>
                                <Link to="/">Services</Link>
                                    
                                </li>
                                <li>
                                <Link to="/">Contact</Link>
                                    
                                </li>
                                <li>
                                <Link to="/">Testimonial</Link>
                                    
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <div className=' py-8 px-4'>
                            <h1 className=' text-xl font-bold text-justify sm:text-left mb-3 '>Important Link</h1>
                            <ul className=' flex flex-col gap-3'>
                            <li>
                                <Link to="/">Home</Link>
                                </li>
                                <li>
                                <Link to="/">Services</Link>
                                    
                                </li>
                                <li>
                                <Link to="/">Contact</Link>
                                    
                                </li>
                                <li>
                                <Link to="/">Testimonial</Link>
                                    
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <div className=' py-8 px-4'>
                            <h1 className=' text-xl font-bold text-justify sm:text-left mb-3 '>Important Link</h1>
                            <ul className=' flex flex-col gap-3'>
                            <li>
                                <Link to="/">Home</Link>
                                </li>
                                <li>
                                <Link to="/">Services</Link>
                                    
                                </li>
                                <li>
                                <Link to="/">Contact</Link>
                                    
                                </li>
                                <li>
                                <Link to="/">Testimonial</Link>
                                    
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' text-center py-10 border-t-2 border-gray-300/50'>
                
                    &copy; copyright 2024 All right reserved || Zumbara Web Developing Group
               
            </div>
        </div>

    </div>
    </>
  )
}

export default Footer