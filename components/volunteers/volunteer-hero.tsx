import { Button } from "@/components/ui/button"
import { Users } from "lucide-react"
import Link from "next/link"

export function VolunteerHero() {
  return (
    <section className="bg-secondary py-20 moroccan-pattern relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm text-white mb-6">
              <Users className="h-4 w-4" />
              Recrutement ouvert
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary-foreground mb-6 text-balance"
              style={{ fontFamily: "var(--font-bebas)" }}
            >
              DEVENEZ BENEVOLE
              <br />
              <span className="text-accent">CAN MOROCCO 2025</span>
            </h1>

            <p className="text-lg text-secondary-foreground/80 mb-8 leading-relaxed max-w-xl">
              Participez a l'organisation du plus grand evenement sportif africain. Vivez une experience unique aux
              cotes des meilleures equipes du continent.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Button size="lg" asChild className="bg-white text-secondary hover:bg-white/90">
                <Link href="#apply">Postuler maintenant</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-white/30 text-white hover:bg-white/10 bg-transparent"
              >
                <Link href="#missions">Voir les missions</Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="text-center bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-accent" style={{ fontFamily: "var(--font-bebas)" }}>
                  5000+
                </div>
                <div className="text-xs text-secondary-foreground/70">Benevoles</div>
              </div>
              <div className="text-center bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-accent" style={{ fontFamily: "var(--font-bebas)" }}>
                  6
                </div>
                <div className="text-xs text-secondary-foreground/70">Villes</div>
              </div>
              <div className="text-center bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-accent" style={{ fontFamily: "var(--font-bebas)" }}>
                  30
                </div>
                <div className="text-xs text-secondary-foreground/70">Jours</div>
              </div>
              <div className="text-center bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-accent" style={{ fontFamily: "var(--font-bebas)" }}>
                  52
                </div>
                <div className="text-xs text-secondary-foreground/70">Matchs</div>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="aspect-square rounded-2xl bg-white/10 backdrop-blur-sm p-8 flex items-center justify-center">
              <img
                src="/images/coupe-d-27afrique-des-nations-de-football-2025-logo.png"
                alt="CAN 2025"
                className="w-full max-w-sm drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
