import React from 'react';
import appStore from '../../assets/app_store.png';
import PlatStore from '../../assets/play_store.png';
import Gif from '../../assets/mobile_bike.gif';

const AppStore = () => {
  return (
    <>
    <div className='bg-gray-100 dark:bg-gray-800 py-14'>
      <div className=' container'>
        <div className=' grid grid-cols-1 sm:grid-cols-2 gap-4 items-center'>
          <div className=' space-y-6 max-w-xl mx-auto'>
            <div>
            <h1 className=' text-2xl text-center dark:text-gray-400
             text-gray-700 sm:text-4xl sm:text-left font-[poppins] font-semibold'>
              Foodly Is Available For Android And Ios</h1>
          </div>
          <div className=' flex flex-wrap justify-center sm:justify-center items-center'>
            <a href="/">
              <img src={PlatStore} alt="PlatStore" 
              className=' max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'/>
            </a>

            <a href="/">
              <img src={appStore} alt="PlatStore" 
              className=' max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'/>
            </a>
          </div>
          </div>
          <div>
            <img src={Gif} alt="gif" className='
            max-w-300px mx-auto' />
          </div>

          



        </div>
      </div>
    </div>

    </>
  )
}

export default AppStore