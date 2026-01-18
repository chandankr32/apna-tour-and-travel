
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const whatsappUrl = "https://wa.me/918709152518?text=Hi! I'd like to book a car with Apna Tour & Travel.";

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#f2eae8] bg-[#fbf9f8]/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#EA2831]/10 rounded-full flex items-center justify-center text-[#EA2831]">
              <span className="material-symbols-outlined text-3xl">local_taxi</span>
            </div>
            <span className="text-xl font-bold tracking-tight">Apna Tour & Travel</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a className="text-sm font-medium hover:text-[#EA2831] transition-colors" href="#services">Services</a>
            <a className="text-sm font-medium hover:text-[#EA2831] transition-colors" href="#testimonials">Reviews</a>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#EA2831] hover:bg-[#c91d24] text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Book Now
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#1a110f]">
              <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 p-4 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          <a className="text-sm font-medium py-2" href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
          <a className="text-sm font-medium py-2" href="#testimonials" onClick={() => setIsMenuOpen(false)}>Reviews</a>
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#EA2831] text-white px-5 py-3 rounded-lg text-sm font-bold w-full text-center"
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
