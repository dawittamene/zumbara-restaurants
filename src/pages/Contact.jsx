import React from 'react'
import Footer from '../Components/Footer/Footer'
import { MdOutlineMail } from "react-icons/md";
import { SiMessenger } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";




const Contact = () => {
  return (
    <>
    <div className='py-10'>
      
        {/* Header section */}
        <div className=' text-center mb-20 max-w-[800px] mx-auto'>
            <h1 className=' text-3xl font-bold font-[poppins]'>Contact Us</h1>
            <p className=' text-sm text-gray-400'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Eum corporis, exercitationem minus esse sed itaque officiis 
                voluptatibus cumque sunt expedita?
            </p>
          </div>

        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-20 m-5">
          <div className="flex flex-col gap-2">

            <article className=" bg-gray-600 p-2 rounded-md text-center border-gray-400 hover:bg-gray-700 dark:bg-gray-950 dark:text-white">
              <MdOutlineMail className=' text-3xl items-center'/>
              <h4>Email</h4>
              <h5>dawittamene559@gmail.com</h5>
              <a href="mailto:dawittamene559@gmail.com">Send a message</a>
            </article>

            <article className="bg-gray-600 p-2 rounded-md text-center border-gray-400 hover:bg-gray-700 dark:bg-gray-950 dark:text-white">
              <SiMessenger className=' text-3xl'/>
              <h4>Messenger</h4>
              <h5>dawit tamene</h5>
              <a href="https://m.me/dawit.tcool" target='_blank'>Send a message</a>
            </article>

            <article className="bg-gray-600 p-2 rounded-md text-center border-gray-400 hover:bg-gray-700 dark:bg-gray-950 dark:text-white">
              <FaWhatsapp className=' text-3xl'/>
              <h4>WhatsApp</h4>
              <h5>+251925410470</h5>
              <a href="https://api.whatsapp.com/send?phone=+251925410470">Send a message</a>
            </article>

          </div>
        <div>
          <form className=' flex flex-col gap-4 border-dark-500 '>
            <input  type="text"className='p-4 text-white' name="name" placeholder='Your Full Name' required/>
            <input type="email"className='p-4 text-white' name='email' placeholder='Your Email' required/>
            <textarea name="message"className='p-4 text-white'  rows="7" placeholder='Your Messages' required></textarea>
            <button type='submite' className=' bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-300 py-1 sm:2 px-4 text-white text-center rounded-full'>Send Message</button>

          </form>
          </div>
        </div>
      </div>
      <Footer/>
      
      
      </>
  )
}

export default Contact