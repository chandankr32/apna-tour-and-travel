
import React from 'react';
import Navbar from './components/Navbar';
import BookingForm from './components/BookingForm';
import AIChatBot from './components/AIChatBot';
import WhatsAppPopup from './components/WhatsAppPopup';
import { FLEET, FEATURES, TESTIMONIALS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background-light font-display text-[#1a110f]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full pt-12 pb-20 lg:pt-20 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-6 flex flex-col gap-6 relative z-10">
            <div className="flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 w-fit">
                <span className="material-symbols-outlined text-[#EA2831] text-sm">verified</span>
                <span className="text-xs font-bold text-[#EA2831] uppercase tracking-wider">Trusted by 10k+ Travelers</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-[#1a110f]">
                Travel with Trust: Experienced Drivers at <span className="text-[#EA2831] whitespace-nowrap">₹1000/Day</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-lg">
                Reliable car rentals and travel agency service in Ranchi. Enjoy a safe journey with our verified professionals.
              </p>
            </div>
            <BookingForm />
          </div>

          <div className="lg:col-span-6 relative h-full min-h-[400px] lg:min-h-[600px] w-full">
            <div className="absolute top-10 right-10 w-3/4 h-3/4 bg-orange-100 rounded-[3rem] -z-10 rotate-3 transform"></div>
            <div className="h-full w-full rounded-3xl overflow-hidden shadow-2xl relative group bg-gray-100">
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
              <div className="absolute bottom-6 left-6 z-20 text-white">
                <p className="font-bold text-lg">Ranchi's Top Rated Service</p>
                <div className="flex items-center gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-sm">star</span>
                  ))}
                  <span className="text-white text-sm ml-2 font-medium">5.0 (200+ Reviews)</span>
                </div>
              </div>
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBwOyALs18WJE49IYB-JiyqK2FscW55RWB5wTgyw_VOzse0RJz3VlL6xOA_ynU6dPa4DRMICYJBKc2MnP42ndycbH-AEJd0fYUE1aPPgwDjLs_5_UNe9EMqIaCBDI0YxBtmWNIIO0kWa8-eG4OXYMWqRYd97AYr6hG80OKb0d2uHeyEh7dCKh5ZY4cZYa2fvjK5XtZXe4Ei75qR9hy3JKt4GjL8wnLT-AnB3g9oW0ndq0wdX9h-ypzbQDljqsg0LrhkGcfn0P-MKAl" 
                alt="Friendly Driver" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce-slow hidden md:flex">
              <div className="bg-green-100 p-2 rounded-full text-green-600">
                <span className="material-symbols-outlined">verified_user</span>
              </div>
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase">Safety First</p>
                <p className="text-sm font-bold text-[#1a110f]">Sanitized Vehicles</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="services" className="py-20 bg-[#F9F7F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-[#1a110f] mb-3">Why Choose Apna Travels?</h2>
              <p className="text-gray-600">We prioritize safety, affordability, and reliability for every journey across Jharkhand.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {FEATURES.map((feature) => (
              <div key={feature.id} className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 group">
                <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-deep-teal transition-colors duration-300">
                  <span className="material-symbols-outlined text-deep-teal text-3xl group-hover:text-white transition-colors">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#1a110f]">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section id="fleet" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1a110f] mb-12 text-center">Our Premium Fleet</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {FLEET.map((car) => (
              <div key={car.id} className="group rounded-3xl overflow-hidden border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-2xl transition-all duration-300">
                <div className="h-56 overflow-hidden bg-gray-200 relative">
                  {car.badge && (
                    <div className={`absolute top-4 right-4 backdrop-blur px-3 py-1 rounded-full text-xs font-bold shadow-sm z-10 ${car.badge === 'Premium Choice' ? 'bg-[#EA2831] text-white' : 'bg-white/90 text-[#1a110f]'}`}>
                      {car.badge}
                    </div>
                  )}
                  <img 
                    src={car.imageUrl} 
                    alt={car.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-[#1a110f]">{car.name}</h3>
                      <p className="text-sm text-gray-500">{car.type}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-400 font-medium">Starting at</p>
                      <p className="text-[#EA2831] font-bold text-lg">₹{car.pricePerKm}/km</p>
                    </div>
                  </div>
                  <ul className="flex gap-4 mb-6 text-sm text-gray-500 border-t border-gray-100 pt-4">
                    <li className="flex items-center gap-1"><span className="material-symbols-outlined text-base">person</span> {car.capacity}</li>
                    <li className="flex items-center gap-1"><span className="material-symbols-outlined text-base">ac_unit</span> AC</li>
                    {car.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-base">{f === 'Music' ? 'mic' : 'luggage'}</span> {f}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full py-3 rounded-xl border border-[#EA2831] text-[#EA2831] font-bold hover:bg-[#EA2831] hover:text-white transition-all transform active:scale-95">
                    Book This Car
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-[#F9F7F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1a110f] mb-3">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Don't just take our word for it. Here's what travelers have to say about their experience with Apna Tour & Travel.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm relative">
                <div className="absolute -top-4 left-8 w-10 h-10 bg-[#EA2831] text-white flex items-center justify-center rounded-full shadow-lg">
                  <span className="material-symbols-outlined text-lg">format_quote</span>
                </div>
                <div className="flex items-center gap-1 text-yellow-400 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-sm">star</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-8 italic leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-[#EA2831] font-bold text-lg">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-bold text-sm text-[#1a110f]">{t.author}</p>
                    <p className="text-xs text-gray-400">{t.trip}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a110f] text-white pt-20 pb-10 rounded-t-[4rem] mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#EA2831] rounded-2xl flex items-center justify-center text-white">
                  <span className="material-symbols-outlined text-3xl">local_taxi</span>
                </div>
                <span className="text-2xl font-bold tracking-tight">Apna Tour & Travel</span>
              </div>
              <p className="text-gray-400 text-lg mb-8 max-w-sm">
                Your trusted partner for safe, reliable, and affordable journeys in Ranchi and beyond. Book your ride today.
              </p>
              <div className="flex gap-4">
                {['FB', 'IG', 'TW'].map(social => (
                  <a key={social} className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#EA2831] transition-all hover:scale-110" href="#">
                    <span className="text-xs font-bold">{social}</span>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4">
                {['About Us', 'Our Fleet', 'Pricing', 'Contact Support', 'Terms & Conditions'].map(link => (
                  <li key={link}><a className="text-gray-400 hover:text-white transition-colors" href="#">{link}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6">Visit Us</h4>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-[#EA2831] mt-1">location_on</span>
                  <div>
                    <p className="text-gray-300">Roshpa Tower, 4th Floor,<br/>Main Road, Ranchi 834001</p>
                    <a className="inline-flex items-center gap-2 mt-4 text-xs font-bold text-[#EA2831] hover:text-white transition-colors uppercase tracking-wide border border-[#EA2831]/30 hover:bg-[#EA2831]/10 px-4 py-2 rounded-full" href="https://www.google.com/maps/search/?api=1&query=Roshpa+Tower,+4th+Floor,+Main+Road,+Ranchi+834001" target="_blank">
                      View Location
                      <span className="material-symbols-outlined text-sm">open_in_new</span>
                    </a>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <span className="material-symbols-outlined text-[#EA2831]">phone_in_talk</span>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Call Us 24/7</p>
                    <a className="text-2xl font-bold text-white hover:text-[#EA2831] transition-colors" href="tel:8709152518">87091 52518</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© 2023 Apna Tour & Travel. All rights reserved.</p>
            <div className="flex gap-8">
              <a className="hover:text-white" href="#">Privacy Policy</a>
              <a className="hover:text-white" href="#">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Elements */}
      <AIChatBot />
      <WhatsAppPopup />
      <div className="fixed left-6 bottom-6 flex flex-col gap-4 z-50">
        <a href="tel:8709152518" className="group relative flex items-center justify-start">
          <div className="w-14 h-14 bg-[#EA2831] rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform animate-pulse cursor-pointer text-white">
            <span className="material-symbols-outlined text-3xl">phone_in_talk</span>
          </div>
          <span className="ml-4 bg-white px-4 py-2 rounded-xl text-[#1a110f] text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-gray-100">Call Support</span>
        </a>
      </div>
    </div>
  );
};

export default App;
