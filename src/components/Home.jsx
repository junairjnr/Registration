import React from 'react'
import Navbar from './Navbar'
import welcome from '../Img/new wel.png'

const Home = () => {
  return (
    <>
      <Navbar />
      <div className='bg-indigo-200 w-full h-screen'>
      <img src={welcome} className="w-screen object-cover cursor-pointer items-center" alt="welcome" />
      </div>
    </>
  )
}

export default Home
