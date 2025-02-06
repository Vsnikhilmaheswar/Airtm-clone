import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-8 md:py-12 px-4 md:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Us Column */}
          <div className="space-y-4">
            <h3 className="text-blue-400 font-semibold text-lg md:text-xl">Us</h3>
            <div className="flex flex-col space-y-2">
              <a href="#" className="hover:text-white transition-colors">About Airtm</a>
              <a href="#" className="hover:text-white transition-colors">What is USDC?</a>
            </div>

            <div className="pt-4">
              <h4 className="text-blue-400 font-semibold mb-2">Recieve and withdraw</h4>
              <div className="flex flex-col space-y-2">
                <a href="#" className="hover:text-white transition-colors">Receive payments</a>
                <a href="#" className="hover:text-white transition-colors">Receive payments from marketplaces</a>
                <a href="#" className="hover:text-white transition-colors">Withdraw funds</a>
              </div>
            </div>

            <div className="pt-4">
              <h4 className="text-blue-400 font-semibold mb-2">Personal account solutions</h4>
              <div className="flex flex-col space-y-2">
                <a href="#" className="hover:text-white transition-colors">US Virtual Account</a>
                <a href="#" className="hover:text-white transition-colors">Integration with Payoneer</a>
                <a href="#" className="hover:text-white transition-colors">Airtm.me</a>
                <a href="#" className="hover:text-white transition-colors">Convert to local currency</a>
                <a href="#" className="hover:text-white transition-colors">Make payments</a>
              </div>
            </div>
          </div>

          {/* Airners Community Column */}
          <div className="space-y-4">
            <h3 className="text-blue-400 font-semibold text-lg md:text-xl">Airners Community</h3>
            <div className="flex flex-col space-y-2">
              <a href="#" className="hover:text-white transition-colors">Discover our Community</a>
              <a href="#" className="hover:text-white transition-colors">Generate extra income</a>
              <a href="#" className="hover:text-white transition-colors">Become an Airtm cashier</a>
              <a href="#" className="hover:text-white transition-colors">Invite and win</a>
              <a href="#" className="hover:text-white transition-colors">Airtm Ambassadors</a>
              <a href="#" className="hover:text-white transition-colors">Benefits</a>
              <a href="#" className="hover:text-white transition-colors">Discord channel</a>
            </div>

            <div className="pt-4">
              <h4 className="text-blue-400 font-semibold mb-2">Terms and conditions</h4>
              <div className="flex flex-col space-y-2">
                <a href="#" className="hover:text-white transition-colors">Terms and conditions</a>
                <a href="#" className="hover:text-white transition-colors">Privacy policy</a>
                <a href="#" className="hover:text-white transition-colors">Digital rights policy</a>
                <a href="#" className="hover:text-white transition-colors">Cookie statement</a>
              </div>
            </div>
          </div>

          {/* Business Column */}
          <div className="space-y-4">
            <h3 className="text-blue-400 font-semibold text-lg md:text-xl">Business</h3>
            <div className="flex flex-col space-y-2">
              <a href="#" className="hover:text-white transition-colors">Airtm Friendly</a>
              <a href="#" className="hover:text-white transition-colors">Airtm Enabled</a>
              <a href="#" className="hover:text-white transition-colors">Airtm Optimized</a>
              <a href="#" className="hover:text-white transition-colors">API Documentation</a>
              <a href="#" className="hover:text-white transition-colors">Contact our team</a>
              <a href="#" className="hover:text-white transition-colors">Enterprise FAQ</a>
              <a href="#" className="hover:text-white transition-colors">Enterprise Terms of Service</a>
            </div>

            <div className="pt-4">
              <h4 className="text-blue-400 font-semibold mb-2">Resources</h4>
              <div className="flex flex-col space-y-2">
                <a href="#" className="hover:text-white transition-colors">Contact us</a>
                <a href="#" className="hover:text-white transition-colors">Blog</a>
                <a href="#" className="hover:text-white transition-colors">FAQs</a>
                <a href="#" className="hover:text-white transition-colors">Support</a>
              </div>
            </div>
          </div>

          {/* Payment methods Column */}
          <div className="space-y-4">
            <h3 className="text-blue-400 font-semibold text-lg md:text-xl">Payment methods for users</h3>
            <p className="text-sm md:text-base">Local and international banks</p>

        

            <div className="flex flex-col space-y-2">
              <a href="#" className="hover:text-white transition-colors">Digital wallets</a>
              <a href="#" className="hover:text-white transition-colors">Prepaid cards</a>
              <a href="#" className="hover:text-white transition-colors">Prepaid digital services</a>
              <a href="#" className="hover:text-white transition-colors">Cash</a>
            </div>

            <div className="pt-4">
              <h4 className="text-blue-400 font-semibold text-lg mb-4">Download the app</h4>
              <div className="flex flex-col space-y-3">
                <a href="#" className="w-36 md:w-40 hover:opacity-80 transition-opacity">
                  <img src="/api/placeholder/160/48" alt="Get it on Google Play" className="w-full"/>
                </a>
                <a href="#" className="w-36 md:w-40 hover:opacity-80 transition-opacity">
                  <img src="/api/placeholder/160/48" alt="Download on App Store" className="w-full"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;