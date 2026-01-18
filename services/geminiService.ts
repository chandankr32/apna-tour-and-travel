
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getTravelAdvice = async (userPrompt: string) => {
  if (!API_KEY) {
    return "I'm sorry, I'm currently unavailable. Please call our 24/7 support line at 87091 52518 for assistance.";
  }

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: "You are a helpful travel assistant for 'Apna Tour & Travel' in Ranchi. Business Rules: 1. Pricing: Ertiga is ₹1000-₹1200/day + fuel per km extra. Innova Crysta is ₹1500/day + fuel per km extra. 2. Safety: We assure comfort and safety as top priority. Drivers have at least 10 years experience, are professional, and strictly non-alcoholic. 3. Call/WhatsApp: 87091 52518. Keep responses concise and friendly.",
      },
    });

    return response.text || "I couldn't generate a response. How else can I help you?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Something went wrong. Please try again or contact us directly!";
  }
};
