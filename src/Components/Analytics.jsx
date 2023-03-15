import React from 'react'
import Pc2 from '../Assets/pc2.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Pc2} alt="/" />
        <div className='flex flex-col justify-center'>
          <p className='text-[#9a2f2f] font-bold'>BROADBAND SPEED LIKE NEVER BEFORE</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Your Bandwith Analytics Centrally</h1>
          <p className=''>Broadlink broadband focuses on the (FTTH) Fiber To The Home (GPON) technology which in turn grants the user with Hypersonic Meteoric speeds with an efficacious combination of stability and consistency.</p>
          <button className='bg-gradient-to-r from-red-600 to-blue-700 hover:from-pink-500 hover:to-yellow-500 shadow-xl w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 px-6 py-3 text-white'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Analytics
