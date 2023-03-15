import React from 'react'
import Typed from 'react-typed';
import BgImage from '../Assets/bg.jpg'



const Hero = () => {


    

    return (
        <div style={{backgroundImage: `url(${BgImage})`}} className='bg-cover'>
            <div className='max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='text-[#c05252] font-bold p-2'>FLEXIBLE TARIFF PLANS</p>
                <h1 className='text-sky-400 md:text-6xl sm:text-5xl text-4xl font-bold md:py-4'>Super Sonic Speed upto 150mbps</h1>
                <div className='flex justify-center items-center'>
                    <p className='text-white md:text-4xl sm:text-3xl text-xl font-semibold py-2'>Chose our packages for</p>
                    <Typed className='text-white md:text-4xl sm:text-3xl text-xl font-semibold md:pl-2 pl-1' strings={['Realibility', 'Efficiency', 'Productivity']} typeSpeed={60} backSpeed={40} loop />
                </div>
                <p className='md:text-xl text-base font-semibold text-slate-300 px-2'>Enjoy the ultimate unwrinkled online experience, by being a part of the Broadlink family today!</p>
                <button className='bg-gradient-to-r from-red-600 to-blue-700 hover:from-pink-500 hover:to-yellow-500 shadow-xl w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-white'>Get Started</button>
            </div>

        </div>
    )
}

export default Hero
