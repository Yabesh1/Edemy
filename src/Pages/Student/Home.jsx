import React from 'react'
import Navbar from '../../Components/Student/Navbar'
import Hero from '../../Components/Student/Hero'
import Companies from '../../Components/Student/Companies'
import CourseSelection from '../../Components/Student/CourseSelection'
import Testimonals from '../../Components/Student/Testimonals'
import CallToAction from '../../Components/Student/CallToAction'
import Footer from '../../Components/Student/Footer'

const Home = () => {
  return (
    <div className='flex flex-col items-center space-y-7 text-center'>
        <Hero/>
        <Companies/>
        <CourseSelection />
        <Testimonals />
        <CallToAction />
        <Footer />
    </div>
  )
}

export default Home