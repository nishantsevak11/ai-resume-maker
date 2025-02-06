"use client";

import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

function cleanGeminiResponse(response) {
  const cleanedResponse = response.replace(/```json\n/g, "").replace(/\n```/g, "");
  return cleanedResponse;
}

export default function Chatbot() {
  const [userInput, setUserInput] = useState("");
  const [conversation, setConversation] = useState([
    { sender: "bot", text: "Hi! I’m here to help you create your resume. Let’s start with your full name. What’s your name?" },
  ]);
  const [resumeData, setResumeData] = useState({});
  const [resumeGenerated, setResumeGenerated] = useState(false); // Track if resume is generated

  function parseDataNow(){
  
      window.location.href = "/step2"
    
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const updatedConversation = [...conversation, { sender: "user", text: userInput }];
    setConversation(updatedConversation);
    setUserInput("");

    try {
      const genAI = new GoogleGenerativeAI("AIzaSyDc5kYbE8cgth783xVH1Zgllb74hILa2i8");
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });

      const prompt = `You are a friendly and helpful resume expert. You are talking to a user who is building their resume. Your goal is to help them create a professional and effective resume by gathering information from them through a natural, conversational dialogue. Focus on having a real conversation, not just extracting data. Ask relevant questions one at a time, and be responsive to the user's answers. Remember *all* information the user has provided and do *not* ask for the same information repeatedly. Only update the resume data when the user provides *new* information. Do not make assumptions.

Here's the resume data collected so far (in JSON format): ${JSON.stringify(resumeData)}

The user just said: "${userInput}"

Based on the current resume data, what would you say next to continue the conversation in a natural way? Respond as if you are a real person helping them with their resume. If the user provides *new* information, update the JSON object and acknowledge that you've recorded it. If they ask a question, answer it helpfully. If they seem unsure or stuck, offer suggestions or guidance. If the user says they are done or asks you to make the resume, generate a brief, professional summary/objective based on the provided data and include it in the JSON.

Return your response in the following JSON format:

\`\`\`json
{
  "bot_response": "Your conversational response to the user",
  "updated_resume_data": { /* The updated resume data object (including any *new* information from the user's last input. Do not repeat existing data unless it was specifically changed by the user. */ },
  "resume_complete": true/false /* Set to true if the user has indicated they are done and the resume is ready to be generated. */
}
\`\`\``;

      const result = await model.generateContent(prompt);
      const responseJson = cleanGeminiResponse(result.response.text());

      try {
        const responseData = JSON.parse(responseJson);

        setResumeData({ ...resumeData, ...responseData.updated_resume_data });
        setConversation([...updatedConversation, { sender: "bot", text: responseData.bot_response }]);

        if (responseData.resume_complete) {
          setResumeGenerated(true); // Set flag to indicate resume is generated
          console.log("Generating Resume with Data:", resumeData);
          // Here, you would typically use resumeData to generate the actual resume (PDF, HTML, etc.)
          // For this example, we'll just log the data and set a flag.
        }

        console.log("Extracted Data:", responseData.updated_resume_data);
      } catch (jsonError) {
        console.error("Error parsing JSON response:", jsonError, responseJson);
        setConversation([...updatedConversation, { sender: "bot", text: "Sorry, I had trouble understanding your input. Please try again." }]);
      }

    } catch (error) {
      console.error("Gemini API Error:", error);
      setConversation([...updatedConversation, { sender: "bot", text: "Sorry, something went wrong with the API. Please try again (check the console for details)." }]);
    }
  };

  return (
    <div className="p-4 max-w-md ">
      <h1 className="text-2xl font-bold mb-4">Resume Builder Chatbot</h1>
      <div className="border p-4 rounded-lg bg-gray-100">
        <div className="h-64 overflow-y-auto mb-4">
          {conversation.map((msg, idx) => (
            <div
              key={idx}
              className={`mb-2 ${msg.sender === "bot" ? "text-left" : "text-right"}`}
            >
              <div
                className={`inline-block p-2 rounded-lg ${
                  msg.sender === "bot" ? "bg-blue-500 text-white" : "bg-green-500 text-white"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="flex">
          <input
            type="text"
            className="border text-black p-2 flex-1 rounded-l-lg"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Type your response..."
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600"
          >
            Send
          </button>
        </form>
      </div>

      

       
        <div className="mt-4 border text-black p-4 rounded-lg bg-gray-600">
          <h2 className="text-black">Generated Resume Data:</h2> {/* Or render the actual resume here */}
          <pre>{JSON.stringify(resumeData, null, 2)}</pre>
          <button onClick={parseDataNow}>click me</button>
        </div>

      
    </div>
  );

}