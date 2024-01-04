import React from 'react'
import Hero from '../Components/Hero/Hero'
import SampleServices from '../Components/SampleServices/SampleServices'
import Banner from '../Components/Banner/Banner'
import AppStore from '../Components/AppStore/AppStore'
import Testimonial from '../Components/Testimonial/Testimonial'

const Home = () => {
  return (
    <section>
      <Hero />
      <SampleServices />
      <Banner />
      <AppStore />
      <Testimonial />
    </section>
  )
}

export default Home