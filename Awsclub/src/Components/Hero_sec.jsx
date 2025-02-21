import React from 'react';
import { Parallax } from 'react-scroll-parallax';
// import * as THREE from 'three';
// window.THREE = THREE;

function Hero_sec() {
  return (
    <section className="relative w-full h-screen">
      <Parallax translateY={[-32, 32]}>
        <div
          className="w-full h-screen bg-cover bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://assets-global.website-files.com/6534e2876a9176ae6b44f345/653e549bdeea6f44f706a6aa_hero%20imgv3-p-2000.webp')",
            zIndex: -10,
          }}
        />
      </Parallax>

      <img
        src="img1.png"
        alt="Decoration PNG 1"
        className="absolute top-5 left-5 w-24 md:w-36"
      />
      <img
        src="img2.png"
        alt="Decoration PNG 2"
        className="absolute top-5 right-5 w-24 md:w-36"
      />

      <div className="absolute inset-0 flex flex-col gap-3 items-center justify-center px-6 z-10">
      <p className="text-4xl md:text-3xl font-bold bg-gradient-to-r from-cyan-200 to-blue-400 text-transparent bg-clip-text">
          Adani University
        </p>
        <p className='text-white text-2xl'>X</p>
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-cyan-200 to-blue-400 text-transparent bg-clip-text text-center px-4">
  AWS Cloud Clubs
</h1>

        <p className="text-white text-lg md:text-xl font-medium text-center leading-relaxed max-w-3xl drop-shadow-md">
          <span className="text-gray-300">
            Empowering Innovation and Elevating Cloud Excellence
          </span>
        </p>
      </div>
    </section>
  );
}

export default Hero_sec;
