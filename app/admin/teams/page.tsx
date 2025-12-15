"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Trophy, Search, Users, Flag, Eye } from "lucide-react"

const groups = {
  A: [
    { name: "Maroc", flag: "🇲🇦", ranking: 14, titles: 1, coach: "Walid Regragui" },
    { name: "Mali", flag: "🇲🇱", ranking: 48, titles: 0, coach: "Eric Chelle" },
    { name: "Zambie", flag: "🇿🇲", ranking: 87, titles: 1, coach: "Avram Grant" },
    { name: "Comores", flag: "🇰🇲", ranking: 106, titles: 0, coach: "Stefano Cusin" },
  ],
  B: [
    { name: "Egypte", flag: "🇪🇬", ranking: 36, titles: 7, coach: "Hossam Hassan" },
    { name: "Afrique du Sud", flag: "🇿🇦", ranking: 59, titles: 1, coach: "Hugo Broos" },
    { name: "Angola", flag: "🇦🇴", ranking: 95, titles: 0, coach: "Pedro Goncalves" },
    { name: "Zimbabwe", flag: "🇿🇼", ranking: 116, titles: 0, coach: "Michael Nees" },
  ],
  C: [
    { name: "Nigeria", flag: "🇳🇬", ranking: 28, titles: 3, coach: "Eric Chelle" },
    { name: "Tunisie", flag: "🇹🇳", ranking: 40, titles: 1, coach: "Faouzi Benzarti" },
    { name: "Ouganda", flag: "🇺🇬", ranking: 83, titles: 0, coach: "Paul Put" },
    { name: "Tanzanie", flag: "🇹🇿", ranking: 105, titles: 0, coach: "Hemed Suleiman" },
  ],
  D: [
    { name: "Senegal", flag: "🇸🇳", ranking: 17, titles: 1, coach: "Aliou Cisse" },
    { name: "RD Congo", flag: "🇨🇩", ranking: 61, titles: 2, coach: "Sebastien Desabre" },
    { name: "Benin", flag: "🇧🇯", ranking: 91, titles: 0, coach: "Gernot Rohr" },
    { name: "Botswana", flag: "🇧🇼", ranking: 144, titles: 0, coach: "Morena Ramoreboli" },
  ],
  E: [
    { name: "Algerie", flag: "🇩🇿", ranking: 32, titles: 2, coach: "Vladimir Petkovic" },
    { name: "Burkina Faso", flag: "🇧🇫", ranking: 53, titles: 0, coach: "Brama Traore" },
    { name: "Guinee Equatoriale", flag: "🇬🇶", ranking: 92, titles: 0, coach: "Juan Micha" },
    { name: "Soudan", flag: "🇸🇩", ranking: 128, titles: 0, coach: "Kwasi Appiah" },
  ],
  F: [
    { name: "Cote d Ivoire", flag: "🇨🇮", ranking: 39, titles: 3, coach: "Emerse Fae" },
    { name: "Cameroun", flag: "🇨🇲", ranking: 43, titles: 5, coach: "Marc Brys" },
    { name: "Gabon", flag: "🇬🇦", ranking: 85, titles: 0, coach: "Thierry Mouyouma" },
    { name: "Mozambique", flag: "🇲🇿", ranking: 98, titles: 0, coach: "Chiquinho Conde" },
  ],
}

export default function TeamsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const allTeams = Object.values(groups).flat()
  const filteredTeams = searchQuery
    ? allTeams.filter((team) => team.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : null

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground" style={{ fontFamily: "var(--font-bebas)" }}>
          EQUIPES QUALIFIEES
        </h1>
        <p className="text-muted-foreground mt-1">Les 24 equipes participantes a la CAN 2025</p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total equipes</p>
                <p className="text-2xl font-bold mt-1">24</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Flag className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Groupes</p>
                <p className="text-2xl font-bold mt-1">6</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center">
                <Users className="h-6 w-6 text-secondary" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Anciens champions</p>
                <p className="text-2xl font-bold mt-1">12</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Trophy className="h-6 w-6 text-accent" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="pt-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Rechercher une equipe..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Search Results */}
      {filteredTeams && (
        <Card>
          <CardHeader>
            <CardTitle>Resultats de recherche</CardTitle>
            <CardDescription>{filteredTeams.length} equipes trouvees</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredTeams.map((team) => (
                <div key={team.name} className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                  <span className="text-3xl">{team.flag}</span>
                  <div className="flex-1">
                    <p className="font-medium">{team.name}</p>
                    <p className="text-xs text-muted-foreground">Classement FIFA: {team.ranking}</p>
                  </div>
                  {team.titles > 0 && (
                    <Badge className="bg-accent text-accent-foreground">
                      <Trophy className="h-3 w-3 mr-1" />
                      {team.titles}
                    </Badge>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Groups */}
      {!filteredTeams && (
        <Tabs defaultValue="A" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            {Object.keys(groups).map((group) => (
              <TabsTrigger key={group} value={group}>
                Groupe {group}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(groups).map(([group, teams]) => (
            <TabsContent key={group} value={group}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-primary" />
                    Groupe {group}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {teams.map((team) => (
                      <Card key={team.name} className="bg-muted/50">
                        <CardContent className="pt-6">
                          <div className="flex items-start gap-4">
                            <span className="text-5xl">{team.flag}</span>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <h3 className="font-bold text-lg">{team.name}</h3>
                                {team.titles > 0 && (
                                  <Badge className="bg-accent text-accent-foreground">
                                    <Trophy className="h-3 w-3 mr-1" />
                                    {team.titles} titre{team.titles > 1 ? "s" : ""}
                                  </Badge>
                                )}
                              </div>
                              <div className="space-y-1 text-sm text-muted-foreground">
                                <p>
                                  Classement FIFA: <span className="text-foreground font-medium">{team.ranking}</span>
                                </p>
                                <p>
                                  Entraineur: <span className="text-foreground">{team.coach}</span>
                                </p>
                              </div>
                              <Button variant="outline" size="sm" className="mt-3 bg-transparent">
                                <Eye className="h-4 w-4 mr-2" />
                                Voir details
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      )}
    </div>
  )
}
