import React, { useEffect, useState } from 'react';

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Identify the height of the Hero section so we know when the user has scrolled past it
      const heroHeight = document.getElementById('hero')?.offsetHeight || 0;

      // Once we've scrolled beyond the hero section, show the navbar
      if (window.scrollY >= heroHeight) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 
        transition-transform duration-300 
        ${showNavbar ? 'translate-y-0' : '-translate-y-full'}
        flex justify-center items-center h-16
        bg-black
      `}
    >
      {/* 
        Outer container with a "pill" shape and a white border around all nav items.
        Adjust padding, border, gap, etc., to match your desired design.
      */}
      <div className="flex items-center justify-between w-[80%] max-w-7xl rounded-full border border-white px-6 py-2">
        <ul className="flex items-center gap-6 text-white">
          <li className="cursor-pointer hover:opacity-80 transition-opacity">Home</li>
          <li className="cursor-pointer hover:opacity-80 transition-opacity">Team</li>
          <li className="cursor-pointer hover:opacity-80 transition-opacity">Events</li>
          <li className="cursor-pointer hover:opacity-80 transition-opacity">Hackathons</li>
          <li className="cursor-pointer hover:opacity-80 transition-opacity">Projects</li>
          <li className="cursor-pointer hover:opacity-80 transition-opacity">Leaderboard</li>
          <li className="cursor-pointer hover:opacity-80 transition-opacity">Blogs</li>
          <li className="cursor-pointer hover:opacity-80 transition-opacity">Contact</li>
        </ul>

        {/* 
          "Join Club" button with a pill shape.
          You can add a subtle neon effect or an animated green dot if you like.
        */}
        <button className="px-4 py-2 text-white rounded-full border border-white relative overflow-hidden hover:bg-white hover:text-black transition-colors">
          Join Club
          {/* Example animated green dot in the corner */}
          <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
