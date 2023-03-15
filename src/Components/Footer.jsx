import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from 'react-icons/fa'
import logo from '../Assets/logo-borad2.png'


const Footer = () => {
    return (
        <div className='max-w-[1280px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8'>
            <div>
             <img className='w-1/2 sm:w-[240px] lg:w-[300px] mx-auto lg:mx-0' src={logo} alt="/" />
                <p className='py-4 text-slate-200 text-center md:text-left lg:w-[350px]'>We provide individuals and organizations access to the internet and other related services. An ISP has the equipment and the telecommunication line access required to have a point of presence on the internet for the geographic area served.</p>
                <div className='flex justify-between md:w-[75%] my-6'>
                    <FaFacebookSquare size={30} className='bg-slate-400 rounded-md shadow-md hover:bg-blue-400 ease-in-out duration-300'/>
                    <FaInstagram size={30} className='bg-slate-400 rounded-md shadow-md hover:bg-pink-400 ease-in-out duration-300'/>
                    <FaTwitterSquare size={30} className='bg-slate-400 rounded-md shadow-md hover:bg-sky-300 ease-in-out duration-300'/>
                    <FaGithubSquare size={30} className='bg-slate-400 rounded-md shadow-md hover:bg-slate-300 ease-in-out duration-300'/>
                    <FaDribbbleSquare size={30} className='bg-slate-400 rounded-md shadow-md hover:bg-yellow-400 ease-in-out duration-300'/>
                </div>
            </div>
            <div className='lg:col-span-2 flex justify-between px-2 mt-6 text-slate-200'>
                <div>
                    <h6 className='font-medium mb-2'>Solutions</h6>
                    <ul>
                        <li className='py-2 text-sm text-slate-400 hover:text-slate-200 ease-in-out duration-300'>Analytics</li>
                        <li className='py-2 text-sm text-slate-400 hover:text-slate-200 ease-in-out duration-300'>Marketing</li>
                        <li className='py-2 text-sm text-slate-400 hover:text-slate-200 ease-in-out duration-300'>Commerce</li>
                        <li className='py-2 text-sm text-slate-400 hover:text-slate-200 ease-in-out duration-300'>Insights</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium mb-2'>Support</h6>
                    <ul>
                        <li className='py-2 text-sm text-slate-400 hover:text-slate-200 ease-in-out duration-300'>Pricing</li>
                        <li className='py-2 text-sm text-slate-400 hover:text-slate-200 ease-in-out duration-300'>Documentation</li>
                        <li className='py-2 text-sm text-slate-400 hover:text-slate-200 ease-in-out duration-300'>Guides</li>
                        <li className='py-2 text-sm text-slate-400 hover:text-slate-200 ease-in-out duration-300'>API Status</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium mb-2'>Company</h6>
                    <ul>
                        <li className='py-2 text-sm text-slate-400 hover:text-slate-200 ease-in-out duration-300'>About</li>
                        <li className='py-2 text-sm text-slate-400 hover:text-slate-200 ease-in-out duration-300'>Blog</li>
                        <li className='py-2 text-sm text-slate-400 hover:text-slate-200 ease-in-out duration-300'>Jobs</li>
                        <li className='py-2 text-sm text-slate-400 hover:text-slate-200 ease-in-out duration-300'>Press</li>
                        <li className='py-2 text-sm text-slate-400 hover:text-slate-200 ease-in-out duration-300'>Careers</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium mb-2'>Legal</h6>
                    <ul>
                        <li className='py-2 text-sm text-slate-400 hover:text-slate-200 ease-in-out duration-300'>Claim</li>
                        <li className='py-2 text-sm text-slate-400 hover:text-slate-200 ease-in-out duration-300'>Policy</li>
                        <li className='py-2 text-sm text-slate-400 hover:text-slate-200 ease-in-out duration-300'>Terms</li>
                    </ul>
                </div>

            </div>
            <p className='text-white w-full text-center lg:col-span-3 mx-auto text-sm'>Copyright 2022 -<span className='text-indigo-500 font-bold text-sm hover:text-slate-100 ease-in-out duration-500 cursor-pointer'><a href='https://www.facebook.com/zaidtehsin'> ZAID TEHSIN</a> </span></p>
        </div>
    )
}

export default Footer
