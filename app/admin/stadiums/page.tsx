import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Building2, MapPin, Users, Calendar, Edit, Eye } from "lucide-react"
import Image from "next/image"

const stadiums = [
  {
    id: 1,
    name: "Stade Mohammed V",
    city: "Casablanca",
    capacity: 67000,
    matches: 8,
    status: "ready",
    image: "/images/stadium-casablanca.jpg",
  },
  {
    id: 2,
    name: "Complexe Sportif Moulay Abdellah",
    city: "Rabat",
    capacity: 52000,
    matches: 10,
    status: "ready",
    image: "/images/stadium-rabat.jpg",
  },
  {
    id: 3,
    name: "Stade de Marrakech",
    city: "Marrakech",
    capacity: 45000,
    matches: 8,
    status: "ready",
    image: "/images/stadium-marrakech.jpg",
  },
  {
    id: 4,
    name: "Grand Stade de Tanger",
    city: "Tanger",
    capacity: 45000,
    matches: 8,
    status: "renovation",
    image: "/images/stadium-tanger.jpg",
  },
  {
    id: 5,
    name: "Stade de Fes",
    city: "Fes",
    capacity: 45000,
    matches: 9,
    status: "ready",
    image: "/images/stadium-fes.jpg",
  },
  {
    id: 6,
    name: "Stade Adrar",
    city: "Agadir",
    capacity: 45000,
    matches: 9,
    status: "ready",
    image: "/images/stadium-agadir.jpg",
  },
]

export default function StadiumsPage() {
  const totalCapacity = stadiums.reduce((sum, s) => sum + s.capacity, 0)
  const totalMatches = stadiums.reduce((sum, s) => sum + s.matches, 0)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground" style={{ fontFamily: "var(--font-bebas)" }}>
          GESTION DES STADES
        </h1>
        <p className="text-muted-foreground mt-1">Informations sur les 6 stades de la CAN 2025</p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total stades</p>
                <p className="text-2xl font-bold mt-1">6</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Capacite totale</p>
                <p className="text-2xl font-bold mt-1">{totalCapacity.toLocaleString()}</p>
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
                <p className="text-sm text-muted-foreground">Total matchs</p>
                <p className="text-2xl font-bold mt-1">{totalMatches}</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Calendar className="h-6 w-6 text-accent" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Stadiums Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {stadiums.map((stadium) => (
          <Card key={stadium.id} className="overflow-hidden">
            <div className="aspect-video relative">
              <Image
                src={stadium.image || "/placeholder.svg"}
                alt={stadium.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <Badge
                className={`absolute top-3 right-3 ${
                  stadium.status === "ready"
                    ? "bg-secondary text-secondary-foreground"
                    : "bg-accent text-accent-foreground"
                }`}
              >
                {stadium.status === "ready" ? "Pret" : "En renovation"}
              </Badge>
            </div>
            <CardHeader>
              <CardTitle className="text-lg">{stadium.name}</CardTitle>
              <CardDescription className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {stadium.city}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center p-3 bg-muted rounded-lg">
                  <p className="text-2xl font-bold text-primary">{stadium.capacity.toLocaleString()}</p>
                  <p className="text-xs text-muted-foreground">Capacite</p>
                </div>
                <div className="text-center p-3 bg-muted rounded-lg">
                  <p className="text-2xl font-bold text-secondary">{stadium.matches}</p>
                  <p className="text-xs text-muted-foreground">Matchs</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="flex-1 bg-transparent" size="sm">
                  <Eye className="h-4 w-4 mr-2" />
                  Details
                </Button>
                <Button variant="outline" size="sm">
                  <Edit className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
