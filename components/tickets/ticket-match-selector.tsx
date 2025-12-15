"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, MapPin, Search, ShoppingCart, Users } from "lucide-react"
import { CountryFlag } from "@/components/ui/country-flag"

const availableMatches = [
  {
    id: 1,
    teamA: { name: "Maroc", code: "MAR" },
    teamB: { name: "Mali", code: "MLI" },
    date: "21 Dec 2025",
    time: "20:00",
    stadium: "Stade Mohammed V",
    city: "Casablanca",
    group: "A",
    prices: { cat1: 500, cat2: 300, cat3: 150, vip: 1500 },
    availability: { cat1: 45, cat2: 78, cat3: 92, vip: 12 },
  },
  {
    id: 2,
    teamA: { name: "Senegal", code: "SEN" },
    teamB: { name: "Cameroun", code: "CMR" },
    date: "22 Dec 2025",
    time: "17:00",
    stadium: "Complexe Moulay Abdellah",
    city: "Rabat",
    group: "B",
    prices: { cat1: 450, cat2: 280, cat3: 140, vip: 1400 },
    availability: { cat1: 62, cat2: 85, cat3: 95, vip: 25 },
  },
  {
    id: 3,
    teamA: { name: "Nigeria", code: "NGA" },
    teamB: { name: "Egypte", code: "EGY" },
    date: "22 Dec 2025",
    time: "20:00",
    stadium: "Grand Stade de Tanger",
    city: "Tanger",
    group: "C",
    prices: { cat1: 480, cat2: 290, cat3: 145, vip: 1450 },
    availability: { cat1: 38, cat2: 65, cat3: 88, vip: 8 },
  },
  {
    id: 4,
    teamA: { name: "Algerie", code: "ALG" },
    teamB: { name: "Cote d'Ivoire", code: "CIV" },
    date: "23 Dec 2025",
    time: "17:00",
    stadium: "Stade de Fes",
    city: "Fes",
    group: "D",
    prices: { cat1: 420, cat2: 260, cat3: 130, vip: 1300 },
    availability: { cat1: 55, cat2: 72, cat3: 90, vip: 18 },
  },
]

export function TicketMatchSelector() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCity, setSelectedCity] = useState("all")
  const [cart, setCart] = useState<{ matchId: number; category: string; quantity: number }[]>([])

  const addToCart = (matchId: number, category: string) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.matchId === matchId && item.category === category)
      if (existing) {
        return prev.map((item) =>
          item.matchId === matchId && item.category === category ? { ...item, quantity: item.quantity + 1 } : item,
        )
      }
      return [...prev, { matchId, category, quantity: 1 }]
    })
  }

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <section className="py-12 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header with search and cart */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground" style={{ fontFamily: "var(--font-bebas)" }}>
              SELECTIONNER UN MATCH
            </h2>
            <p className="text-muted-foreground mt-1">Choisissez le match et la categorie de billet</p>
          </div>

          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Rechercher une equipe..."
                className="pl-10 w-64"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* City filter */}
            <Select value={selectedCity} onValueChange={setSelectedCity}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Ville" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes</SelectItem>
                <SelectItem value="casablanca">Casablanca</SelectItem>
                <SelectItem value="rabat">Rabat</SelectItem>
                <SelectItem value="tanger">Tanger</SelectItem>
                <SelectItem value="fes">Fes</SelectItem>
              </SelectContent>
            </Select>

            {/* Cart */}
            <Button variant="outline" className="relative bg-transparent">
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-primary">
                  {totalItems}
                </Badge>
              )}
            </Button>
          </div>
        </div>

        {/* Match cards */}
        <div className="grid gap-6">
          {availableMatches.map((match) => (
            <Card key={match.id} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-[1fr_2fr] gap-0">
                  {/* Match info - Using CountryFlag component */}
                  <div className="bg-muted/50 p-6 flex flex-col justify-center">
                    <Badge variant="secondary" className="w-fit mb-4 bg-primary/10 text-primary">
                      Groupe {match.group}
                    </Badge>

                    <div className="flex items-center gap-6 mb-4">
                      <div className="text-center">
                        <div className="flex justify-center mb-1">
                          <CountryFlag code={match.teamA.code} size="lg" />
                        </div>
                        <div className="font-semibold text-sm">{match.teamA.name}</div>
                      </div>
                      <div className="text-2xl font-bold text-muted-foreground">VS</div>
                      <div className="text-center">
                        <div className="flex justify-center mb-1">
                          <CountryFlag code={match.teamB.code} size="lg" />
                        </div>
                        <div className="font-semibold text-sm">{match.teamB.name}</div>
                      </div>
                    </div>

                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>
                          {match.date} - {match.time}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-secondary" />
                        <span>
                          {match.stadium}, {match.city}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Ticket categories */}
                  <div className="p-6">
                    <h3 className="text-sm font-medium text-muted-foreground mb-4">Categories de billets</h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {/* Category 3 */}
                      <div className="border border-border rounded-lg p-4 hover:border-primary transition-colors">
                        <div className="flex justify-between items-start mb-2">
                          <span className="font-medium">Categorie 3</span>
                          <Badge
                            variant={match.availability.cat3 > 50 ? "secondary" : "destructive"}
                            className="text-xs"
                          >
                            {match.availability.cat3}% dispo
                          </Badge>
                        </div>
                        <div className="text-2xl font-bold text-foreground mb-3">{match.prices.cat3} MAD</div>
                        <Button
                          size="sm"
                          className="w-full bg-primary hover:bg-primary/90"
                          onClick={() => addToCart(match.id, "cat3")}
                        >
                          Ajouter
                        </Button>
                      </div>

                      {/* Category 2 */}
                      <div className="border border-border rounded-lg p-4 hover:border-primary transition-colors">
                        <div className="flex justify-between items-start mb-2">
                          <span className="font-medium">Categorie 2</span>
                          <Badge
                            variant={match.availability.cat2 > 50 ? "secondary" : "destructive"}
                            className="text-xs"
                          >
                            {match.availability.cat2}% dispo
                          </Badge>
                        </div>
                        <div className="text-2xl font-bold text-foreground mb-3">{match.prices.cat2} MAD</div>
                        <Button
                          size="sm"
                          className="w-full bg-primary hover:bg-primary/90"
                          onClick={() => addToCart(match.id, "cat2")}
                        >
                          Ajouter
                        </Button>
                      </div>

                      {/* Category 1 */}
                      <div className="border border-secondary rounded-lg p-4 hover:border-secondary/80 transition-colors bg-secondary/5">
                        <div className="flex justify-between items-start mb-2">
                          <span className="font-medium text-secondary">Categorie 1</span>
                          <Badge
                            variant={match.availability.cat1 > 50 ? "secondary" : "destructive"}
                            className="text-xs"
                          >
                            {match.availability.cat1}% dispo
                          </Badge>
                        </div>
                        <div className="text-2xl font-bold text-secondary mb-3">{match.prices.cat1} MAD</div>
                        <Button
                          size="sm"
                          className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                          onClick={() => addToCart(match.id, "cat1")}
                        >
                          Ajouter
                        </Button>
                      </div>

                      {/* VIP */}
                      <div className="border border-accent rounded-lg p-4 hover:border-accent/80 transition-colors bg-accent/5">
                        <div className="flex justify-between items-start mb-2">
                          <span className="font-medium text-accent-foreground flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            VIP
                          </span>
                          <Badge
                            variant={match.availability.vip > 20 ? "secondary" : "destructive"}
                            className="text-xs"
                          >
                            {match.availability.vip}% dispo
                          </Badge>
                        </div>
                        <div className="text-2xl font-bold text-accent-foreground mb-3">{match.prices.vip} MAD</div>
                        <Button
                          size="sm"
                          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                          onClick={() => addToCart(match.id, "vip")}
                        >
                          Ajouter
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
