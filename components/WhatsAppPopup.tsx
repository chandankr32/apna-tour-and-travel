
import React, { useState } from 'react';

const WhatsAppPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "918709152518";
  const message = "Hi! I'd like to book a car for a trip. Can you help me?";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed left-6 bottom-24 z-50 flex flex-col items-start">
      {isOpen && (
        <div className="mb-4 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-in slide-in-from-left-4 duration-300">
          <div className="bg-[#25D366] p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217s.231.001.332.005c.109.004.254-.041.398.305.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.144.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.419-.101.824z" />
              </svg>
              <span className="font-bold">WhatsApp Chat</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 rounded-full p-1">
              <span className="material-symbols-outlined text-sm">close</span>
            </button>
          </div>
          <div className="p-5 bg-gray-50">
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">
              Hey there! 👋 <br/>
              Need a quick quote or have a question? Chat with our team directly.
            </p>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-3 rounded-xl font-bold text-sm shadow-lg shadow-[#25D366]/20 transition-all transform active:scale-95"
            >
              <span>Chat Now</span>
              <span className="material-symbols-outlined text-sm">open_in_new</span>
            </a>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[#25D366] rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform cursor-pointer text-white"
      >
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </button>
    </div>
  );
};

export default WhatsAppPopup;
