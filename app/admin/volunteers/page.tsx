"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Users, Search, CheckCircle, XCircle, Mail, Phone, MapPin, UserCheck, UserX, Clock, Loader2 } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import type { Benevole } from "@/lib/supabase"

const missionStats = [
  { mission: "accueil", label: "Accueil", count: 850, target: 1000 },
  { mission: "securite", label: "Securite", count: 620, target: 800 },
  { mission: "logistique", label: "Transport", count: 340, target: 400 },
  { mission: "media", label: "Media", count: 180, target: 200 },
  { mission: "medical", label: "Medical", count: 95, target: 100 },
  { mission: "billetterie", label: "Logistique", count: 280, target: 300 },
]

const missionLabels: Record<string, string> = {
  accueil: "Accueil",
  securite: "Securite",
  logistique: "Logistique",
  medical: "Medical",
  communication: "Communication",
  media: "Media",
  billetterie: "Billetterie",
  info: "Information",
}

const cityLabels: Record<string, string> = {
  casablanca: "Casablanca",
  rabat: "Rabat",
  marrakech: "Marrakech",
  tanger: "Tanger",
  fes: "Fes",
  agadir: "Agadir",
}

export default function VolunteersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [filterMission, setFilterMission] = useState("all")
  const [volunteers, setVolunteers] = useState<Benevole[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isUpdating, setIsUpdating] = useState(false)

  const fetchVolunteers = async () => {
    setIsLoading(true)
    try {
      const params = new URLSearchParams()
      if (filterStatus !== "all") params.append("status", filterStatus)
      if (filterMission !== "all") params.append("mission", filterMission)
      if (searchQuery) params.append("search", searchQuery)

      const response = await fetch(`/api/volunteers?${params.toString()}`)
      const data = await response.json()

      if (response.ok) {
        setVolunteers(data.volunteers)
      } else {
        console.error("Failed to fetch volunteers:", data.error)
      }
    } catch (error) {
      console.error("Error fetching volunteers:", error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchVolunteers()
  }, [filterStatus, filterMission])

  const handleSearch = () => {
    fetchVolunteers()
  }

  const handleUpdateStatus = async (id: string, status: "approved" | "rejected") => {
    setIsUpdating(true)
    try {
      const response = await fetch("/api/volunteers", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status }),
      })

      if (response.ok) {
        fetchVolunteers()
      } else {
        console.error("Failed to update volunteer status")
      }
    } catch (error) {
      console.error("Error updating volunteer status:", error)
    } finally {
      setIsUpdating(false)
    }
  }

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

  const statusCounts = {
    total: volunteers.length,
    approved: volunteers.filter((v) => v.status === "approved").length,
    pending: volunteers.filter((v) => v.status === "pending").length,
    rejected: volunteers.filter((v) => v.status === "rejected").length,
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
                <p className="text-2xl font-bold mt-1">{statusCounts.total}</p>
                <p className="text-xs text-secondary mt-1">candidatures recues</p>
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
                <p className="text-2xl font-bold mt-1">{statusCounts.approved}</p>
                <p className="text-xs text-secondary mt-1">
                  {statusCounts.total > 0 ? Math.round((statusCounts.approved / statusCounts.total) * 100) : 0}% du
                  total
                </p>
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
                <p className="text-2xl font-bold mt-1">{statusCounts.pending}</p>
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
                <p className="text-2xl font-bold mt-1">{statusCounts.rejected}</p>
                <p className="text-xs text-destructive mt-1">
                  {statusCounts.total > 0 ? Math.round((statusCounts.rejected / statusCounts.total) * 100) : 0}% du
                  total
                </p>
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
                <span>{stat.label}</span>
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
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
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
                <SelectItem value="accueil">Accueil</SelectItem>
                <SelectItem value="securite">Securite</SelectItem>
                <SelectItem value="logistique">Logistique</SelectItem>
                <SelectItem value="media">Media</SelectItem>
                <SelectItem value="medical">Medical</SelectItem>
                <SelectItem value="communication">Communication</SelectItem>
                <SelectItem value="billetterie">Billetterie</SelectItem>
                <SelectItem value="info">Information</SelectItem>
              </SelectContent>
            </Select>
            <Button onClick={handleSearch} variant="outline" className="bg-transparent">
              <Search className="h-4 w-4 mr-2" />
              Rechercher
            </Button>
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
          <CardDescription>{volunteers.length} candidats trouves</CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : volunteers.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">Aucun benevole trouve</div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Benevole</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Ville</TableHead>
                  <TableHead>Mission</TableHead>
                  <TableHead>Langues</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {volunteers.map((volunteer) => (
                  <TableRow key={volunteer.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback className="bg-primary/10 text-primary">
                            {volunteer.first_name[0]}
                            {volunteer.last_name[0]}
                          </AvatarFallback>
                        </Avatar>
                        <span className="font-medium">
                          {volunteer.first_name} {volunteer.last_name}
                        </span>
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
                        {cityLabels[volunteer.city] || volunteer.city}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{missionLabels[volunteer.mission] || volunteer.mission}</Badge>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {Array.isArray(volunteer.languages) ? volunteer.languages.length : 0} langue
                      {Array.isArray(volunteer.languages) && volunteer.languages.length > 1 ? "s" : ""}
                    </TableCell>
                    <TableCell>{getStatusBadge(volunteer.status)}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        {volunteer.status === "pending" && (
                          <>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="text-secondary"
                              onClick={() => handleUpdateStatus(volunteer.id, "approved")}
                              disabled={isUpdating}
                            >
                              <CheckCircle className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="text-destructive"
                              onClick={() => handleUpdateStatus(volunteer.id, "rejected")}
                              disabled={isUpdating}
                            >
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
          )}
        </CardContent>
      </Card>
    </div>
  )
}
