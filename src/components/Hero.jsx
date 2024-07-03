import React from 'react';
import { SpacemanCanvas } from ".";
import Position from "./Position";
import ConnectBTN from "./ConnectBTN";

const Hero = ({ scrollContainer }) => {
  return (
    <section className="parallax">
      <div className='parallax__content absolute top-[10%] sm:top-[16%] lg:top-[24%] w-full mx-auto lg:pl-[10%] lg:pr-[10%] xl:pl-[15%] xl:pr-[15%] 2xl:px-[10%] 3xl:px-[10%] flex flex-col lg:flex-row items-start z-10' style={{ zIndex: 500 }}>
        <div className="flex-1 lg:mb-0">
          <h1 className='font-medium text-white text-[40px] xs:text-[50px] sm:text-[68px] md:text-[80px] lg:text-[100px] 2xl:text-[140px] leading-[110px] 2xl:leading-[160px]'>
            Pranav Mhargude 
          </h1>
          <br/>
          <Position />
        </div>
        <div className="flex-1 flex justify-start lg:justify-end mt-4 sm:mt-14 ml-2 xs:ml-[-2vh] sm:ml-[-10vh] md:ml-[-15vh] lg:mt-10 2xl:mt-0" style={{ zIndex: 1000 }}>
          <div className='font-bold text-[20px] sm:text-[30px] md:text-[36px] 2xl:text-[46px] sm:leading-[40px] md:leading-[50px] 2xl:leading-[60px] streaky-glow max-w-sm 2xl:max-w-lg text-white text-left' style={{ zIndex: 1000 }}>
            <ConnectBTN />
          </div>
        </div>
      </div>

      {/* <img className="parallax__stars" src="./parallax/1Stars.svg" alt="" /> */}
      {/* <img className="parallax__planets" src="./parallax/2Planets.svg" alt="" /> */}
      <img className="parallax__mountain1" src="./parallax/3Mountain.svg" alt="" />
      <img className="parallax__mountain2" src="./parallax/4Mountain.svg" alt="" />
      {/* <img className="parallax__crater" src="./parallax/5Crater.svg" alt="" /> */}
      {/* <img className="parallax__sun" src="./parallax/6Sun.svg" alt="" /> */}

      <SpacemanCanvas scrollContainer={scrollContainer} />
    </section>
  );
};

export default Hero;

