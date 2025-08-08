


import { GoogleGenerativeAI } from "@google/generative-ai";


const API_KEY = "AIzaSyBfb6eVwnRcOf6IKF-hSnHfdFu3RrF3GFY";  // Replace this

const genAI = new GoogleGenerativeAI(API_KEY);

const runChat = async (prompt) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-pro" });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    console.log("Gemini Response:", text);
    return text;
  } catch (error) {
    console.error("Error in runChat:", error);
  }
};

export default runChat;

