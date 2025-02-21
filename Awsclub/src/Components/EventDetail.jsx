import React, { useEffect } from 'react';
import './EventDetail.css'; 
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, Users, ArrowLeft } from 'lucide-react';

// Modern color palette
const colors = {
  primary: "#6366f1",
  accent: "#22d3ee", 
  dark: "#0f172a",
  card: "rgba(26, 36, 53, 0.95)"
};

// Enhanced glass morphism
const glassEffect = {
  background: "rgba(15, 23, 42, 0.8)",
  backdropFilter: "blur(12px)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
};

// Animated gradient background 
const gradientBg = {
  background: `linear-gradient(-45deg, 
    ${colors.dark}, 
    ${colors.primary}40,
    ${colors.dark}, 
    ${colors.accent}40)`,
  backgroundSize: "400% 400%",
  animation: "gradient 15s ease infinite",
};

// Card animations
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function EventDetail() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slideIn');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.scroll-animate').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="aws-gradient-bg w-screen h-screen overflow-x-hidden overflow-y-auto">
      {/* Navbar */}
      <nav style={glassEffect} className="sticky top-0 z-50 px-6 py-4">
        <div className="animate-slideIn flex justify-between items-center">
          {/* Navbar content */}
        </div>
      </nav>

      {/* Back button */}
      <div className="container mx-auto px-4 pt-6 flex flex-row items-center">
        {/* <Link to="/events" className="inline-flex items-center text-[#8ee3ef] hover:underline mb-6"> */}
          <ArrowLeft size={16} className="mr-2" />
          <p>Back to Events</p>
        {/* </Link> */}
      </div>

      {/* Hero Section */}
      <div className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="glass-card rounded-2xl p-8">
            {/* AWS Club Slogan */}
            <div className="text-center mb-12">
              <h2 className="text-[#00a4e4] text-xl font-medium mb-2">AWS Cloud Club | Adani University</h2>
              <p className="text-gray-300">Empowering Future Cloud Leaders</p>
            </div>

            <div className="relative px-4 py-12 md:py-16 mb-8">
              <div className="container mx-auto max-w-6xl">
                <div className="grid md:grid-cols-4 gap-8">
                  <div className="md:col-span-3">
                    <div className="inline-block px-3 py-1 rounded-full bg-[#00a4e4]/20 text-[#00a4e4] text-sm mb-4">
                      Past Event
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
                      AWS Cloud Innovation Workshop
                    </h1>

                    {/* Event Summary */}
                    <div className="prose prose-invert mb-8 max-w-none">
                      <div className="bg-[#1a2435]/50 p-4 sm:p-6 rounded-lg mb-6 sm:mb-8 border border-[#00a4e4]/20">
                        <h3 className="text-[#00a4e4] text-xl font-semibold mb-4">🌟 A Memorable Event at Adani University! 🌟</h3>
                        <p className="text-gray-300 leading-relaxed">
                          We recently had the privilege of hosting two incredible industry leaders: Jen Looper, Head of Academic 
                          Advocacy at AWS, and Mr. Nilesh Vaghela, AWS Community Hero and Founder of ElectroMech & CloudKida. 
                          The event brought together over 100 students passionate about cloud computing and AWS technologies.
                        </p>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h4 className="text-[#00a4e4] text-lg font-medium mb-3">Leadership Insights from Jen Looper</h4>
                          <p className="text-gray-300 leading-relaxed">
                            Jen Looper shared her inspiring life journey, highlighting the importance of AWS Leadership 
                            Principles. Her session focused on core values that drive success in the cloud computing industry:
                          </p>
                          <ul className="text-gray-300 mt-3 space-y-2 list-disc list-inside">
                            <li>Customer Obsession - Putting customers first in every decision</li>
                            <li>Ownership - Taking responsibility and thinking long-term</li>
                            <li>Invent and Simplify - Finding innovative solutions to complex problems</li>
                            <li>Dive Deep & Learn - Understanding root causes and continuously learning</li>
                            <li>Be Curious - Exploring new possibilities and staying innovative</li>
                          </ul>
                        </div>

                      </div>

                      <div className="mt-6 bg-[#1a2435]/50 p-4 rounded-lg border border-[#00a4e4]/20">
                        <p className="text-gray-300 italic">
                          We look forward to their continued mentorship and guidance as we build a thriving cloud community! ☁️🚀
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          <span className="text-[#8ee3ef] text-sm">#AWSCommunity</span>
                          <span className="text-[#8ee3ef] text-sm">#CloudComputing</span>
                          <span className="text-[#8ee3ef] text-sm">#Leadership</span>
                          <span className="text-[#8ee3ef] text-sm">#AWSAdvocacy</span>
                          <span className="text-[#8ee3ef] text-sm">#Mentorship</span>
                          <span className="text-[#8ee3ef] text-sm">#AdaniUniversity</span>
                          <span className="text-[#8ee3ef] text-sm">#Innovation</span>
                          <span className="text-[#8ee3ef] text-sm">#CloudClub</span>
                        </div>
                      </div>
                    </div>

                    {/* Event Details */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center">
                        <Calendar className="w-5 h-5 mr-3 text-[#8ee3ef]" />
                        <span className="text-gray-300">February 15, 2024</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-5 h-5 mr-3 text-[#8ee3ef]" />
                        <span className="text-gray-300">11:00 AM - 2:00 PM</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-5 h-5 mr-3 text-[#8ee3ef]" />
                        <span className="text-gray-300">Main Auditorium, Adani University</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-5 h-5 mr-3 text-[#8ee3ef]" />
                        <span className="text-gray-300">100+ Attendees</span>
                      </div>
                    </div>

                    {/* Speakers Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      <div className="glass-card p-4 rounded-lg">
                        <div className="flex items-center mb-4">
                          <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                            <img 
                              src="/speakers/jen-looper.jpg" 
                              alt="Jen Looper" 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-white">Jen Looper</h3>
                            <p className="text-sm text-gray-400">Head of Academic Advocacy, AWS</p>
                          </div>
                        </div>
                      </div>

                      <div className="glass-card p-4 rounded-lg">
                        <div className="flex items-center mb-4">
                          <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                            <img 
                              src="/speakers/nilesh-vaghela.jpg" 
                              alt="Nilesh Vaghela" 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-white">Nilesh Vaghela</h3>
                            <p className="text-sm text-gray-400">AWS Community Hero & Founder, CloudKida</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Smaller Speaker Profile */}
                  <div className="glass-card p-4 rounded-lg h-fit">
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                        <img 
                          src="https://www.jenlooper.com/jen.jpg" 
                          alt="Jen Looper" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">Jen Looper</h3>
                        <p className="text-sm text-gray-400">Head of Academic Advocacy, AWS</p>
                      </div>
                    </div>
                    <div className="flex gap-3 mt-2 justify-center">
                      <a href="https://twitter.com/jenlooper" target="_blank" rel="noopener noreferrer" 
                        className="text-gray-400 hover:text-[#8ee3ef] transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                        </svg>
                      </a>
                      <a href="https://linkedin.com/in/jenlooper" target="_blank" rel="noopener noreferrer" 
                        className="text-gray-400 hover:text-[#8ee3ef] transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79zM6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 9.94v-8.37H5.5v8.37h2.77z" clipRule="evenodd"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Event Highlights Section */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 sm:mb-6 text-white">Event Highlights</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                <div className="glass-card p-6 rounded-lg hover:scale-105 transition-all">
                  <h4 className="text-[#00a4e4] font-medium mb-2">Technical Insights</h4>
                  <p className="text-gray-300 text-sm">In-depth exploration of AWS architecture patterns and implementation strategies</p>
                </div>
                <div className="glass-card p-6 rounded-lg hover:scale-105 transition-all">
                  <h4 className="text-[#00a4e4] font-medium mb-2">Interactive Learning</h4>
                  <p className="text-gray-300 text-sm">Live demonstrations of serverless application deployment</p>
                </div>
                <div className="glass-card p-6 rounded-lg hover:scale-105 transition-all">
                  <h4 className="text-[#00a4e4] font-medium mb-2">Community Building</h4>
                  <p className="text-gray-300 text-sm">Networking sessions with AWS experts and cloud enthusiasts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Event Details */}
          <div className="lg:col-span-2 space-y-6 scroll-animate opacity-0">
            {/* Content */}
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6 scroll-animate opacity-0">
            {/* Sidebar content */}
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4 text-white">Event Gallery</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <img 
              src="/event-images/workshop1.jpg" 
              alt="Workshop Session" 
              className="rounded-lg w-full h-48 object-cover transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
            />
            <img 
              src="/event-images/workshop2.jpg" 
              alt="Q&A Session" 
              className="rounded-lg w-full h-48 object-cover transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
            />
            <img 
              src="/event-images/workshop3.jpg" 
              alt="Group Photo" 
              className="rounded-lg w-full h-48 object-cover transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
            />
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-8 bg-[#050f15a5] rounded-lg p-4 sm:p-6">
          <h3 className="text-xl font-semibold mb-4 sm:mb-6 text-white">Participant Feedback</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="p-4 bg-[#1F3043] rounded-lg">
              <p className="italic text-white mb-4">
                "An incredible learning experience! Jen's insights into AWS services were invaluable."
              </p>
              <p className="text-sm text-[#8ee3ef]">- Computer Science Student</p>
            </div>
            <div className="p-4 bg-[#1F3043] rounded-lg">
              <p className="italic text-white mb-4">
                "The hands-on serverless demo was exactly what I needed to understand cloud architecture."
              </p>
              <p className="text-sm text-[#8ee3ef]">- Engineering Student</p>
            </div>
          </div>
        </div>

       
      </div>
      
      {/* Footer */}
      <footer className="bg-[#050f15a5] py-6 sm:py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div>
              <h3 className="text-white font-bold mb-4">AWS Cloud Club</h3>
              <p className="text-gray-400 text-sm">
                A student-led community focused on cloud computing and AWS technologies at Adani University.
              </p>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                {/* <li><Link to="/" className="text-gray-400 hover:text-[#8ee3ef]">Home</Link></li>
                <li><Link to="/events" className="text-gray-400 hover:text-[#8ee3ef]">Events</Link></li>
                <li><Link to="/resources" className="text-gray-400 hover:text-[#8ee3ef]">Resources</Link></li>
                <li><Link to="/team" className="text-gray-400 hover:text-[#8ee3ef]">Team</Link></li> */}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li className="text-gray-400">Adani University, Ahmedabad</li>
                <li className="text-gray-400">aws.club@adaniuni.ac.in</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-[#8ee3ef]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#8ee3ef]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#8ee3ef]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm-1.41 15.06V8.94l5.66 3.06-5.66 3.06z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} AWS Cloud Club at Adani University. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
