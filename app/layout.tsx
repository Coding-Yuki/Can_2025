import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ChatWidget } from "@/components/chat/chat-widget"
import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "CAN Morocco 2025 Hub | Africa Cup of Nations",
  description:
    "Official management hub for the Africa Cup of Nations Morocco 2025. Matches, ticketing, volunteers, and more.",
  generator: "v0.app",
  keywords: ["CAN 2025", "Africa Cup of Nations", "Morocco", "Football", "CAF", "AFCON"],
  authors: [{ name: "CAN 2025 Hub Team" }],
  icons: {
    icon: "/images/can-logo.png",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#8B1538" },
    { media: "(prefers-color-scheme: dark)", color: "#1a0a0d" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        <ChatWidget />
        <Analytics />
      </body>
    </html>
  )
}
