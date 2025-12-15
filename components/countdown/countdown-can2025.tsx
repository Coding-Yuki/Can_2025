"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function CountdownCAN2025() {
  // Target date: December 21, 2025 at 00:00 Morocco time (UTC+1)
  const targetDate = new Date("2025-12-21T00:00:00+01:00")

  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    const calculateTimeLeft = (): TimeLeft => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference <= 0) {
        setHasStarted(true)
        return { days: 0, hours: 0, minutes: 0, seconds: 0 }
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    // Initial calculation
    setTimeLeft(calculateTimeLeft())

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!timeLeft) {
    return null // Prevent hydration mismatch
  }

  if (hasStarted) {
    return (
      <div className="w-full max-w-4xl mx-auto">
        <Card className="bg-gradient-to-r from-secondary to-accent p-8 text-center border-none shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">La CAN 2025 a commence!</h2>
          <p className="text-white/90 text-lg">Profitez du spectacle du football africain!</p>
        </Card>
      </div>
    )
  }

  const timeUnits = [
    { label: "Jours", value: timeLeft.days },
    { label: "Heures", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Secondes", value: timeLeft.seconds },
  ]

  return (
    <div className="w-full max-w-5xl mx-auto space-y-4">
      <div className="text-center space-y-2">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">Compte a rebours</h2>
        <p className="text-primary-foreground/70 text-sm md:text-base">Jusqu au coup d envoi de la CAN 2025</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {timeUnits.map((unit, index) => (
          <Card
            key={unit.label}
            className="relative overflow-hidden bg-card/50 backdrop-blur-sm border-primary-foreground/10 hover:border-secondary/50 transition-all duration-300 group"
          >
            {/* Gradient background on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative p-4 md:p-6 text-center">
              {/* Number */}
              <div className="text-4xl md:text-6xl font-bold text-primary-foreground mb-2 tabular-nums">
                {String(unit.value).padStart(2, "0")}
              </div>

              {/* Label */}
              <div className="text-xs md:text-sm font-medium text-primary-foreground/60 uppercase tracking-wider">
                {unit.label}
              </div>
            </div>

            {/* Pulse animation for seconds */}
            {index === 3 && <div className="absolute inset-0 bg-secondary/20 animate-ping rounded-lg opacity-20" />}
          </Card>
        ))}
      </div>
    </div>
  )
}
