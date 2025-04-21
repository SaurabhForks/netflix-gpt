import { GoogleGenAI } from "@google/genai";

const gemini_api_key = import.meta.env.VITE_GEMINI_API_KEY;
const gemini = new GoogleGenAI({ apiKey: gemini_api_key });

export default gemini;
