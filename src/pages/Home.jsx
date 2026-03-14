import React from 'react'
import Hero from "../components/Hero";
import CategorySection from "../components/CategorySection";
import FeaturedProducts from "../components/FeaturedProducts";
import WhyChoose from "../components/WhyChoose";
import SubscriptionHighlight from "../components/SubscriptionHighlight";
import LatestBooks from "../components/LatestBooks";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";


const Home = () => {
  return (
    <>
       <Hero />
      <CategorySection />
      <FeaturedProducts />
      <LatestBooks />
      <WhyChoose />
      <Testimonials />
      <Newsletter />

      {/* <SubscriptionHighlight /> */}

    </>
    
  )
}

export default Home