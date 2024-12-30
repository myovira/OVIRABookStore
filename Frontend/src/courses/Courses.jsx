import React from 'react'
import Navbar from '../component/Navbar'
import Course from '../component/Course'
import Footer from '../component/Footer'



const courses = () => {

//console.log(list)

  return (
    <>
    <Navbar />
    <div className='min-h-screen'>
    <Course />
    </div>
     <Footer />
    
    </>
   
  )
}

export default courses
