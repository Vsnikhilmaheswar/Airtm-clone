import React from "react";
import card1 from "../src/assets/Slider-home-4.webp";
import card2 from "../src/assets/Slider-home-3.webp";
import card3 from "../src/assets/Slider-home-5.webp";

function Cards() {
  return (
<div className="flex flex-col md:flex-row justify-center gap-6 md:gap-10 mt-20 mb-20 px-4">
  <div className="h-auto w-full md:w-[335px] bg-no-repeat rounded-xl">
    <img src={card1} className="w-full h-auto" alt="Account in USDC" />
    <div className="relative bottom-[45%] left-5 w-auto px-2">
      <h1 className="font-semibold text-white text-xl">
        Your Account in USDC
      </h1>
      <p className="text-white pt-2 text-start">
        Add or withdraw funds to your account with bank transfers,
        e-wallets, cryptocurrencies and multiple global methods.
      </p>
    </div>
  </div>

  <div className="h-auto w-full md:w-[335px] bg-no-repeat rounded-xl">
    <img src={card2} className="w-full h-auto" alt="Payoneer connection" />
    <div className="relative bottom-[45%] left-5 w-auto px-2">
      <h1 className="font-semibold text-white text-xl">
        Direct Connection from payoneer
      </h1>
      <p className="text-white pt-2 text-start">
        Add or withdraw funds to your account with bank transfers,
        e-wallets, cryptocurrencies and multiple global methods.
      </p>
    </div>
  </div>

  <div className="h-auto w-full md:w-[335px] bg-no-repeat rounded-xl">
    <img src={card3} className="w-full h-auto" alt="Community" />
    <div className="relative bottom-[45%] left-5 w-auto px-2">
      <h1 className="font-semibold text-white text-xl">
        Community
      </h1>
      <p className="text-white pt-2 text-start">
        Add or withdraw funds to your account with bank transfers,
        e-wallets, cryptocurrencies and multiple global methods.
      </p>
    </div>
  </div>
</div>
  );
}

export default Cards;
