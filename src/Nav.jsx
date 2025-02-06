import React, { useState } from 'react'
import { use } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { IoChevronDownOutline } from "react-icons/io5";
import {AiOutlineClose} from 'react-icons/ai'
import { IoMenu } from "react-icons/io5";
import Logo from '../src/assets/logo.svg'
function Nav() {
  const[nav, setNav] = useState(false)
  const handleNav=()=>{
    setNav(!nav)
  }
  return (
    <nav className="relative">
    {/* Top black bar */}
    <div className="flex h-8 bg-black">
      <div className="flex w-full justify-end items-center"> 
        <div className="flex border-s-2 h-full border-e-2 border-white items-center">
          <h4 className="text-white text-sm px-4 md:px-14 text-medium">About Airtm</h4>  
        </div>
        <div>  
          <h4 className="text-white text-sm px-3 md:px-6 font-medium">EN</h4>   
        </div>   
      </div>
    </div>

    {/* Main navigation */}
    <div className="h-24 flex items-center bg-white px-4 md:px-8">
      <img 
        className="filter brightness-100 w-32 md:w-40 h-8 md:ms-20" 
        src={Logo} 
        alt="Logo"
      />
      
      {/* Desktop Menu Items */}
      <div className="hidden lg:flex h-full">
        <ul className="flex gap-3 items-center">
          <div className="h-full flex items-center hover:border-b-2 hover:border-b-blue-500 hover:text-blue-500">
            <li className="font-medium px-2">Personal</li>
          </div>
          <div className="h-full flex items-center hover:border-b-2 hover:border-b-blue-500 hover:text-blue-500"> 
            <li className="font-medium px-2">Enterprise</li>
          </div>
        </ul>
      </div>

      {/* Desktop CTA Buttons */}
      <div className="hidden lg:flex w-full justify-end items-center gap-3 me-18">
        <a className="font-semibold text-base hover:text-blue-500" href="/">Log in</a>
        <button className="bg-blue-500 rounded-full px-6 h-10 text-white font-medium hover:bg-blue-600">
          Join Now
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="flex lg:hidden ml-auto cursor-pointer" onClick={handleNav}>
        {!nav ? <IoMenu size={32}/> : <AiOutlineClose size={32}/>}
      </div>
    </div>

    {/* Mobile Menu */}
    {nav && (
      <div className="lg:hidden absolute top-32 left-0 right-0 bg-white shadow-lg z-50">
        <div className="flex flex-col px-4 py-4 space-y-4">
          <a href="/" className="font-medium text-gray-800 hover:text-blue-500 py-2">Personal</a>
          <a href="/" className="font-medium text-gray-800 hover:text-blue-500 py-2">Enterprise</a>
          <a href="/" className="font-medium text-gray-800 hover:text-blue-500 py-2">Log in</a>
          <button className="bg-blue-500 rounded-full py-2 text-white font-medium hover:bg-blue-600">
            Join Now
          </button>
        </div>
      </div>
    )}
  </nav>
  )
}

export default Nav