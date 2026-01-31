
import { GoogleGenAI } from "@google/genai";

const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getBurgerRecommendation = async (mood: string) => {
  const ai = getAI();
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Basado en el humor del cliente: "${mood}", recomienda una de estas hamburguesas: 
    1. STARTER PACK GOURMET (Clásica pero premium, balanceada).
    2. LA BESTIA URBANA (Intensa, grasosa, para hambre voraz).
    3. TRUFFLE SOUL (Sofisticada, terrosa, para paladares finos).
    
    Responde en una sola frase corta y agresiva (estilo metropolitano) que incite a la compra inmediata. Usa lenguaje crudo y directo.`,
    config: {
      temperature: 0.9,
    },
  });
  
  return response.text;
};
