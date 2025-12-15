import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, Edit, Eye } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CountryFlag } from "@/components/ui/country-flag"

const matches = [
  {
    id: 1,
    teamA: { name: "Maroc", code: "MAR" },
    teamB: { name: "Mali", code: "MLI" },
    date: "21 Dec 2025",
    time: "20:00",
    stadium: "Stade Mohammed V",
    ticketsSold: 45000,
    capacity: 67000,
    status: "confirmed",
  },
  {
    id: 2,
    teamA: { name: "Senegal", code: "SEN" },
    teamB: { name: "Cameroun", code: "CMR" },
    date: "22 Dec 2025",
    time: "17:00",
    stadium: "Complexe Moulay Abdellah",
    ticketsSold: 38000,
    capacity: 52000,
    status: "confirmed",
  },
  {
    id: 3,
    teamA: { name: "Nigeria", code: "NGA" },
    teamB: { name: "Egypte", code: "EGY" },
    date: "22 Dec 2025",
    time: "20:00",
    stadium: "Grand Stade de Tanger",
    ticketsSold: 28000,
    capacity: 45000,
    status: "pending",
  },
  {
    id: 4,
    teamA: { name: "Algerie", code: "ALG" },
    teamB: { name: "Cote d'Ivoire", code: "CIV" },
    date: "23 Dec 2025",
    time: "17:00",
    stadium: "Stade de Marrakech",
    ticketsSold: 32000,
    capacity: 45000,
    status: "confirmed",
  },
]

export function UpcomingMatchesAdmin() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Prochains matchs</CardTitle>
          <CardDescription>Gestion des matchs a venir</CardDescription>
        </div>
        <Button variant="outline" size="sm">
          Voir tout
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Match</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Stade</TableHead>
              <TableHead>Billets</TableHead>
              <TableHead>Statut</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {matches.map((match) => (
              <TableRow key={match.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <CountryFlag code={match.teamA.code} size="sm" />
                    <span>{match.teamA.name}</span>
                    <span className="text-muted-foreground">vs</span>
                    <CountryFlag code={match.teamB.code} size="sm" />
                    <span>{match.teamB.name}</span>
                  </div>
                </TableCell>
                <TableCell>
                  {match.date}
                  <br />
                  <span className="text-muted-foreground text-sm">{match.time}</span>
                </TableCell>
                <TableCell className="max-w-[150px] truncate">{match.stadium}</TableCell>
                <TableCell>
                  <div className="flex flex-col">
                    <span>
                      {match.ticketsSold.toLocaleString()} / {match.capacity.toLocaleString()}
                    </span>
                    <div className="w-full bg-muted rounded-full h-1.5 mt-1">
                      <div
                        className="bg-primary h-1.5 rounded-full"
                        style={{ width: `${(match.ticketsSold / match.capacity) * 100}%` }}
                      />
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant={match.status === "confirmed" ? "default" : "secondary"}>
                    {match.status === "confirmed" ? "Confirme" : "En attente"}
                  </Badge>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Eye className="h-4 w-4 mr-2" />
                        Voir
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Edit className="h-4 w-4 mr-2" />
                        Modifier
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
