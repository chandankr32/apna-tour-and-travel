
import React from 'react';
import Navbar from './components/Navbar';
import BookingForm from './components/BookingForm';
import AIChatBot from './components/AIChatBot';
import WhatsAppPopup from './components/WhatsAppPopup';
import { FEATURES, TESTIMONIALS } from './constants';

const App: React.FC = () => {
  const whatsappUrl = "https://wa.me/918709152518?text=Hi! I'd like to book a car with Apna Tour & Travel.";

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
                <span className="text-xs font-bold text-[#EA2831] uppercase tracking-wider">Top Rated in Ranchi</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-[#1a110f]">
                Premium Car Rentals with <span className="text-[#EA2831]">Expert Drivers</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-lg">
                Safe, reliable, and comfortable journeys. Our drivers have 10+ years experience and are strictly non-alcoholic.
              </p>
            </div>
            <BookingForm />
          </div>

          <div className="lg:col-span-6 relative h-full min-h-[400px] lg:min-h-[600px] w-full">
            <div className="absolute top-10 right-10 w-3/4 h-3/4 bg-orange-100 rounded-[3rem] -z-10 rotate-3 transform"></div>
            <div className="h-full w-full rounded-3xl overflow-hidden shadow-2xl relative group bg-gray-100">
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
              <div className="absolute bottom-6 left-6 z-20 text-white">
                <p className="font-bold text-lg">Trusted Travel Partner</p>
                <div className="flex items-center gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-sm">star</span>
                  ))}
                  <span className="text-white text-sm ml-2 font-medium">5.0 Google Rating</span>
                </div>
              </div>
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBwOyALs18WJE49IYB-JiyqK2FscW55RWB5wTgyw_VOzse0RJz3VlL6xOA_ynU6dPa4DRMICYJBKc2MnP42ndycbH-AEJd0fYUE1aPPgwDjLs_5_UNe9EMqIaCBDI0YxBtmWNIIO0kWa8-eG4OXYMWqRYd97AYr6hG80OKb0d2uHeyEh7dCKh5ZY4cZYa2fvjK5XtZXe4Ei75qR9hy3JKt4GjL8wnLT-AnB3g9oW0ndq0wdX9h-ypzbQDljqsg0LrhkGcfn0P-MKAl" 
                alt="Professional Driver Ranchi" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce-slow hidden md:flex">
              <div className="bg-green-100 p-2 rounded-full text-green-600">
                <span className="material-symbols-outlined">shield_check</span>
              </div>
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase">Safety Assured</p>
                <p className="text-sm font-bold text-[#1a110f]">10+ Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services & Pricing Section - Added scroll-mt-24 for navigation accessibility */}
      <section id="services" className="py-24 bg-[#F9F7F4] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-[#1a110f] mb-4 uppercase tracking-tight">Our Price Criteria & Services</h2>
            <div className="w-24 h-1.5 bg-[#EA2831] mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto font-medium">
              We assure that your <span className="text-[#EA2831] font-bold">comfort and safety</span> are our top priorities. Experience Ranchi's most reliable and professional car rental team.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 mb-20">
            {/* Ertiga Card */}
            <div className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-500 group overflow-hidden relative">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#EA2831]/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-3xl font-black text-[#1a110f] mb-2">Maruti Suzuki Ertiga</h3>
                    <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-xs font-black uppercase tracking-widest">Most Popular</span>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-400 font-black uppercase tracking-widest mb-1">Per Day Rent</p>
                    <span className="text-3xl font-black text-[#EA2831]">₹1000 - ₹1200</span>
                  </div>
                </div>
                
                <div className="space-y-4 mb-10 pb-10 border-b border-gray-100">
                  <div className="flex items-center gap-4 text-gray-700 bg-gray-50 p-4 rounded-2xl border border-dashed border-gray-200">
                    <span className="material-symbols-outlined text-[#EA2831] text-3xl">local_gas_station</span>
                    <div>
                      <p className="font-bold text-sm">Fuel (Petrol/Diesel)</p>
                      <p className="text-xs text-gray-500">Per KM fuel extra as per actual usage</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-gray-700 p-2">
                    <span className="material-symbols-outlined text-green-500">check_circle</span>
                    <span className="text-sm font-medium">Seating Capacity: 6+1 Passengers</span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-700 p-2">
                    <span className="material-symbols-outlined text-green-500">check_circle</span>
                    <span className="text-sm font-medium">Fully Air Conditioned (AC)</span>
                  </div>
                </div>

                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full bg-[#1a110f] text-white py-5 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-[#EA2831] transition-all transform hover:-translate-y-1 shadow-xl">
                  BOOK ERTIGA VIA WHATSAPP <span className="material-symbols-outlined">chat</span>
                </a>
              </div>
            </div>

            {/* Innova Crysta Card */}
            <div className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-500 group overflow-hidden relative">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#EA2831]/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-3xl font-black text-[#1a110f] mb-2">Toyota Innova Crysta</h3>
                    <span className="inline-block px-4 py-1.5 bg-purple-100 text-purple-700 rounded-full text-xs font-black uppercase tracking-widest">Premium Choice</span>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-400 font-black uppercase tracking-widest mb-1">Per Day Rent</p>
                    <span className="text-3xl font-black text-[#EA2831]">₹1500</span>
                  </div>
                </div>

                <div className="space-y-4 mb-10 pb-10 border-b border-gray-100">
                  <div className="flex items-center gap-4 text-gray-700 bg-gray-50 p-4 rounded-2xl border border-dashed border-gray-200">
                    <span className="material-symbols-outlined text-[#EA2831] text-3xl">local_gas_station</span>
                    <div>
                      <p className="font-bold text-sm">Fuel (Diesel)</p>
                      <p className="text-xs text-gray-500">Per KM fuel extra as per actual usage</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-gray-700 p-2">
                    <span className="material-symbols-outlined text-green-500">check_circle</span>
                    <span className="text-sm font-medium">Luxury Interior & Superior Safety</span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-700 p-2">
                    <span className="material-symbols-outlined text-green-500">check_circle</span>
                    <span className="text-sm font-medium">Expert Driver Included</span>
                  </div>
                </div>

                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full bg-[#1a110f] text-white py-5 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-[#EA2831] transition-all transform hover:-translate-y-1 shadow-xl">
                  BOOK INNOVA VIA WHATSAPP <span className="material-symbols-outlined">chat</span>
                </a>
              </div>
            </div>
          </div>

          {/* Driver Quality & Safety Standards */}
          <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl border border-gray-100 overflow-hidden relative mb-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#1a110f] mb-6">Our Driver Standards</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  We understand that safety is your primary concern. That's why we don't just provide cars; we provide professional guardians for your journey.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-5">
                    <div className="w-14 h-14 bg-blue-50 text-blue-600 flex-shrink-0 rounded-2xl flex items-center justify-center">
                      <span className="material-symbols-outlined text-3xl">history</span>
                    </div>
                    <div>
                      <p className="font-black text-[#1a110f]">10+ Years Experience</p>
                      <p className="text-sm text-gray-500">All our drivers have extensive on-road experience across Ranchi and Jharkhand.</p>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <div className="w-14 h-14 bg-red-50 text-red-600 flex-shrink-0 rounded-2xl flex items-center justify-center">
                      <span className="material-symbols-outlined text-3xl">no_drinks</span>
                    </div>
                    <div>
                      <p className="font-black text-[#1a110f]">Strictly Non-Alcoholic</p>
                      <p className="text-sm text-gray-500">We maintain a zero-tolerance policy. Professional, polite, and verified drivers only.</p>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <div className="w-14 h-14 bg-green-50 text-green-600 flex-shrink-0 rounded-2xl flex items-center justify-center">
                      <span className="material-symbols-outlined text-3xl">verified_user</span>
                    </div>
                    <div>
                      <p className="font-black text-[#1a110f]">Verified & Background Checked</p>
                      <p className="text-sm text-gray-500">Every driver is thoroughly vetted for your family's safety and peace of mind.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                 <img 
                   src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3r-fA-6YmN6-2Ff9G0mB0n7Yf8r-6-Y-7_7-6-Y-7_7-6-Y-7_7-6-Y-7_7-6-Y-7_7-6-Y-7_7" 
                   alt="Safe Driver"
                   className="rounded-[2rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                   onError={(e) => {
                     (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=800";
                   }}
                 />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews Section - Added scroll-mt-24 */}
      <section id="testimonials" className="py-24 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8 text-center md:text-left">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#1a110f] mb-4 uppercase tracking-tight">Verified Google Reviews</h2>
              <p className="text-gray-600 text-lg">See why we are the <span className="text-[#EA2831] font-bold">#1 rated</span> travel service in Ranchi.</p>
            </div>
            <div className="bg-gray-50 px-10 py-8 rounded-[2.5rem] border border-gray-100 flex flex-col items-center shadow-inner">
              <div className="flex items-center gap-3 mb-3">
                <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" className="h-8" />
                <span className="font-black text-2xl text-gray-700 italic">Reviews</span>
              </div>
              <div className="flex items-center gap-1.5 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined fill-current text-3xl">star</span>
                ))}
                <span className="ml-3 text-[#1a110f] font-black text-3xl">5.0</span>
              </div>
              <p className="text-xs text-gray-400 mt-4 font-black uppercase tracking-[0.2em]">Ranchi City Favorite</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 relative group hover:bg-white hover:shadow-[0_20px_50px_rgba(234,40,49,0.1)] transition-all duration-500">
                <div className="flex justify-between items-center mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#EA2831] to-[#c91d24] text-white flex items-center justify-center rounded-2xl font-black text-xl shadow-lg shadow-[#EA2831]/20">
                      {t.initials}
                    </div>
                    <div>
                      <p className="font-black text-[#1a110f] leading-none">{t.author}</p>
                      <p className="text-[10px] text-gray-400 uppercase tracking-widest font-black mt-1">Verified Local Guide</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-gray-200 text-4xl">format_quote</span>
                </div>
                <div className="flex items-center gap-0.5 text-yellow-400 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-lg fill-current">star</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-10 italic text-base leading-relaxed font-medium">"{t.text}"</p>
                <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-[11px] font-black text-gray-500 uppercase tracking-tighter">{t.trip}</span>
                  </div>
                  <span className="text-[11px] font-black text-gray-400 uppercase">G-MAPS REVIEW</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
             <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 bg-[#EA2831] text-white px-12 py-6 rounded-[2rem] font-black text-lg shadow-2xl shadow-[#EA2831]/40 hover:scale-110 hover:-rotate-1 transition-all">
               CHAT ON WHATSAPP TO BOOK <span className="material-symbols-outlined text-2xl">chat</span>
             </a>
             <p className="mt-6 text-gray-400 text-sm font-bold uppercase tracking-widest">Instant Quotes & 24/7 Availability</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a110f] text-white pt-24 pb-12 rounded-t-[5rem] mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-[#EA2831] rounded-2xl flex items-center justify-center text-white shadow-xl shadow-[#EA2831]/30">
                  <span className="material-symbols-outlined text-3xl">local_taxi</span>
                </div>
                <span className="text-3xl font-black tracking-tighter">Apna Tour & Travel</span>
              </div>
              <p className="text-gray-400 text-xl mb-10 max-w-sm leading-relaxed">
                Ranchi's safest car rental service with 10+ years experienced, strictly non-alcoholic drivers. Your journey, our priority.
              </p>
              <div className="flex gap-5">
                {['FB', 'IG', 'TW'].map(social => (
                  <a key={social} className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-[#EA2831] transition-all hover:scale-125" href="#">
                    <span className="text-xs font-black">{social}</span>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xl font-black mb-8 uppercase tracking-widest text-[#EA2831]">Quick Links</h4>
              <ul className="space-y-5">
                {['About Ranchi Tours', 'Ertiga Pricing', 'Innova Luxury', 'Safety Standards', 'Terms of Service'].map(link => (
                  <li key={link}><a className="text-gray-400 hover:text-white transition-colors font-bold" href="#">{link}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-black mb-8 uppercase tracking-widest text-[#EA2831]">Support</h4>
              <div className="space-y-8">
                <div className="flex gap-5">
                  <span className="material-symbols-outlined text-[#EA2831] text-3xl">location_on</span>
                  <div>
                    <p className="text-gray-300 font-bold">Roshpa Tower, 4th Floor,<br/>Main Road, Ranchi 834001</p>
                    <a className="inline-flex items-center gap-2 mt-4 text-[10px] font-black text-[#EA2831] hover:text-white transition-colors uppercase tracking-[0.2em] border border-[#EA2831]/40 hover:bg-[#EA2831]/10 px-6 py-2.5 rounded-full" href="https://www.google.com/maps/search/?api=1&query=Roshpa+Tower,+4th+Floor,+Main+Road,+Ranchi+834001" target="_blank">
                      OPEN MAPS
                    </a>
                  </div>
                </div>
                <div className="flex gap-5 items-center bg-white/5 p-6 rounded-[2rem] border border-white/5">
                  <span className="material-symbols-outlined text-[#EA2831] text-4xl">phone_in_talk</span>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest">24/7 HOTLINE</p>
                    <a className="text-2xl font-black text-white hover:text-[#EA2831] transition-colors" href="tel:8709152518">87091 52518</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
            <p className="font-bold uppercase tracking-widest">© 2023 Apna Tour & Travel Ranchi. Expert Drivers.</p>
            <div className="flex gap-10 font-bold">
              <a className="hover:text-white uppercase" href="#">Privacy</a>
              <a className="hover:text-white uppercase" href="#">Legal</a>
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
          <span className="ml-4 bg-white px-5 py-2.5 rounded-2xl text-[#1a110f] text-sm font-black shadow-2xl opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0 whitespace-nowrap border border-gray-100">Call Now</span>
        </a>
      </div>
    </div>
  );
};

export default App;
