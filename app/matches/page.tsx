import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { MatchCalendar } from "@/components/matches/match-calendar"
import { MatchFilters } from "@/components/matches/match-filters"
import { GroupStandings } from "@/components/matches/group-standings"

export const metadata: Metadata = {
  title: "Calendrier des matchs | CAN Morocco 2025 Hub",
  description: "Consultez le calendrier complet des matchs de la Coupe d'Afrique des Nations 2025",
}

export default function MatchesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero section */}
        <section className="bg-primary py-16 moroccan-pattern relative">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/50 to-primary" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h1
              className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-4"
              style={{ fontFamily: "var(--font-bebas)" }}
            >
              CALENDRIER DES MATCHS
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              52 matchs, 24 equipes, 6 stades. Ne manquez aucun moment de la CAN Morocco 2025.
            </p>
            <div className="flex justify-center gap-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent" style={{ fontFamily: "var(--font-bebas)" }}>
                  21 DEC
                </div>
                <div className="text-sm text-primary-foreground/60">Debut</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent" style={{ fontFamily: "var(--font-bebas)" }}>
                  18 JAN
                </div>
                <div className="text-sm text-primary-foreground/60">Finale</div>
              </div>
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="py-12 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Sidebar filters */}
              <div className="lg:col-span-1">
                <MatchFilters />
              </div>

              {/* Match list */}
              <div className="lg:col-span-3">
                <MatchCalendar />
              </div>
            </div>

            {/* Group standings */}
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-foreground mb-8" style={{ fontFamily: "var(--font-bebas)" }}>
                CLASSEMENTS DES GROUPES
              </h2>
              <GroupStandings />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
