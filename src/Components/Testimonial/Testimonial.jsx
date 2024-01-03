import React from 'react'
import Slider from 'react-slick'
import avater1 from '../../assets/avater1.png';
import avater2 from '../../assets/avater2.jpg';
import avater3 from '../../assets/avater3.jpg';
import avater4 from '../../assets/avater4.jpg';


const TestimonialData = [
    {
        id:1,
        image:avater1,
        discription:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Dignissimos doloremque reiciendis nobis nostrum corrupti. Repudiandae est non aliquam dolorem adipisci!',
        name:'John Doe'
    },

    {
        id:2,
        image:avater2,
        discription:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Dignissimos doloremque reiciendis nobis nostrum corrupti. Repudiandae est non aliquam dolorem adipisci!',
        name:'John Doe'
    },

    {
        id:3,
        image:avater3,
        discription:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Dignissimos doloremque reiciendis nobis nostrum corrupti. Repudiandae est non aliquam dolorem adipisci!',
        name:'John Doe'
    },

    {
        id:4,
        image:avater4,
        discription:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Dignissimos doloremque reiciendis nobis nostrum corrupti. Repudiandae est non aliquam dolorem adipisci!',
        name:'John Doe'
    },
]

const Testimonial = () => {
    var settings = {
        dots:true,
        arrows:false,
        infinite:true,
        speed:200,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true,
        autoplayspeed:2000,
        cssEase: "linear",
        pushOnHover:true,
        pushOnFocus:true
    }
  return (
    <>
    <div className=' py-10'>
        <div className=' container'>
         {/* Header section */}
         <div className=' text-center mb-20 max-w-[400px] mx-auto'>
                <p className=' text-sm bg-clip-text bg-gradient-to-r from-primary to-secondary text-transparent '>Our Testimonial </p>
                <h1 className=' text-3xl font-bold font-[poppins]'>Testimonial</h1>
                <p className=' text-sm text-gray-400'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Eum corporis, exercitationem minus esse sed itaque officiis 
                    voluptatibus cumque sunt expedita?
                </p>
            </div>
            {/* Testimonial section */}
            <div className=' grid grid-cols-1 max-w-[600px] mx-auto gap-6'>
                <Slider {...settings}>
                    {
                        TestimonialData.map(({id,image,discription,name}) =>{
                            return(
                                <div key={id} className='my-6'>
                                    <div className=' flex flex-col justify-center items-center gap-4
                                     text-center mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative
                                     shadow-lg'>
                                        <img src={image} alt=""
                                        className=' rounded-full block mx-auto w-20 h-20 pt-5'
                                        />
                                        <p className=' text-gray-500 text-sm font-serif'>{discription}</p>
                                        <h1 className=' text-xl font-bold'>{name}</h1>
                                        <p className=' text-9xl text-black/20 font-serif -top-24 right-0 absolute'>,,</p>
                                        
                                    </div>

                                </div>
                            )
                        })}

                </Slider>
                

            </div>

    </div>
    </div>
    
    </>
  )
}

export default Testimonial