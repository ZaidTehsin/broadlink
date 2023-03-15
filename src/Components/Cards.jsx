import React from 'react'
import Image1 from '../Assets/image1.png'
import Image2 from '../Assets/image2.png'
import Image3 from '../Assets/image3.png'
import { FaWifi, FaPhone, FaTools, FaHeadset } from 'react-icons/fa';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import { MdFiberSmartRecord } from 'react-icons/md';


const Cards = () => {
    return (
        <div className='w-full bg-white border-y-4 border-indigo-500'>
            <div className='w-full py-10 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl'>
                <div class="relative flex py-5 items-center mb-10">
                    <div class="flex-grow border-t border-gray-400"></div>
                    <span class="flex-shrink mx-4 md:text-3xl sm:text-2xl text-xl font-bold py-2 text-center">Discover Our Broadband Packages</span>
                    <div class="flex-grow border-t border-gray-400"></div>
                </div>
                <div class="max-w-5xl mx-auto px-8">
                    <p class="text-lg md:text-xl mb-6 leading-relaxed">
                        Looking for a reliable broadband connection that won't let you down? Our broadband packages have got you covered. Whether you're streaming your favorite shows, working from home, or gaming online, our broadband packages offer lightning-fast speeds and unbeatable reliability.
                    </p>
                    <p class="text-lg md:text-xl mb-6 leading-relaxed">
                        Choose from a range of packages tailored to suit your needs, from basic plans for light internet users to high-speed packages for heavy users. With 24/7 customer support and a range of additional features, such as unlimited data and free installation, our broadband packages are the perfect choice for anyone looking for a fast, reliable internet connection.
                    </p>

                </div>
            </div>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 px-4 py-10'>
                <div className='bg-gradient-to-r from-sky-500 to-indigo-300 w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem]' src={Image1} alt="/" />
                    <h2 className='text-white text-2xl font-bold text-center py-8'>Starter Plan</h2>
                    <p className='text-center text-4xl font-bold'>2500rs/mo</p>
                    <div className='text-left font-medium mt-8'>
                        <p className='py-2 border-b mx-8 font-semibold'><FaWifi size={18} className=' pb-1 inline-block mr-2 text-white' />
                            2000 GB High-Speed Data</p>
                        <p className='py-2 border-b mx-8 font-semibold'><FaPhone size={18} className=' pb-1 inline-block mr-2 text-white' />
                            Unlimited Local & STD Calls</p>
                        <p className='py-2 border-b mx-8 font-semibold'><FaTools size={18} className=' pb-1 inline-block mr-2 text-white' />
                            Free Installation & Router</p>
                        <p className='py-2 border-b mx-8 font-semibold'><FaHeadset size={18} className=' pb-1 inline-block mr-2 text-white' />
                            24x7 Customer Support</p>
                        <p className='py-2 border-b mx-8 font-semibold'><RiMoneyDollarCircleFill size={18} className=' pb-1 inline-block mr-2 text-white' />
                            3 Months Subscription Free</p>
                        <p className='py-2 border-b mx-8 font-semibold'>
                            <MdFiberSmartRecord size={18} className=' pb-1 inline-block mr-2 text-white' />
                            Fiber Optic Technology
                        </p>
                    </div>
                    <button className='bg-blue-600 hover:bg-sky-200 ease-in-out duration-500 shadow-xl hover:text-black w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-white'>Start Trial</button>
                    <p className='text-center text-gray-200 text-sm mt-4'>
                        No credit card required. Cancel anytime.
                    </p>
                </div>




                <div className='bg-gradient-to-r from-red-600 to-orange-300 w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem]' src={Image2} alt="/" />
                    <h2 className='text-white text-2xl font-bold text-center py-8'>Advanced Plan</h2>
                    <p className='text-center text-4xl font-bold'>5000rs/mo</p>
                    <div className='text-left font-medium mt-8'>
                        <p className='py-2 border-b mx-8 font-semibold'><FaWifi size={18} className=' pb-1 inline-block mr-2 text-white' />
                            6000 GB High-Speed Data</p>
                        <p className='py-2 border-b mx-8 font-semibold'><FaPhone size={18} className=' pb-1 inline-block mr-2 text-white' />
                            Unlimited Local, STD & ISD Calls</p>
                        <p className='py-2 border-b mx-8 font-semibold'><FaTools size={18} className=' pb-1 inline-block mr-2 text-white' />
                            Free Installation & Router</p>
                        <p className='py-2 border-b mx-8 font-semibold'><FaHeadset size={18} className=' pb-1 inline-block mr-2 text-white' />
                            Priority 24x7 Customer Support</p>
                        <p className='py-2 border-b mx-8 font-semibold'><RiMoneyDollarCircleFill size={18} className=' pb-1 inline-block mr-2 text-white' />
                            6 Months Subscription Free</p>
                        <p className='py-2 border-b mx-8 font-semibold'>
                            <MdFiberSmartRecord size={18} className=' pb-1 inline-block mr-2 text-white' />
                            Ultra-Fast Fiber Optic Technology
                        </p>

                    </div>
                    <button className='bg-blue-600 hover:bg-sky-200 ease-in-out duration-500 shadow-xl hover:text-black w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-white'>Start Trial</button>
                    <p className='text-center text-gray-200 text-sm mt-4'>
                        No credit card required. Cancel anytime.
                    </p>
                </div>
                <div className='bg-gradient-to-r from-indigo-500 to-red-300 w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem]' src={Image3} alt="/" />
                    <h2 className='text-white text-2xl font-bold text-center py-8'>Pro Plan</h2>
                    <p className='text-center text-4xl font-bold'>9500rs/mo</p>
                    <div className='text-left font-medium mt-8'>
                        <p className='py-2 border-b mx-8 font-semibold'><FaWifi size={18} className=' pb-1 inline-block mr-2 text-white' />
                            Unlimited High-Speed Data</p>
                        <p className='py-2 border-b mx-8 font-semibold'><FaPhone size={18} className=' pb-1 inline-block mr-2 text-white' />
                            Unlimited Local, STD & ISD Calls</p>
                        <p className='py-2 border-b mx-8 font-semibold'><FaTools size={18} className=' pb-1 inline-block mr-2 text-white' />
                            Free Premium Router & Installation</p>
                        <p className='py-2 border-b mx-8 font-semibold'><FaHeadset size={18} className=' pb-1 inline-block mr-2 text-white' />
                            Priority 24x7 Customer Support</p>
                        <p className='py-2 border-b mx-8 font-semibold'><RiMoneyDollarCircleFill size={18} className=' pb-1 inline-block mr-2 text-white' />
                            12 Months Subscription Free</p>
                        <p className='py-2 border-b mx-8 font-semibold'>
                            <MdFiberSmartRecord size={18} className=' pb-1 inline-block mr-2 text-white' />
                            Ultra-Fast Fiber Optic Technology
                        </p>

                    </div>
                    <button className='bg-blue-600 hover:bg-sky-200 ease-in-out duration-500 shadow-xl hover:text-black w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-white'>Start Trial</button>
                    <p className='text-center text-gray-200 text-sm mt-4'>
                        No credit card required. Cancel anytime.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Cards
