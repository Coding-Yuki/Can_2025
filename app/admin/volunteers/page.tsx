"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Users, Search, CheckCircle, XCircle, Mail, Phone, MapPin, UserCheck, UserX, Clock } from "lucide-react"
import { Progress } from "@/components/ui/progress"

const volunteers = [
  {
    id: 1,
    name: "Amina Benali",
    email: "amina@email.com",
    phone: "+212 612345678",
    city: "Rabat",
    mission: "Accueil",
    status: "approved",
    availability: "Full-time",
  },
  {
    id: 2,
    name: "Hassan Elmourid",
    email: "hassan@email.com",
    phone: "+212 623456789",
    city: "Casablanca",
    mission: "Securite",
    status: "pending",
    availability: "Weekend",
  },
  {
    id: 3,
    name: "Nadia Alaoui",
    email: "nadia@email.com",
    phone: "+212 634567890",
    city: "Marrakech",
    mission: "Transport",
    status: "approved",
    availability: "Full-time",
  },
  {
    id: 4,
    name: "Karim Fassi",
    email: "karim@email.com",
    phone: "+212 645678901",
    city: "Fes",
    mission: "Media",
    status: "rejected",
    availability: "Part-time",
  },
  {
    id: 5,
    name: "Fatima Benhaddou",
    email: "fatima@email.com",
    phone: "+212 656789012",
    city: "Tanger",
    mission: "Medical",
    status: "approved",
    availability: "Full-time",
  },
  {
    id: 6,
    name: "Youssef Mansouri",
    email: "youssef@email.com",
    phone: "+212 667890123",
    city: "Agadir",
    mission: "Logistique",
    status: "pending",
    availability: "Weekend",
  },
]

const missionStats = [
  { mission: "Accueil", count: 850, target: 1000 },
  { mission: "Securite", count: 620, target: 800 },
  { mission: "Transport", count: 340, target: 400 },
  { mission: "Media", count: 180, target: 200 },
  { mission: "Medical", count: 95, target: 100 },
  { mission: "Logistique", count: 280, target: 300 },
]

export default function VolunteersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [filterMission, setFilterMission] = useState("all")

  const filteredVolunteers = volunteers.filter((volunteer) => {
    const matchesSearch =
      volunteer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      volunteer.email.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = filterStatus === "all" || volunteer.status === filterStatus
    const matchesMission = filterMission === "all" || volunteer.mission === filterMission
    return matchesSearch && matchesStatus && matchesMission
  })

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return <Badge className="bg-secondary text-secondary-foreground">Approuve</Badge>
      case "pending":
        return <Badge className="bg-accent text-accent-foreground">En attente</Badge>
      case "rejected":
        return <Badge variant="destructive">Refuse</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const totalVolunteers = missionStats.reduce((sum, m) => sum + m.count, 0)
  const totalTarget = missionStats.reduce((sum, m) => sum + m.target, 0)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground" style={{ fontFamily: "var(--font-bebas)" }}>
          GESTION DES BENEVOLES
        </h1>
        <p className="text-muted-foreground mt-1">Gerez les candidatures et les affectations des benevoles</p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total benevoles</p>
                <p className="text-2xl font-bold mt-1">{totalVolunteers}</p>
                <p className="text-xs text-secondary mt-1">sur {totalTarget} cibles</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Approuves</p>
                <p className="text-2xl font-bold mt-1">2,365</p>
                <p className="text-xs text-secondary mt-1">80% du total</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center">
                <UserCheck className="h-6 w-6 text-secondary" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">En attente</p>
                <p className="text-2xl font-bold mt-1">458</p>
                <p className="text-xs text-accent mt-1">A traiter</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Clock className="h-6 w-6 text-accent" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Refuses</p>
                <p className="text-2xl font-bold mt-1">142</p>
                <p className="text-xs text-destructive mt-1">5% du total</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-destructive/10 flex items-center justify-center">
                <UserX className="h-6 w-6 text-destructive" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Mission Progress */}
      <Card>
        <CardHeader>
          <CardTitle>Recrutement par mission</CardTitle>
          <CardDescription>Progression vers les objectifs de recrutement</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {missionStats.map((stat) => (
            <div key={stat.mission} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>{stat.mission}</span>
                <span className="text-muted-foreground">
                  {stat.count}/{stat.target}
                </span>
              </div>
              <Progress value={(stat.count / stat.target) * 100} className="h-2" />
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Rechercher par nom ou email..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Filtrer par statut" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les statuts</SelectItem>
                <SelectItem value="approved">Approuve</SelectItem>
                <SelectItem value="pending">En attente</SelectItem>
                <SelectItem value="rejected">Refuse</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterMission} onValueChange={setFilterMission}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Filtrer par mission" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes les missions</SelectItem>
                <SelectItem value="Accueil">Accueil</SelectItem>
                <SelectItem value="Securite">Securite</SelectItem>
                <SelectItem value="Transport">Transport</SelectItem>
                <SelectItem value="Media">Media</SelectItem>
                <SelectItem value="Medical">Medical</SelectItem>
                <SelectItem value="Logistique">Logistique</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Volunteers Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            Liste des candidats
          </CardTitle>
          <CardDescription>{filteredVolunteers.length} candidats trouves</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Benevole</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Ville</TableHead>
                <TableHead>Mission</TableHead>
                <TableHead>Disponibilite</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredVolunteers.map((volunteer) => (
                <TableRow key={volunteer.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback className="bg-primary/10 text-primary">
                          {volunteer.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{volunteer.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm">
                        <Mail className="h-3 w-3 text-muted-foreground" />
                        {volunteer.email}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Phone className="h-3 w-3" />
                        {volunteer.phone}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      {volunteer.city}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{volunteer.mission}</Badge>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">{volunteer.availability}</TableCell>
                  <TableCell>{getStatusBadge(volunteer.status)}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      {volunteer.status === "pending" && (
                        <>
                          <Button variant="ghost" size="icon" className="text-secondary">
                            <CheckCircle className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="text-destructive">
                            <XCircle className="h-4 w-4" />
                          </Button>
                        </>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
