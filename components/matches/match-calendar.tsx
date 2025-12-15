"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, MapPin, Clock, Ticket } from "lucide-react"
import { CountryFlag } from "@/components/ui/country-flag"
import Link from "next/link"

const matchesByDate = {
  "21 Dec 2025": [
    {
      id: 1,
      teamA: { name: "Maroc", code: "MAR" },
      teamB: { name: "Mali", code: "MLI" },
      time: "20:00",
      stadium: "Stade Mohammed V",
      city: "Casablanca",
      group: "A",
      phase: "Groupe",
    },
    {
      id: 2,
      teamA: { name: "Comores", code: "COM" },
      teamB: { name: "Zambie", code: "ZAM" },
      time: "17:00",
      stadium: "Stade de Marrakech",
      city: "Marrakech",
      group: "A",
      phase: "Groupe",
    },
  ],
  "22 Dec 2025": [
    {
      id: 3,
      teamA: { name: "Senegal", code: "SEN" },
      teamB: { name: "Cameroun", code: "CMR" },
      time: "17:00",
      stadium: "Complexe Moulay Abdellah",
      city: "Rabat",
      group: "B",
      phase: "Groupe",
    },
    {
      id: 4,
      teamA: { name: "Nigeria", code: "NGA" },
      teamB: { name: "Egypte", code: "EGY" },
      time: "20:00",
      stadium: "Grand Stade de Tanger",
      city: "Tanger",
      group: "C",
      phase: "Groupe",
    },
  ],
  "23 Dec 2025": [
    {
      id: 5,
      teamA: { name: "Algerie", code: "ALG" },
      teamB: { name: "Cote d'Ivoire", code: "CIV" },
      time: "17:00",
      stadium: "Stade de Fes",
      city: "Fes",
      group: "D",
      phase: "Groupe",
    },
    {
      id: 6,
      teamA: { name: "Ghana", code: "GHA" },
      teamB: { name: "Tunisie", code: "TUN" },
      time: "20:00",
      stadium: "Grand Stade d'Agadir",
      city: "Agadir",
      group: "E",
      phase: "Groupe",
    },
  ],
}

export function MatchCalendar() {
  const [activeTab, setActiveTab] = useState("all")

  return (
    <div className="space-y-6">
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:inline-grid">
          <TabsTrigger value="all">Tous</TabsTrigger>
          <TabsTrigger value="group">Groupes</TabsTrigger>
          <TabsTrigger value="knockout">Eliminations</TabsTrigger>
          <TabsTrigger value="final">Finale</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6 space-y-8">
          {Object.entries(matchesByDate).map(([date, matches]) => (
            <div key={date}>
              {/* Date header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg">
                  <Calendar className="h-4 w-4" />
                  <span className="font-semibold">{date}</span>
                </div>
                <div className="flex-1 h-px bg-border" />
              </div>

              {/* Matches */}
              <div className="space-y-4">
                {matches.map((match) => (
                  <Card
                    key={match.id}
                    className="overflow-hidden hover:shadow-lg transition-shadow border-l-4 border-l-primary"
                  >
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-[1fr_auto_1fr_auto] gap-4 p-4 items-center">
                        {/* Team A - Using CountryFlag component */}
                        <div className="flex items-center gap-4 justify-end md:justify-end">
                          <div className="text-right">
                            <div className="font-semibold text-foreground">{match.teamA.name}</div>
                            <div className="text-sm text-muted-foreground">{match.teamA.code}</div>
                          </div>
                          <CountryFlag code={match.teamA.code} size="lg" />
                        </div>

                        {/* VS / Time */}
                        <div className="flex flex-col items-center px-4">
                          <Badge variant="secondary" className="mb-2">
                            Groupe {match.group}
                          </Badge>
                          <div className="flex items-center gap-2 text-2xl font-bold text-muted-foreground">
                            <Clock className="h-5 w-5" />
                            <span>{match.time}</span>
                          </div>
                        </div>

                        {/* Team B - Using CountryFlag component */}
                        <div className="flex items-center gap-4">
                          <CountryFlag code={match.teamB.code} size="lg" />
                          <div>
                            <div className="font-semibold text-foreground">{match.teamB.name}</div>
                            <div className="text-sm text-muted-foreground">{match.teamB.code}</div>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col gap-2 md:border-l md:pl-4 border-border">
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4 text-secondary" />
                            <span className="truncate">{match.city}</span>
                          </div>
                          <Button size="sm" className="bg-primary hover:bg-primary/90 gap-1" asChild>
                            <Link href={`/tickets?match=${match.id}`}>
                              <Ticket className="h-4 w-4" />
                              Billets
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </TabsContent>

        <TabsContent value="group">
          <div className="text-center py-12 text-muted-foreground">
            Affichage des matchs de la phase de groupes uniquement
          </div>
        </TabsContent>

        <TabsContent value="knockout">
          <div className="text-center py-12 text-muted-foreground">
            Affichage des matchs a elimination directe uniquement
          </div>
        </TabsContent>

        <TabsContent value="final">
          <div className="text-center py-12 text-muted-foreground">Affichage de la finale uniquement</div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
