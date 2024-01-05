import React from 'react'
import Footer from '../Components/Footer/Footer'
import Avater from "../assets/avater1.png";
import Vector from "../assets/vector3.png";





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


const About = () => {
  return (
    <>
    <div className=' min-h-[550px] py-10'>
        <div>
            <div
             data-aos="slide-up"
             data-aos-duration="300"
             className=' container'
             >
                <div className=' grid grid-cols-1 sm:grid-cols-2 gap-6'>
                    {/* image section */}
                    <div>
                        <img src={Avater} alt="BiryaniImg" className=' w-80 h-80 max-w-[430px]  mx-auto drop-shadow-[-10px_10px_12px_ rgba(0,0,0,0.1)]'  />
                    </div>
                     {/* text content section */}
                     <div className=' flex flex-col justify-center gap-6 sm:pt-0'>
                        <h1 className=' text-3xl sm:text-4xl font-bold font-[poppins]'>Name</h1>
                        <p className=' text-sm text-gray-500 tracking-wide leading-5'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eos dolore
                            ,delectus placeat maiores ipsum sed. Ratione cum sed aut aperiam nihil veniam sint! Maiores!
                            <br />
                            <br />
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, itaque! Excepturi debitis saepe libero? 
                            Optio natus molestias animi excepturi voluptas quas rem unde, dolorem repellendus tempore? Optio vero magni sequi!
                        </p>

                        
                        
                     </div>
                </div>

                
            </div>
        </div>

        <div>
            <div
            
             className=' container'
             >
                <div className=' grid grid-cols-1 sm:grid-cols-2 gap-6'>
                    {/* image section */}
                    <div>
                        <img src={Avater} alt="BiryaniImg" className=' w-80 h-80 max-w-[430px]  mx-auto drop-shadow-[-10px_10px_12px_ rgba(0,0,0,0.1)]'  />
                    </div>
                     {/* text content section */}
                     <div className=' flex flex-col justify-center gap-6 sm:pt-0'>
                        <h1 className=' text-3xl sm:text-4xl font-bold font-[poppins]'>Name</h1>
                        <p className=' text-sm text-gray-500 tracking-wide leading-5'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eos dolore
                            ,delectus placeat maiores ipsum sed. Ratione cum sed aut aperiam nihil veniam sint! Maiores!
                            <br />
                            <br />
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, itaque! Excepturi debitis saepe libero? 
                            Optio natus molestias animi excepturi voluptas quas rem unde, dolorem repellendus tempore? Optio vero magni sequi!
                        </p>

                        
                        
                     </div>
                </div>

                
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default About