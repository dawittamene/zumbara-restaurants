import React from 'react'

import Img1 from '../../assets/biryani2.png'



const ServicesData = [
    {
        id:1,
        image:Img1,
        name:'Biryani',
        discriptions:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elitEum corporis, exercitationem minus esse sed itaque officiis voluptatibus cumque sunt expedita'
    },

    {
        id:2,
        image:Img1,
        name:'Biryani',
        discriptions:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elitEum corporis, exercitationem minus esse sed itaque officiis voluptatibus cumque sunt expedita'
    },

    {
        id:3,
        image:Img1,
        name:'Biryani',
        discriptions:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elitEum corporis, exercitationem minus esse sed itaque officiis voluptatibus cumque sunt expedita'
    },
]




const SampleServices = () => {
  return (
    <>
    <div className=' py-10'>
        <div className=' container'>
            {/* Header section */}
            <div className=' text-center mb-20 max-w-[400px] mx-auto'>
                <p className=' text-sm bg-clip-text bg-gradient-to-r from-primary to-secondary text-transparent '>Our Services</p>
                <h1 className=' text-3xl font-bold font-[poppins]'>Services</h1>
                <p className=' text-sm text-gray-400'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Eum corporis, exercitationem minus esse sed itaque officiis 
                    voluptatibus cumque sunt expedita?
                </p>
            </div>
            {/* cards section */}
            <div>
                <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center'>
                    {
                        ServicesData.map(({id,image,name,discriptions})=>{
                            return (
                            <div
                            data-aos="zoom-out"
                            data-aos-duration="300"
                            data-aos-once="true"
                            key={id} className=' max-w-[300px] group rounded-2xl bg-white
                             dark:bg-gray-800 hover:bg-primary hover:text-white duration-300 p-4 cursor-pointer shadow-xl'>
                                <div className='h-[100px]'>
                                    <img src={image} alt="" 
                                    className=' max-w-[200px] mx-auto block transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300'
                                    />
                                </div>
                                <div>
                                    <h1 className='text-xl font-[poppins] font-bold p-4 text-center'>{name}</h1>
                                    <p className=' text-gray-500 text-sm line-clamp-2 group-hover:text-white'>{discriptions}</p>

                                </div>
                            </div>
                        )})
                    }
                </div>
            </div>

        </div>
    </div>

    </>
  )
}

export default SampleServices