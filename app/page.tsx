import Link from 'next/link';
import React from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Footer from './component/Footer'

// Home component
function HomePage(){
  return (
    <div>
    <Navbar />
    <Hero />
    <Footer />
    </div>
  )
}
export default HomePage;




{/* <button className='p-2 bg bg-green-500 m-1 border-yellow-500 border-radius-4 rounded-md'>Home</button> */}