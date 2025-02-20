import React from 'react';

function HeroSection() {
  return (
    <div className="bg-[#0A0F14] text-white min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-4">
        {/* Left: Logo + Brand */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gray-800 flex items-center justify-center rounded-full">
            <span className="text-white font-bold">a</span>
          </div>
          <span className="font-bold text-xl">availabl</span>
        </div>

        {/* Middle: Nav links (hidden on mobile) */}
        <div className="hidden md:flex space-x-6">
          <a href="#how-it-works" className="hover:text-gray-300">How it works</a>
          <a href="#why-availabl" className="hover:text-gray-300">Why availabl</a>
          <a href="#features" className="hover:text-gray-300">Features</a>
          <a href="#pricing" className="hover:text-gray-300">Pricing</a>
          <a href="#blog" className="hover:text-gray-300">Blog</a>
          <a href="#aws-status" className="hover:text-gray-300">AWS Status</a>
        </div>

        {/* Right: Sign in & CTA */}
        <div className="flex items-center space-x-4">
          <a href="#sign-in" className="hover:text-gray-300">Sign in</a>
          <button className="bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 rounded-md font-semibold">
            Book a Demo
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="flex-grow flex flex-col items-center justify-center px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-teal-200">
          Plug-and-Play AWS Monitoring 
        </h1>
        <p className="text-gray-300 max-w-2xl mt-6">
          Best-prayour customers’ experience.
        </p>
        <div className="mt-8">
          <button className="bg-gradient-to-r from-cyan-500 to-teal-500 px-6 py-3 rounded-md font-semibold">
            Book a Demo
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
