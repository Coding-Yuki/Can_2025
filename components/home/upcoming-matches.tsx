import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, ArrowRight } from "lucide-react"
import { CountryFlag } from "@/components/ui/country-flag"

const upcomingMatches = [
  {
    id: 1,
    teamA: { name: "Maroc", code: "MAR" },
    teamB: { name: "Mali", code: "MLI" },
    date: "21 Dec 2025",
    time: "20:00",
    stadium: "Stade Mohammed V",
    city: "Casablanca",
    phase: "Phase de groupes",
    group: "A",
  },
  {
    id: 2,
    teamA: { name: "Senegal", code: "SEN" },
    teamB: { name: "Cameroun", code: "CMR" },
    date: "22 Dec 2025",
    time: "17:00",
    stadium: "Complexe Moulay Abdellah",
    city: "Rabat",
    phase: "Phase de groupes",
    group: "B",
  },
  {
    id: 3,
    teamA: { name: "Nigeria", code: "NGA" },
    teamB: { name: "Egypte", code: "EGY" },
    date: "22 Dec 2025",
    time: "20:00",
    stadium: "Grand Stade de Tanger",
    city: "Tanger",
    phase: "Phase de groupes",
    group: "C",
  },
]

export function UpcomingMatches() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
          <div>
            <h2 className="text-4xl font-bold text-foreground" style={{ fontFamily: "var(--font-bebas)" }}>
              PROCHAINS MATCHS
            </h2>
            <p className="mt-2 text-muted-foreground">Ne manquez aucun match de la competition</p>
          </div>
          <Button variant="outline" asChild className="gap-2 bg-transparent">
            <Link href="/matches">
              Voir tout le calendrier
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {upcomingMatches.map((match) => (
            <Card key={match.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    Groupe {match.group}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{match.phase}</span>
                </div>

                {/* Teams - Using CountryFlag component */}
                <div className="flex items-center justify-between py-6">
                  <div className="text-center flex-1">
                    <div className="flex justify-center mb-2">
                      <CountryFlag code={match.teamA.code} size="lg" />
                    </div>
                    <div className="font-semibold text-foreground">{match.teamA.name}</div>
                  </div>
                  <div className="px-4">
                    <div className="text-2xl font-bold text-muted-foreground">VS</div>
                  </div>
                  <div className="text-center flex-1">
                    <div className="flex justify-center mb-2">
                      <CountryFlag code={match.teamB.code} size="lg" />
                    </div>
                    <div className="font-semibold text-foreground">{match.teamB.name}</div>
                  </div>
                </div>

                {/* Match info */}
                <div className="space-y-2 pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>
                      {match.date} - {match.time}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 text-secondary" />
                    <span>
                      {match.stadium}, {match.city}
                    </span>
                  </div>
                </div>

                <Button className="w-full mt-4 bg-primary hover:bg-primary/90" asChild>
                  <Link href={`/tickets?match=${match.id}`}>Reserver des billets</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
