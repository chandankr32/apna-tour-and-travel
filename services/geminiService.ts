
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
        systemInstruction: "You are a helpful travel assistant for 'Apna Tour & Travel', a premium car rental service in Ranchi, Jharkhand. You help users plan trips around Ranchi (Patratu Valley, Dassam Falls, Jonha Falls, etc.), estimate costs (starting at ₹1000/day or ₹12/km), and recommend vehicles (Ertiga, Innova, Tempo Traveller). Keep responses concise, friendly, and professional. Mention our phone number 87091 52518 if they want to book.",
      },
    });

    return response.text || "I couldn't generate a response. How else can I help you?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Something went wrong. Please try again or contact us directly!";
  }
};
