import React from 'react'

import bgImage from '../src/assets/bg.jpg'
import { ReactTyped } from "react-typed";
import play from '../src/assets/play.svg'
import users from '../src/assets/users.svg'
import deviceapp from '../src/assets/deviceapp.svg'
import Card_en_MP from '../src/assets/Card_en_MP.svg'
import card_en_paises from '../src/assets/card_en_paises.svg'
import card_en_remote_jobs from '../src/assets/card_en_remote_jobs.svg'
import card_en_USVA from '../src/assets/card_en_USVA.svg'
import Fastest_home from '../src/assets/Fastest_home.svg'
import money_home from '../src/assets/money_home.svg'
import withdraw_funds_home from '../src/assets/withdraw_funds_home.svg'
import logo_home_1 from '../src/assets/logo-home-1.png'
import logo_home_2 from '../src/assets/logo-home-2.png'
import logo_home_3 from '../src/assets/logo-home-3.png'
import logo_home_4 from '../src/assets/logo-home-4.png'
import logo_home_5 from '../src/assets/logo-home-5.png'
import logo_home_6 from '../src/assets/logo-home-6.png'


function Home() {


  return (
    <div style={{ backgroundImage: `url(${bgImage})` }} className="bg-cover mt-4 w-full min-h-screen px-4 md:px-8">
    {/* Typed Text Section */}
    <div className='flex text-center justify-center h-40 md:h-48'>
      <ReactTyped 
        className='text-3xl md:text-5xl font-bold text-center font-syncopate mt-4 mb-0 pb-0'
        strings={[
          "GET PAID BETTER",
          "GET PAID GLOBALLY WITHDRAW LOCALLY",
        ]}
        typeSpeed={40}
        backSpeed={50}
        loop
        showCursor={false}
        style={{ 
          fontFamily: "'Syncopate', sans-serif", 
          maxWidth: "100%",
          width: "auto",
          padding: "0 20px"
        }} 
      />
    </div>
  
    {/* Description Text */}
    <div className="flex justify-center mb-8">
      <h1 className="text-sm md:text-md text-center py-2 max-w-2xl text-gray-600">
        Airtm is the most connected digital wallet in the world, offering an 
        integrated US Virtual Account for non-US citizens, direct withdrawals 
        from partners like Payoneer and access to over 500+ payment methods 
        to convert and withdraw funds to your local currency.
      </h1>
    </div>
  
    {/* Action Buttons */}
    <div className='flex flex-col md:flex-row justify-center gap-4 md:gap-2 mb-8'>
      <button className='flex items-center justify-center text-blue-500 rounded-full border text-lg md:text-xl font-Verdana px-4 h-12'>
        <img src={play} alt="" className='w-5 mx-2'/>
        How does it works?
      </button>
      <button className='flex items-center justify-center text-white font-medium rounded-full bg-blue-500 text-lg md:text-xl font-Verdana px-5 h-12'>
        <img src={users} alt="" className='w-5 mx-2'/>
        Join now
      </button>
    </div>
  
    {/* Device Images Section */}
    <div className='flex flex-col md:flex-row justify-center items-center gap-8 md:gap-4 mb-16'>
      <div className='flex flex-col justify-around items-center md:items-end gap-4'>
        <img src={Card_en_MP} className='w-full md:w-2/3'/>
        <img src={card_en_paises} className='w-full md:w-2/3'/>
      </div>
  
      <img src={deviceapp} 
        className='w-2/3 md:w-1/4'   
        style={{ 
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)",
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)"
        }}
      />
  
      <div className='flex flex-col justify-evenly items-center md:items-start gap-4'>
        <img src={card_en_USVA} className='w-full md:w-2/3'/>
        <img src={card_en_remote_jobs} className='w-full md:w-2/3'/>
      </div>
    </div>
  
    {/* Features Grid */}
    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-18 mb-16'>
      <div className='text-center md:text-left'>
        <img src={Fastest_home} className="mx-auto md:mx-0 mb-4"/>
        <h1 className='font-bold text-xl md:text-2xl mb-2'>Get paid faster</h1>
        <p className='text-gray-700 text-base md:text-lg'>Airtm's platform delivers rapid cross-border payments, allowing users to cash out earnings in under six minutes or less.</p>
      </div> 
      <div className='text-center md:text-left'>
        <img src={money_home} className="mx-auto md:mx-0 mb-4"/>
        <h1 className='font-bold text-xl md:text-2xl mb-2'>Save in fees</h1>
        <p className='text-gray-700 text-base md:text-lg'>Airtm ensures more of your earnings stay in your pocket, empowering entrepreneurs with efficient, affordable financial services.</p>
      </div> 
      <div className='text-center md:text-left'>
        <img src={withdraw_funds_home} className="mx-auto md:mx-0 mb-4"/>
        <h1 className='font-bold text-xl md:text-2xl mb-2'>Use local payment methods</h1>
        <p className='text-gray-700 text-base md:text-lg'>Unmatched versatility, supporting over 400 local payment methods and bridging multiple blockchains via USDC.</p>
      </div> 
    </div>
  
    {/* Logo Grid */}
    <div className='grid grid-cols-2 md:grid-cols-6 gap-6 md:gap-10 justify-items-center items-center px-4 md:px-8 py-8'>
      <img className='w-24 md:w-auto' src={logo_home_1} alt="Partner logo"/>
      <img className='w-24 md:w-auto' src={logo_home_2} alt="Partner logo"/>
      <img className='w-24 md:w-auto' src={logo_home_3} alt="Partner logo"/>
      <img className='w-24 md:w-auto' src={logo_home_4} alt="Partner logo"/>
      <img className='w-24 md:w-auto' src={logo_home_5} alt="Partner logo"/>
      <img className='w-24 md:w-auto' src={logo_home_6} alt="Partner logo"/>
    </div>
  </div>
  )
}

export default Home