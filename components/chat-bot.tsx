"use client"

import type React from "react"

import { useState } from "react"
import { MessageCircle, X, Send, User, Bot } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

const FAQ_RESPONSES = {
  registration:
    "You can register for our programs by visiting our Registration page. We offer various programs for different age groups and skill levels.",
  programs:
    "We offer youth cricket programs, adult leagues, coaching clinics, and specialized training sessions. Visit our Programs page for detailed information.",
  contact:
    "You can reach us at info@americancricketacademy.org or call (314) 555-0123. We are located in St. Louis, Missouri.",
  events:
    "Check out our Events page for upcoming tournaments, matches, and community events. We regularly host cricket matches and training camps.",
  coaches:
    "Our experienced coaches have professional cricket backgrounds and are certified instructors. Learn more about our coaching staff on the Coaches page.",
  fees: "Program fees vary by age group and program type. Please visit our Registration page or contact us directly for current pricing information.",
  schedule:
    "Training schedules vary by program. Most youth programs run on weekends, while adult leagues have evening sessions. Check our Calendar for specific times.",
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm here to help you with information about American Cricket Academy. Ask me about our programs, registration, events, or anything else!",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])

    // Simple keyword matching for responses
    const lowerInput = inputValue.toLowerCase()
    let botResponse =
      "I'd be happy to help! For specific questions, please contact us at info@americancricketacademy.org or visit our Contact page."

    for (const [keyword, response] of Object.entries(FAQ_RESPONSES)) {
      if (lowerInput.includes(keyword)) {
        botResponse = response
        break
      }
    }

    // Add navigation suggestions
    if (lowerInput.includes("register") || lowerInput.includes("sign up")) {
      botResponse += " You can also visit our Registration page directly."
    } else if (lowerInput.includes("event") || lowerInput.includes("tournament")) {
      botResponse += " Check our Events page for the latest updates."
    }

    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
    }, 1000)

    setInputValue("")
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 h-14 w-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg transition-all duration-300 z-50 ${
          isOpen ? "scale-0" : "scale-100"
        }`}
        size="icon"
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-80 h-96 shadow-2xl z-50 animate-in slide-in-from-bottom-4 duration-300">
          <CardHeader className="bg-blue-600 text-white rounded-t-lg">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">ACAC Assistant</CardTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-blue-700"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-0 flex flex-col h-full">
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex items-start space-x-2 ${
                      message.sender === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    {message.sender === "bot" && (
                      <div className="bg-blue-100 p-1 rounded-full">
                        <Bot className="h-4 w-4 text-blue-600" />
                      </div>
                    )}
                    <div
                      className={`max-w-[70%] p-3 rounded-lg text-sm ${
                        message.sender === "user" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {message.text}
                    </div>
                    {message.sender === "user" && (
                      <div className="bg-gray-200 p-1 rounded-full">
                        <User className="h-4 w-4 text-gray-600" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </ScrollArea>
            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything..."
                  className="flex-1"
                />
                <Button onClick={handleSendMessage} size="icon" className="bg-blue-600 hover:bg-blue-700">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  )
}
