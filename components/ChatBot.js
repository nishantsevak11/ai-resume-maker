// Chatbot.js
"use client"
import { useState, useRef, useEffect } from "react"
import { GoogleGenerativeAI } from "@google/generative-ai"
import { ArrowRight, Loader2, Send } from "lucide-react"
import ResumePreview from "./ResumePreview" // Import the new component

function cleanGeminiResponse(response) {
  const cleanedResponse = response.replace(/```json\n/g, "").replace(/\n```/g, "")
  return cleanedResponse
}

export default function Chatbot() {
  const [userInput, setUserInput] = useState("")
  const [conversation, setConversation] = useState([
    {
      sender: "bot",
      text: "Hi! I'm here to help you create your resume. Let's start with your full name. What's your name?",
    },
  ])
  const [resumeData, setResumeData] = useState({})
  const [resumeGenerated, setResumeGenerated] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const chatContainerRef = useRef(null)

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [conversation])

  function parseDataNow() {
    window.location.href = "/resumeTemplate"
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!userInput.trim()) return

    const updatedConversation = [...conversation, { sender: "user", text: userInput }]
    setConversation(updatedConversation)
    setUserInput("")
    setIsLoading(true)



    try {
      console.log(process.env.GEMENI_API_KEY)
      const genAI = new GoogleGenerativeAI("AIzaSyDc5kYbE8cgth783xVH1Zgllb74hILa2i8")
      const model = genAI.getGenerativeModel({ model: "gemini-pro" })

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
\`\`\``

      const result = await model.generateContent(prompt)
      const responseJson = cleanGeminiResponse(result.response.text())

      try {
        const responseData = JSON.parse(responseJson)

        setResumeData({ ...resumeData, ...responseData.updated_resume_data })
        setConversation([...updatedConversation, { sender: "bot", text: responseData.bot_response }])

        if (responseData.resume_complete) {
          setResumeGenerated(true)
          console.log("Generating Resume with Data:", resumeData)
        }

        console.log("Extracted Data:", responseData.updated_resume_data)
      } catch (jsonError) {
        console.error("Error parsing JSON response:", jsonError, responseJson)
        setConversation([
          ...updatedConversation,
          { sender: "bot", text: "Sorry, I had trouble understanding your input. Please try again." },
        ])
      }
    } catch (error) {
      console.error("Gemini API Error:", error)
      setConversation([
        ...updatedConversation,
        {
          sender: "bot",
          text: "Sorry, something went wrong with the API. Please try again (check the console for details).",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Resume Builder Chatbot</h1>
      <div className="border p-4 rounded-lg bg-white shadow-md">
        <div ref={chatContainerRef} className="h-96 overflow-y-auto mb-4 space-y-4">
          {conversation.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.sender === "bot" ? "justify-start" : "justify-end"}`}>
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  msg.sender === "bot" ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-800"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-center">
              <Loader2 className="w-6 h-6 animate-spin text-blue-500" />
            </div>
          )}
        </div>
        <form onSubmit={handleSubmit} className="flex items-center space-x-2">
          <input
            type="text"
            className="border text-black p-2 flex-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Type your response..."
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-200 ease-in-out flex items-center justify-center"
            disabled={isLoading}
          >
            {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
          </button>
        </form>
      </div>

      {Object.keys(resumeData).length > 0 && (
        <div className="mt-6 border p-4 rounded-lg bg-gray-50 shadow-md">
          <h2 className="text-xl font-semibold mb-2 text-gray-700">Generated Resume Data:</h2>
          <ResumePreview resumeData={resumeData} />
          <button
            onClick={parseDataNow}
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-200 ease-in-out flex items-center justify-center"
          >
            Continue to Next Step
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  )
}