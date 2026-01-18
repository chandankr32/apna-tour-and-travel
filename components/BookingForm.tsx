
import React, { useState } from 'react';
import { BookingFormData } from '../types';

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    pickup: '',
    dropoff: '',
    date: '',
    vehicleType: 'Sedan (4 Seater)'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Apna Travels! I'd like to book a ${formData.vehicleType} from ${formData.pickup} to ${formData.dropoff} on ${formData.date}.`;
    window.open(`https://wa.me/918709152518?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 mt-4">
      <form onSubmit={handleSubmit} className="grid gap-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Pick-up Location</label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl">location_on</span>
              <input 
                value={formData.pickup}
                onChange={(e) => setFormData({...formData, pickup: e.target.value})}
                required
                className="w-full pl-10 pr-4 py-3 bg-gray-50 rounded-lg border-transparent focus:bg-white focus:border-[#EA2831] focus:ring-0 text-sm font-medium transition-all" 
                placeholder="Enter pick-up..." 
                type="text"
              />
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Drop-off Location</label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl">flag</span>
              <input 
                value={formData.dropoff}
                onChange={(e) => setFormData({...formData, dropoff: e.target.value})}
                required
                className="w-full pl-10 pr-4 py-3 bg-gray-50 rounded-lg border-transparent focus:bg-white focus:border-[#EA2831] focus:ring-0 text-sm font-medium transition-all" 
                placeholder="Enter destination..." 
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Date</label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl">calendar_today</span>
              <input 
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
                required
                className="w-full pl-10 pr-4 py-3 bg-gray-50 rounded-lg border-transparent focus:bg-white focus:border-[#EA2831] focus:ring-0 text-sm font-medium transition-all text-gray-600" 
                type="date"
              />
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Vehicle Type</label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl">directions_car</span>
              <select 
                value={formData.vehicleType}
                onChange={(e) => setFormData({...formData, vehicleType: e.target.value})}
                className="w-full pl-10 pr-4 py-3 bg-gray-50 rounded-lg border-transparent focus:bg-white focus:border-[#EA2831] focus:ring-0 text-sm font-medium transition-all appearance-none text-gray-600"
              >
                <option>Maruti Ertiga</option>
                <option>Toyota Innova Crysta</option>
                <option>Tempo Traveller</option>
                <option>Sedan (4 Seater)</option>
              </select>
              <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl pointer-events-none">expand_more</span>
            </div>
          </div>
        </div>
        <button type="submit" className="w-full mt-2 bg-[#EA2831] hover:bg-[#c91d24] text-white h-12 rounded-lg font-bold text-base shadow-lg shadow-[#EA2831]/20 transition-all transform active:scale-95 flex items-center justify-center gap-2">
          <span>Book via WhatsApp</span>
          <span className="material-symbols-outlined text-lg">chat</span>
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
