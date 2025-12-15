"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { X, Send, User, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

const ASSAD_MASCOT_URL = "/images/can-mascot.png"

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const scrollRef = useRef<HTMLDivElement>(null)

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  })

  const isLoading = status === "in_progress"

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim() || isLoading) return

    const messageText = inputValue.trim()
    setInputValue("")
    sendMessage({ text: messageText })
  }

  const quickQuestions = [
    { text: "مرحبا أسد! كيفاش الحال؟", label: "مرحبا! (Darija)" },
    { text: "ما هي الفرق المتأهلة لكأس أمم إفريقيا؟", label: "الفرق المتأهلة (عربي)" },
    { text: "Chhal taman d les billets?", label: "أسعار التذاكر (Darija)" },
    { text: "Comment devenir benevole?", label: "التطوع (Francais)" },
  ]

  const getMessageText = (message: (typeof messages)[0]) => {
    return message.parts
      .filter((part) => part.type === "text")
      .map((part) => (part as { type: "text"; text: string }).text)
      .join("")
  }

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
        <Image
          src={ASSAD_MASCOT_URL || "/placeholder.svg"}
          alt="Assad - Mascotte CAN 2025"
          width={80}
          height={80}
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
                  <Image
                    src={ASSAD_MASCOT_URL || "/placeholder.svg"}
                    alt="Assad"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover object-top scale-150"
                  />
                </div>
                <div>
                  <p className="font-bold text-[#d4a300]">Assad - اسد</p>
                  <p className="text-xs text-white/80 font-normal">AI Assistant | مساعد ذكي</p>
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
                    <Image
                      src={ASSAD_MASCOT_URL || "/placeholder.svg"}
                      alt="Assad"
                      width={96}
                      height={96}
                      className="w-full h-full object-cover object-top scale-150"
                    />
                  </div>
                  <p className="font-bold text-foreground text-lg">مرحبا! Marhaba!</p>
                  <p className="text-sm mt-1">انا اسد، مساعدك الذكي لكأس افريقيا 2025</p>
                  <p className="text-xs text-muted-foreground mt-1">Je parle Arabe, Darija, Francais et Anglais!</p>
                  <div className="mt-4 space-y-2 w-full">
                    {quickQuestions.map((question, idx) => (
                      <button
                        key={idx}
                        onClick={() => setInputValue(question.text)}
                        className="block w-full text-right text-xs bg-muted px-3 py-2 rounded-lg hover:bg-[#c8102e]/10 hover:text-[#c8102e] transition-colors"
                        dir="auto"
                      >
                        <span className="text-muted-foreground text-[10px] block">{question.label}</span>
                        {question.text}
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
                          <Image
                            src={ASSAD_MASCOT_URL || "/placeholder.svg"}
                            alt="Assad"
                            width={32}
                            height={32}
                            className="w-full h-full object-cover object-top scale-150"
                          />
                        </div>
                      )}
                      <div
                        dir="auto"
                        className={cn(
                          "max-w-[75%] rounded-2xl px-4 py-2.5 text-sm whitespace-pre-wrap",
                          message.role === "user"
                            ? "bg-[#c8102e] text-white rounded-br-md"
                            : "bg-muted text-foreground rounded-bl-md",
                        )}
                      >
                        {getMessageText(message)}
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
                        <Image
                          src={ASSAD_MASCOT_URL || "/placeholder.svg"}
                          alt="Assad"
                          width={32}
                          height={32}
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
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="اكتب رسالتك... / Ecrivez ici..."
                disabled={isLoading}
                className="flex-1"
                dir="auto"
              />
              <Button
                type="submit"
                size="icon"
                disabled={isLoading || !inputValue.trim()}
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
