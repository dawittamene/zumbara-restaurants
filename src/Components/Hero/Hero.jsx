import React, { useState } from 'react'
import IMG1bg from '../../assets/vector3.png';
import Food1 from '../../assets/biryani2.png';
import Food2 from '../../assets/biryani3.png';
import Food3 from '../../assets/biryani5.png';

const ImageList = [
  {
    id:1,
    image: Food1
  },

  {
    id:2,
    image: Food2
  },
  {
    id:3,
    image: Food3
  },
  
 
]

const bgImage={
  backgroundImage:`url(${IMG1bg})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgrounRepeat: "no-Repeat",
  width: "100%",
  height: "100%"
}

const Hero = () => {
  const [ImageId, setImageId] = useState(Food1)
  return (
    <>
    <div style={bgImage}
    className=' min-h-[550px] sm:min-h-[600px] bg-gray-100 dark:bg-gray-950
     dark:text-white items-center duration-200 justify-center flex'
    >
      <div className='container pb-8 sm:pb-0'>
        <div className=' grid grid-cols-1 sm:grid-cols-2'>
          {/* text content section */}

          <div className=' flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1'>
            <h1 className=' text-5xl sm:text-6xl lg:text-7xl font-bold font-[poppins]'>
              Welcome To Zumbara Restaurant
            </h1>

            <p className=' text-sm'>
              Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Eveniet iste qui libero 
              ex porro quis repudiandae. Perspiciatis exercitationem explicabo eum.
            </p>

            <div>
              <button className=' bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full hover:scale-105 duration-200'>
              Order Now</button>
            </div>
          </div>





          {/* Image section */}
          <div className=' min-h-[450px] sm:min-h-[450px] justify-center items-center flex order-1 sm:order-2 relative'>
           {/* main image */}
           <div className=' flex justify-center items-center h-[300px] sm:h-[450px] overflow-hidden'>
            <img src={ImageId} alt="Food1"
            className='w-[300] sm:w-[450] mx-auto spin ' 
            />
           </div>
              
              {/* image List */}
              <div className='flex lg:flex-col lg:top-1/3 lg:py-2 
              justify-center gap-4 absolute bottom-[0px] lg:-right-10 bg-white/30 rounded-full'>
                {
                  ImageList.map((item) => (
                    <img alt='image list'
                    key={item.id}
                    src={item.image}
                    className=' max-w-[80px] h-[80px] object-contain inline-block hover:scale-105 duration-200  '
                    onClick={
                      () =>{
                        setImageId(
                          item.id === 1 ? Food1 : item.id === 2 ? Food2 : Food3
                        );
                      }}
                    />

                  ))}
              </div>


            
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default Hero