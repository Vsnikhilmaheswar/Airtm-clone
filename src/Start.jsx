import React from 'react'
import Phone from '../src/assets/Step_4_en.png'
import Fastest_home from '../src/assets/Fastest_home.svg'
import money_home from '../src/assets/money_home.svg'
import withdraw_funds_home from '../src/assets/withdraw_funds_home.svg'
function Start() {
  return (
    <div>
        <div className="container mx-auto px-4">
      {/* Hero Section */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="md:col-span-2">
          <h1 className="text-3xl md:text-4xl uppercase font-semibold mb-12 md:ml-20">
            How to start
          </h1>
          
          {/* Steps */}
          <div className="space-y-8 md:ml-20">
            {/* Step 1 */}
            <div className="flex items-start space-x-6">
              <div className="w-10 h-10 flex-shrink-0 bg-[#2e893fa2] text-white text-2xl font-medium flex items-center justify-center rounded-full">
                1
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-semibold mb-2">Create your account</h2>
                <p className="text-gray-600 text-base md:text-lg">Have your official ID ready to complete verification.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start space-x-6">
              <div className="w-10 h-10 flex-shrink-0 bg-[#2e893fd4] text-white text-2xl font-medium flex items-center justify-center rounded-full">
                2
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-semibold mb-2">Add Fund</h2>
                <p className="text-gray-600 text-base md:text-lg">More than 500 ways to move your money.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start space-x-6">
              <div className="w-10 h-10 flex-shrink-0 bg-[#2e893f] text-white text-2xl font-medium flex items-center justify-center rounded-full">
                3
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-semibold mb-2">Send, withdraw or receive money</h2>
                <p className="text-gray-600 text-base md:text-lg">Move your money wherever you choose or receive fast and secure payments.</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center md:justify-start md:ml-20 mt-12">
            <button className="bg-blue-500 text-white font-bold px-12 py-3 rounded-full text-lg md:text-xl hover:bg-blue-600 transition-colors">
              Join now!
            </button>
          </div>
        </div>

        {/* Phone Image */}
        <div className="hidden md:block">
          <img 
            src={Phone}
            alt="Phone mockup"
            className="w-1/2 mx-auto"
          />
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 px-4 md:px-8">
        {/* Feature 1 */}
        <div className="text-center md:text-left">
          <img 
            src="/api/placeholder/64/64"
            alt="Security"
            className="mx-auto md:mx-0 mb-4"
          />
          <h2 className="font-bold text-xl md:text-2xl mb-3">High level of security</h2>
          <p className="text-gray-700 text-base md:text-lg">
            Your digital dollars are supported by USDC and safeguarded by regulated entities.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="text-center md:text-left">
          <img 
            src={Fastest_home}
            alt="Speed"
            className="mx-auto md:mx-0 mb-4"
          />
          <h2 className="font-bold text-xl md:text-2xl mb-3">High level of security</h2>
          <p className="text-gray-700 text-base md:text-lg">
            Move your money in minutes with our cashier network, 600x faster than other digital wallets.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="text-center md:text-left">
          <img 
            src="/api/placeholder/64/64"
            alt="Global"
            className="mx-auto md:mx-0 mb-4"
          />
          <h2 className="font-bold text-xl md:text-2xl mb-3">Connected globally</h2>
          <p className="text-gray-700 text-base md:text-lg">
            The only digital dollar account with over 500 ways to move your money.
          </p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Start