import React from 'react'
import BiryaniImg from "../../assets/biryani5.png";
import Vector from "../../assets/vector3.png";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";





const Banners = () =>{
    const bgImage ={
        backgroundeImage: `url(${Vector})`,
        backgroundPosition:"center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100%",
        width: "100%",

    }
}
const Banner = () => {
  return (
    <>
    <div className=' min-h-[550px]'>
        <div>
            <div
             data-aos="slide-up"
             data-aos-duration="300"
             className=' container'
             >
                <div className=' grid grid-cols-1 sm:grid-cols-2 gap-6'>
                    {/* image section */}
                    <div>
                        <img src={BiryaniImg} alt="BiryaniImg" className='max-w-[430px] w-full mx-auto drop-shadow-[-10px_10px_12px_ rgba(0,0,0,0.1)]'  />
                    </div>
                     {/* text content section */}
                     <div className=' flex flex-col justify-center gap-6 sm:pt-0'>
                        <h1 className=' text-3xl sm:text-4xl font-bold font-[poppins]'>Lorem, ipsum dolor.</h1>
                        <p className=' text-sm text-gray-500 tracking-wide leading-5'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eos dolore
                            ,delectus placeat maiores ipsum sed. Ratione cum sed aut aperiam nihil veniam sint! Maiores!
                            <br />
                            <br />
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, itaque! Excepturi debitis saepe libero? 
                            Optio natus molestias animi excepturi voluptas quas rem unde, dolorem repellendus tempore? Optio vero magni sequi!
                        </p>

                        <div className=' flex gap-6'>
                            <div className=' text-4xl w-20 h-20 shadow-sm p-5 rounded-full bg-violet-100 dark:bg-violet-400'>
                                <GrSecure/>
                            </div>

                            <div className='text-4xl w-20 h-20 shadow-sm p-5 rounded-full bg-orange-100 dark:bg-orange-400'>
                                <IoFastFood/>
                            </div>

                            <div className='text-4xl w-20 h-20 shadow-sm p-5 rounded-full bg-green-100 dark:bg-green-400'>
                                <GiFoodTruck/>
                            </div>
                           
                        </div>
                        <div>
                            <button className="bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-full shadow-xl hover:shadow-md">
                            Order Now
                            </button>
                        </div>
                     </div>



                </div>

            </div>
        </div>

    </div>
    
    </>
  )
}

export default Banner