import React from "react";
import coffee from "./../../assets/coffee.png";

const Hero = () => {
  return (
    <section className="bg-[#F8D4B4] w-[95%] mx-auto rounded-4xl py-8 px-3 md:px-0">
      <div className="container mx-auto md:flex items-center sm:px-2 lg:px-2 xl:px-0 md:px-5">
        <div className="md:w-6/12 flex flex-col gap-4">
          <p className="uppercase text-[#937455] tracking-[8px]">Cafe</p>
          <h1 className="xl:text-7xl lg:text-5xl md:text-3xl text-2xl  font-bold w-5/6">
            Hommade Coffe with Amazing Vibes
          </h1>
          <p className="md:w-4/6">Variations of the drink involve the use of cream instead of milk, using non-dairy milk substitutes.</p>
          <button className="bg-[#191718] rounded-4xl text-white md:px-8 md:py-3 py-3 xl:w-2/8 px-8 lg:w-3/8 md:w-2/4 max-w-max md:text-xl text-[14px]">Buy now</button>
        </div>
        <img src={coffee} alt="" className="md:w-6/12" />
      </div>
    </section>
  );
};

export default Hero;
