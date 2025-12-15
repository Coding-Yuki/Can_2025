"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Ticket } from "lucide-react"
import { CountdownCAN2025 } from "@/components/countdown/countdown-can2025"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Background pattern */}
      <div className="absolute inset-0 moroccan-pattern opacity-30" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary to-primary" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary/20 px-4 py-1.5 text-sm text-secondary mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              21 Decembre 2025 - 18 Janvier 2026
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight text-balance">
              AFRICA CUP
              <br />
              <span className="text-secondary">OF NATIONS</span>
              <br />
              MOROCCO 2025
            </h1>

            <p className="mt-6 text-lg text-primary-foreground/80 max-w-xl leading-relaxed">
              Bienvenue sur la plateforme officielle de gestion de la CAN 2025. Achetez vos billets, suivez les matchs
              et rejoignez notre equipe de benevoles.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground gap-2">
                <Link href="/tickets">
                  <Ticket className="h-5 w-5" />
                  Acheter des billets
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 gap-2 bg-transparent"
              >
                <Link href="/matches">
                  <Calendar className="h-5 w-5" />
                  Voir le calendrier
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-accent">24</div>
                <div className="text-sm text-primary-foreground/60">Equipes</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-accent">52</div>
                <div className="text-sm text-primary-foreground/60">Matchs</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-accent">6</div>
                <div className="text-sm text-primary-foreground/60">Stades</div>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-full blur-3xl" />
              <Image
                src="/images/can2025-logo.png"
                alt="Logo officiel CAN Morocco 2025"
                width={400}
                height={400}
                className="relative w-full max-w-md lg:max-w-lg drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>

        <div className="mt-16 lg:mt-24">
          <CountdownCAN2025 />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
