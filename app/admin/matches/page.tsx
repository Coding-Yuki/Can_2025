"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Plus, Search, Edit, Trash2, Clock, MapPin } from "lucide-react"

const initialMatches = [
  {
    id: 1,
    homeTeam: "Maroc",
    awayTeam: "Mali",
    date: "21/12/2025",
    time: "20:00",
    stadium: "Rabat",
    group: "A",
    status: "scheduled",
  },
  {
    id: 2,
    homeTeam: "Zambie",
    awayTeam: "Comores",
    date: "21/12/2025",
    time: "17:00",
    stadium: "Marrakech",
    group: "A",
    status: "scheduled",
  },
  {
    id: 3,
    homeTeam: "Egypte",
    awayTeam: "Afrique du Sud",
    date: "22/12/2025",
    time: "20:00",
    stadium: "Casablanca",
    group: "B",
    status: "scheduled",
  },
  {
    id: 4,
    homeTeam: "Nigeria",
    awayTeam: "Tunisie",
    date: "22/12/2025",
    time: "17:00",
    stadium: "Tanger",
    group: "C",
    status: "scheduled",
  },
  {
    id: 5,
    homeTeam: "Senegal",
    awayTeam: "RD Congo",
    date: "23/12/2025",
    time: "20:00",
    stadium: "Fes",
    group: "D",
    status: "scheduled",
  },
  {
    id: 6,
    homeTeam: "Algerie",
    awayTeam: "Burkina Faso",
    date: "23/12/2025",
    time: "17:00",
    stadium: "Agadir",
    group: "E",
    status: "scheduled",
  },
  {
    id: 7,
    homeTeam: "Cote d Ivoire",
    awayTeam: "Cameroun",
    date: "24/12/2025",
    time: "20:00",
    stadium: "Rabat",
    group: "F",
    status: "scheduled",
  },
]

const stadiums = ["Rabat", "Casablanca", "Marrakech", "Tanger", "Fes", "Agadir"]
const groups = ["A", "B", "C", "D", "E", "F"]

export default function MatchesPage() {
  const [matches, setMatches] = useState(initialMatches)
  const [searchQuery, setSearchQuery] = useState("")
  const [filterGroup, setFilterGroup] = useState("all")
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingMatch, setEditingMatch] = useState<(typeof initialMatches)[0] | null>(null)

  const filteredMatches = matches.filter((match) => {
    const matchesSearch =
      match.homeTeam.toLowerCase().includes(searchQuery.toLowerCase()) ||
      match.awayTeam.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesGroup = filterGroup === "all" || match.group === filterGroup
    return matchesSearch && matchesGroup
  })

  const handleDeleteMatch = (id: number) => {
    setMatches(matches.filter((m) => m.id !== id))
  }

  const handleEditMatch = (match: (typeof initialMatches)[0]) => {
    setEditingMatch(match)
    setIsDialogOpen(true)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground" style={{ fontFamily: "var(--font-bebas)" }}>
            GESTION DES MATCHS
          </h1>
          <p className="text-muted-foreground mt-1">Gerez le calendrier des matchs de la CAN 2025</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-primary hover:bg-primary/90" onClick={() => setEditingMatch(null)}>
              <Plus className="mr-2 h-4 w-4" />
              Ajouter un match
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{editingMatch ? "Modifier le match" : "Ajouter un nouveau match"}</DialogTitle>
              <DialogDescription>Remplissez les informations du match</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Equipe domicile</Label>
                  <Input placeholder="ex: Maroc" defaultValue={editingMatch?.homeTeam} />
                </div>
                <div className="space-y-2">
                  <Label>Equipe exterieur</Label>
                  <Input placeholder="ex: Mali" defaultValue={editingMatch?.awayTeam} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Date</Label>
                  <Input type="date" defaultValue={editingMatch?.date} />
                </div>
                <div className="space-y-2">
                  <Label>Heure</Label>
                  <Input type="time" defaultValue={editingMatch?.time} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Stade</Label>
                  <Select defaultValue={editingMatch?.stadium}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choisir un stade" />
                    </SelectTrigger>
                    <SelectContent>
                      {stadiums.map((stadium) => (
                        <SelectItem key={stadium} value={stadium}>
                          {stadium}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Groupe</Label>
                  <Select defaultValue={editingMatch?.group}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choisir un groupe" />
                    </SelectTrigger>
                    <SelectContent>
                      {groups.map((group) => (
                        <SelectItem key={group} value={group}>
                          Groupe {group}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Annuler
              </Button>
              <Button onClick={() => setIsDialogOpen(false)}>{editingMatch ? "Sauvegarder" : "Ajouter"}</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Rechercher par equipe..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select value={filterGroup} onValueChange={setFilterGroup}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Filtrer par groupe" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les groupes</SelectItem>
                {groups.map((group) => (
                  <SelectItem key={group} value={group}>
                    Groupe {group}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Matches Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            Calendrier des Matchs
          </CardTitle>
          <CardDescription>{filteredMatches.length} matchs trouves</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Match</TableHead>
                <TableHead>Date & Heure</TableHead>
                <TableHead>Stade</TableHead>
                <TableHead>Groupe</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredMatches.map((match) => (
                <TableRow key={match.id}>
                  <TableCell className="font-medium">
                    {match.homeTeam} vs {match.awayTeam}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      {match.date} a {match.time}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      {match.stadium}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">Groupe {match.group}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className="bg-secondary text-secondary-foreground">Planifie</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon" onClick={() => handleEditMatch(match)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-destructive"
                        onClick={() => handleDeleteMatch(match.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
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
