"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Filter, X } from "lucide-react"

const phases = [
  { id: "group", label: "Phase de groupes" },
  { id: "round16", label: "8emes de finale" },
  { id: "quarter", label: "Quarts de finale" },
  { id: "semi", label: "Demi-finales" },
  { id: "third", label: "Match 3eme place" },
  { id: "final", label: "Finale" },
]

const groups = ["A", "B", "C", "D", "E", "F"]

const cities = [
  { id: "casablanca", label: "Casablanca" },
  { id: "rabat", label: "Rabat" },
  { id: "marrakech", label: "Marrakech" },
  { id: "tanger", label: "Tanger" },
  { id: "fes", label: "Fes" },
  { id: "agadir", label: "Agadir" },
]

export function MatchFilters() {
  const [selectedPhases, setSelectedPhases] = useState<string[]>([])
  const [selectedGroup, setSelectedGroup] = useState<string>("")
  const [selectedCity, setSelectedCity] = useState<string>("")

  const togglePhase = (phaseId: string) => {
    setSelectedPhases((prev) => (prev.includes(phaseId) ? prev.filter((p) => p !== phaseId) : [...prev, phaseId]))
  }

  const clearFilters = () => {
    setSelectedPhases([])
    setSelectedGroup("")
    setSelectedCity("")
  }

  const hasFilters = selectedPhases.length > 0 || selectedGroup || selectedCity

  return (
    <Card className="sticky top-24">
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Filter className="h-5 w-5" />
          Filtres
        </CardTitle>
        {hasFilters && (
          <Button variant="ghost" size="sm" onClick={clearFilters} className="h-8 px-2 text-muted-foreground">
            <X className="h-4 w-4 mr-1" />
            Effacer
          </Button>
        )}
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Phase filter */}
        <div className="space-y-3">
          <Label className="text-sm font-medium">Phase de competition</Label>
          <div className="space-y-2">
            {phases.map((phase) => (
              <div key={phase.id} className="flex items-center gap-2">
                <Checkbox
                  id={phase.id}
                  checked={selectedPhases.includes(phase.id)}
                  onCheckedChange={() => togglePhase(phase.id)}
                />
                <Label htmlFor={phase.id} className="text-sm font-normal cursor-pointer">
                  {phase.label}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Group filter */}
        <div className="space-y-3">
          <Label className="text-sm font-medium">Groupe</Label>
          <Select value={selectedGroup} onValueChange={setSelectedGroup}>
            <SelectTrigger>
              <SelectValue placeholder="Tous les groupes" />
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

        {/* City filter */}
        <div className="space-y-3">
          <Label className="text-sm font-medium">Ville</Label>
          <Select value={selectedCity} onValueChange={setSelectedCity}>
            <SelectTrigger>
              <SelectValue placeholder="Toutes les villes" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Toutes les villes</SelectItem>
              {cities.map((city) => (
                <SelectItem key={city.id} value={city.id}>
                  {city.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button className="w-full bg-primary hover:bg-primary/90">Appliquer les filtres</Button>
      </CardContent>
    </Card>
  )
}
