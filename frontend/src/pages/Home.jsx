import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Hero from '../components/Main/Hero'
import About from '../components/Main/About'
import FeaturedProjects from '../components/Main/FeaturedProjects'
import Services from '../components/Main/Services'
import Review from '../components/Main/Review'

function Home() {
  return (
    <>
    <Header/>
    <Hero/>
    <FeaturedProjects/>
    <About/>
    <Services/>
    <Review/>
    <Footer/>
    </>
  )
}

export default Home