import React from 'react'

const Newsletter = () => {
    return (
        <div className='w-full py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2 my-4'>
                    <h1 className='text-slate-200 md:text-4xl sm:text-3xl text-xl font-bold py-2'>Want latest details on our upcoming products?</h1>
                    <p className='text-slate-400'>Sign up to our newsletter and stay up to date.</p>
                </div>
                <div className='my-4'>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                        <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder='Enter Email' />
                        <button className='bg-gradient-to-r from-red-600 to-blue-700 hover:from-pink-500 hover:to-yellow-500 shadow-xl w-[200px] rounded-md font-medium ml-4 my-6 px-6 py-3 text-white'>Notify Me</button>
                    </div>
                    <p className='text-slate-200'>We care about the protection of our data. Read our <span className='text-[#9a2f2f]' >Privacy Policy.</span></p>
                </div>
            </div>

        </div>
    )
}

export default Newsletter
