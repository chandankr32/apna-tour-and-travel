
import React, { useState, useRef, useEffect } from 'react';
import { getTravelAdvice } from '../services/geminiService';

const AIChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([
    { role: 'bot', text: 'Hi! I am your Apna Travels assistant. Ask me about trip costs, vehicle recommendations, or sightseeing spots near Ranchi!' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const response = await getTravelAdvice(userMsg);
    setMessages(prev => [...prev, { role: 'bot', text: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed right-6 bottom-24 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="w-80 sm:w-96 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col mb-4 animate-in slide-in-from-bottom-4 duration-300">
          <div className="bg-[#EA2831] p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined">auto_awesome</span>
              <span className="font-bold">Trip Planner AI</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 rounded-full p-1">
              <span className="material-symbols-outlined text-sm">close</span>
            </button>
          </div>
          
          <div ref={scrollRef} className="h-80 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-4 py-2 rounded-2xl text-sm ${
                  m.role === 'user' 
                  ? 'bg-[#EA2831] text-white rounded-br-none' 
                  : 'bg-white text-gray-700 shadow-sm border border-gray-100 rounded-bl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white px-4 py-2 rounded-2xl text-sm shadow-sm border border-gray-100 flex gap-1">
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></span>
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></span>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-gray-100 bg-white">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask something..."
                className="flex-1 bg-gray-100 border-none rounded-xl text-sm focus:ring-1 focus:ring-[#EA2831]"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="w-10 h-10 bg-[#EA2831] text-white rounded-xl flex items-center justify-center hover:bg-[#c91d24] disabled:opacity-50"
              >
                <span className="material-symbols-outlined text-lg">send</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-deep-teal rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer text-white"
      >
        <span className="material-symbols-outlined text-3xl">{isOpen ? 'close' : 'chat'}</span>
      </button>
    </div>
  );
};

export default AIChatBot;
