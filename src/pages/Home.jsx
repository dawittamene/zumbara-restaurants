import React from 'react'
import Hero from '../Components/Hero/Hero'
import SampleServices from '../Components/SampleServices/SampleServices'
import Banner from '../Components/Banner/Banner'
import AppStore from '../Components/AppStore/AppStore'

const Home = () => {
  return (
    <section>
      <Hero />
      <SampleServices />
      <Banner />
      <AppStore />
    </section>
  )
}

export default Home