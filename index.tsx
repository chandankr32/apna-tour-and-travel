
import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleGenAI } from "@google/genai";

// --- TYPES ---
interface Testimonial {
  id: string;
  author: string;
  initials: string;
  trip: string;
  text: string;
  rating: number;
}

interface BookingFormData {
  pickup: string;
  dropoff: string;
  date: string;
  vehicleType: string;
}

// --- CONSTANTS ---
const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    author: 'Vikash Mahto',
    initials: 'VM',
    trip: 'Local Ranchi Tour',
    text: 'Best car rental in Ranchi. The driver was very professional and the Ertiga was in great condition. 5 stars for the service!',
    rating: 5
  },
  {
    id: 't2',
    author: 'Anjali Sharma',
    initials: 'AS',
    trip: 'Ranchi to Jamshedpur',
    text: 'Booked an Innova Crysta for a family wedding. The driver had 15 years experience and was very helpful with luggage. Highly recommended.',
    rating: 5
  },
  {
    id: 't3',
    author: 'Sandeep Oraon',
    initials: 'SO',
    trip: 'Patratu Valley Trip',
    text: 'Very safe driving. As they promised, the driver was non-alcoholic and polite. Pricing is very reasonable compared to others.',
    rating: 5
  }
];

// --- AI SERVICE ---
const getTravelAdvice = async (userPrompt: string) => {
  const key = process.env.API_KEY;
  if (!key) return "I'm sorry, I'm currently unavailable. Please call 87091 52518 for support.";

  const ai = new GoogleGenAI({ apiKey: key });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: "You are a helpful travel assistant for 'Apna Tour & Travel' in Ranchi. Pricing: Ertiga is ₹1000-1200/day + fuel. Innova is ₹1500/day + fuel. Safety: Drivers have 10+ years experience, non-alcoholic. Contact: 87091 52518.",
      },
    });
    return response.text || "I'm having trouble thinking. Try calling us!";
  } catch (error) {
    console.error(error);
    return "Error connecting to AI. Please call 87091 52518.";
  }
};

// --- COMPONENTS ---

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const whatsappUrl = "https://wa.me/918709152518?text=Hi! I'd like to book a car.";

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
            <a className="text-sm font-medium hover:text-[#EA2831]" href="#services">Services</a>
            <a className="text-sm font-medium hover:text-[#EA2831]" href="#testimonials">Reviews</a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-[#EA2831] hover:bg-[#c91d24] text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-md">Book Now</a>
          </div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-[#1a110f]">
            <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b p-4 flex flex-col gap-4">
          <a className="text-sm font-medium" href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
          <a className="text-sm font-medium" href="#testimonials" onClick={() => setIsMenuOpen(false)}>Reviews</a>
          <a href={whatsappUrl} className="bg-[#EA2831] text-white px-5 py-3 rounded-lg text-sm font-bold text-center">Book Now</a>
        </div>
      )}
    </nav>
  );
};

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    pickup: '', dropoff: '', date: '', vehicleType: 'Maruti Ertiga'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi! Book ${formData.vehicleType} from ${formData.pickup} to ${formData.dropoff} on ${formData.date}.`;
    window.open(`https://wa.me/918709152518?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 mt-4">
      <form onSubmit={handleSubmit} className="grid gap-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <input value={formData.pickup} onChange={e => setFormData({...formData, pickup: e.target.value})} placeholder="Pick-up" className="w-full p-3 bg-gray-50 rounded-lg border-none text-sm" required />
          <input value={formData.dropoff} onChange={e => setFormData({...formData, dropoff: e.target.value})} placeholder="Drop-off" className="w-full p-3 bg-gray-50 rounded-lg border-none text-sm" required />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <input type="date" value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} className="w-full p-3 bg-gray-50 rounded-lg border-none text-sm" required />
          <select value={formData.vehicleType} onChange={e => setFormData({...formData, vehicleType: e.target.value})} className="w-full p-3 bg-gray-50 rounded-lg border-none text-sm">
            <option>Maruti Ertiga</option>
            <option>Toyota Innova Crysta</option>
            <option>Sedan (4 Seater)</option>
          </select>
        </div>
        <button type="submit" className="w-full bg-[#EA2831] text-white p-4 rounded-lg font-bold shadow-lg flex items-center justify-center gap-2">
          <span>Book via WhatsApp</span>
          <span className="material-symbols-outlined text-lg">chat</span>
        </button>
      </form>
    </div>
  );
};

const AIChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([
    { role: 'bot', text: 'Hi! Ask me about Ranchi trip costs or places to visit!' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => { if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight; }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    const msg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: msg }]);
    setIsLoading(true);
    const response = await getTravelAdvice(msg);
    setMessages(prev => [...prev, { role: 'bot', text: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed right-6 bottom-24 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="w-80 sm:w-96 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col mb-4">
          <div className="bg-[#EA2831] p-4 text-white flex justify-between items-center font-bold">
             AI Trip Planner
             <button onClick={() => setIsOpen(false)}><span className="material-symbols-outlined">close</span></button>
          </div>
          <div ref={scrollRef} className="h-64 overflow-y-auto p-4 space-y-4 bg-gray-50 text-sm">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`px-4 py-2 rounded-xl ${m.role === 'user' ? 'bg-[#EA2831] text-white' : 'bg-white border'}`}>{m.text}</div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t bg-white flex gap-2">
            <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleSend()} className="flex-1 bg-gray-100 rounded-lg p-2 text-sm border-none" placeholder="Ask me anything..." />
            <button onClick={handleSend} className="bg-[#EA2831] text-white p-2 rounded-lg"><span className="material-symbols-outlined">send</span></button>
          </div>
        </div>
      )}
      <button onClick={() => setIsOpen(!isOpen)} className="w-14 h-14 bg-deep-teal rounded-full shadow-lg flex items-center justify-center text-white">
        <span className="material-symbols-outlined text-3xl">{isOpen ? 'close' : 'chat'}</span>
      </button>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background-light text-[#1a110f]">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-12 pb-20 px-4 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl sm:text-6xl font-black leading-tight mb-6">
            Ranchi's Finest <span className="text-[#EA2831]">Car Rentals</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">Professional drivers with 10+ years experience. Your safety is our primary guarantee.</p>
          <BookingForm />
        </div>
        <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
          <img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Travel" />
        </div>
      </section>

      {/* Pricing */}
      <section id="services" className="py-20 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-12 uppercase tracking-tight">Our Pricing Models</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-black mb-4">Maruti Ertiga</h3>
              <p className="text-[#EA2831] text-3xl font-black mb-6">₹1000 - ₹1200 / Day</p>
              <ul className="text-sm text-gray-600 space-y-2 mb-8">
                <li>• Fuel extra per KM</li>
                <li>• 6+1 Seating capacity</li>
                <li>• Full AC comfort</li>
              </ul>
              <button className="w-full border-2 border-black py-4 rounded-xl font-black hover:bg-black hover:text-white transition-all">CHECK AVAILABILITY</button>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-black mb-4">Innova Crysta</h3>
              <p className="text-[#EA2831] text-3xl font-black mb-6">₹1500 / Day</p>
              <ul className="text-sm text-gray-600 space-y-2 mb-8">
                <li>• Fuel extra per KM</li>
                <li>• Premium interior comfort</li>
                <li>• Expert executive driver</li>
              </ul>
              <button className="w-full border-2 border-black py-4 rounded-xl font-black hover:bg-black hover:text-white transition-all">BOOK PREMIUM</button>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="testimonials" className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-black text-center mb-12">Google Customer Reviews</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map(t => (
            <div key={t.id} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
               <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold">{t.initials}</div>
                  <span className="font-black text-sm">{t.author}</span>
               </div>
               <p className="text-sm text-gray-700 italic">"{t.text}"</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-[#1a110f] text-white py-12 px-4 text-center">
        <p className="font-bold mb-2">Apna Tour & Travel Ranchi</p>
        <p className="text-sm text-gray-500 mb-4 uppercase tracking-widest">Phone: 87091 52518 | Roshpa Tower, Main Road</p>
        <p className="text-[10px] text-gray-700">© 2024 Apna Travels Group. All Rights Reserved.</p>
      </footer>

      <AIChatBot />
      <a href="tel:8709152518" className="fixed left-6 bottom-6 w-14 h-14 bg-[#EA2831] rounded-full shadow-2xl flex items-center justify-center animate-pulse text-white z-50">
        <span className="material-symbols-outlined text-3xl">phone</span>
      </a>
    </div>
  );
};

// --- RENDER ---
const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(<App />);
}
