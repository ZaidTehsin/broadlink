import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import logo from '../Assets/logo-borad.png'


const Navbar = () => {

    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div  className='bg-white text-black border-b-4 shadow-xl border-sky-300 flex justify-between items-center h-24 mx-auto px-6 sm:px-8 md:px-20 md:static sm:static fixed'>
      <img className='w-1/2 sm:w-[240px] lg:w-[300px]' src={logo} alt="/" />
      <ul className='hidden md:flex '>
        <li className='p-4 md:p-2 lg:p-4 font-semibold hover:rounded-xl hover:shadow-2xl hover:text-indigo-400 ease-in-out duration-300'><Link to='/'>Home</Link></li>
        <li className='p-4 md:p-2 lg:p-4 font-semibold hover:rounded-xl hover:shadow-2xl hover:text-indigo-400 ease-in-out duration-300'><Link to='/company'>Company</Link></li>
        <li className='p-4 md:p-2 lg:p-4 font-semibold hover:rounded-xl hover:shadow-2xl hover:text-indigo-400 ease-in-out duration-300'>Resources</li>
        <li className='p-4 md:p-2 lg:p-4 font-semibold hover:rounded-xl hover:shadow-2xl hover:text-indigo-400 ease-in-out duration-300'>Plans</li>
        <li className='p-4 md:p-2 lg:p-4 font-semibold hover:rounded-xl hover:shadow-2xl hover:text-indigo-400 ease-in-out duration-300'><Link to='/contact'>Contact</Link></li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25} />}
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-900 bg-white   ease-in-out duration-500' : 'fixed left-[-100%]'}>
      <img className='w-[220px] md:m-4 mx-auto px-6 py-8 shadow-xl rounded-2xl' src={logo} alt="/" />
        <ul className='p-4 mt-6 uppercase'>
            <li className='p-4 border-b border-gray-600 text-base font-semibold hover:text-indigo-400 ease-in-out duration-300'><Link to='/'>Home</Link></li>
            <li className='p-4 border-b border-gray-600 text-base font-semibold hover:text-indigo-400 ease-in-out duration-300'><Link to='/company'>Company</Link></li>
            <li className='p-4 border-b border-gray-600 text-base font-semibold hover:text-indigo-400 ease-in-out duration-300'>Resources</li>
            <li className='p-4 border-b border-gray-600 text-base font-semibold hover:text-indigo-400 ease-in-out duration-300'>Plans</li>
            <li className='p-4 border-b border-gray-600 text-base font-semibold hover:text-indigo-400 ease-in-out duration-300'><Link to='/contact'>Contact</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
