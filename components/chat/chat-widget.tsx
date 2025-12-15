"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { X, Send, User, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
}

const ASSAD_MASCOT_URL = "/images/can-mascot.png"

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      })

      const data = await response.json()

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.text || "Desole, je n ai pas pu repondre.",
      }

      setMessages((prev) => [...prev, assistantMessage])
    } catch (error) {
      console.error("Chat error:", error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "Desole, une erreur s est produite. Veuillez reessayer.",
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const quickQuestions = [
    "Quelles sont les equipes qualifiees?",
    "Comment acheter des billets?",
    "Comment devenir benevole?",
  ]

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 right-6 z-50 h-20 w-20 rounded-full shadow-lg transition-all duration-300 hover:scale-110",
          "bg-[#c8102e] border-4 border-[#d4a300] overflow-hidden",
          isOpen && "ring-4 ring-[#d4a300]/50",
        )}
        aria-label="Chat avec Assad"
      >
        <img
          src={ASSAD_MASCOT_URL || "/placeholder.svg"}
          alt="Assad - Mascotte CAN 2025"
          className="w-full h-full object-cover object-top scale-150"
        />
      </button>

      {/* Chat Window */}
      <div
        className={cn(
          "fixed bottom-28 right-6 z-50 w-[380px] transition-all duration-300 origin-bottom-right",
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none",
        )}
      >
        <Card className="border-2 border-[#d4a300]/50 shadow-2xl overflow-hidden">
          <CardHeader className="bg-[#c8102e] text-white py-3 px-4">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-3 text-lg">
                <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-[#d4a300] bg-[#c8102e]">
                  <img
                    src={ASSAD_MASCOT_URL || "/placeholder.svg"}
                    alt="Assad"
                    className="w-full h-full object-cover object-top scale-150"
                  />
                </div>
                <div>
                  <p className="font-bold text-[#d4a300]">Assad</p>
                  <p className="text-xs text-white/80 font-normal">Mascotte officielle CAN 2025</p>
                </div>
              </CardTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="p-0">
            <ScrollArea className="h-[350px] p-4" ref={scrollRef}>
              {messages.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground">
                  <div className="relative h-24 w-24 rounded-full overflow-hidden border-4 border-[#d4a300]/50 mb-4 bg-[#c8102e]">
                    <img
                      src={ASSAD_MASCOT_URL || "/placeholder.svg"}
                      alt="Assad"
                      className="w-full h-full object-cover object-top scale-150"
                    />
                  </div>
                  <p className="font-bold text-foreground text-lg">Marhaba!</p>
                  <p className="text-sm mt-1">Je suis Assad, le lion de la CAN 2025!</p>
                  <p className="text-sm text-muted-foreground">Posez-moi vos questions sur le tournoi.</p>
                  <div className="mt-4 space-y-2 w-full">
                    {quickQuestions.map((question, idx) => (
                      <button
                        key={idx}
                        onClick={() => setInput(question)}
                        className="block w-full text-left text-xs bg-muted px-3 py-2 rounded-lg hover:bg-[#c8102e]/10 hover:text-[#c8102e] transition-colors"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={cn("flex gap-3", message.role === "user" ? "justify-end" : "justify-start")}
                    >
                      {message.role === "assistant" && (
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full overflow-hidden border-2 border-[#d4a300] bg-[#c8102e]">
                          <img
                            src={ASSAD_MASCOT_URL || "/placeholder.svg"}
                            alt="Assad"
                            className="w-full h-full object-cover object-top scale-150"
                          />
                        </div>
                      )}
                      <div
                        className={cn(
                          "max-w-[75%] rounded-2xl px-4 py-2.5 text-sm whitespace-pre-wrap",
                          message.role === "user"
                            ? "bg-[#c8102e] text-white rounded-br-md"
                            : "bg-muted text-foreground rounded-bl-md",
                        )}
                      >
                        {message.content}
                      </div>
                      {message.role === "user" && (
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#006233] text-white">
                          <User className="h-4 w-4" />
                        </div>
                      )}
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex gap-3 justify-start">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full overflow-hidden border-2 border-[#d4a300] bg-[#c8102e]">
                        <img
                          src={ASSAD_MASCOT_URL || "/placeholder.svg"}
                          alt="Assad"
                          className="w-full h-full object-cover object-top scale-150"
                        />
                      </div>
                      <div className="bg-muted rounded-2xl rounded-bl-md px-4 py-2.5">
                        <Loader2 className="h-4 w-4 animate-spin text-[#d4a300]" />
                      </div>
                    </div>
                  )}
                </div>
              )}
            </ScrollArea>

            <form onSubmit={handleSubmit} className="border-t p-3 flex gap-2 bg-muted/30">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Demandez a Assad..."
                disabled={isLoading}
                className="flex-1"
              />
              <Button
                type="submit"
                size="icon"
                disabled={isLoading || !input.trim()}
                className="bg-[#d4a300] hover:bg-[#d4a300]/90 text-black shrink-0"
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
