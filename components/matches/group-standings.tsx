import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CountryFlag } from "@/components/ui/country-flag"

const groups = {
  A: {
    teams: [
      { name: "Maroc", code: "MAR", played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, points: 0 },
      { name: "Mali", code: "MLI", played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, points: 0 },
      { name: "Comores", code: "COM", played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, points: 0 },
      { name: "Zambie", code: "ZAM", played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, points: 0 },
    ],
  },
  B: {
    teams: [
      { name: "Senegal", code: "SEN", played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, points: 0 },
      { name: "Cameroun", code: "CMR", played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, points: 0 },
      { name: "Guinee", code: "GUI", played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, points: 0 },
      { name: "Angola", code: "ANG", played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, points: 0 },
    ],
  },
  C: {
    teams: [
      { name: "Nigeria", code: "NGA", played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, points: 0 },
      { name: "Egypte", code: "EGY", played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, points: 0 },
      { name: "Cap-Vert", code: "CPV", played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, points: 0 },
      { name: "Guinee-Bissau", code: "GNB", played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, points: 0 },
    ],
  },
  D: {
    teams: [
      { name: "Algerie", code: "ALG", played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, points: 0 },
      { name: "Cote d'Ivoire", code: "CIV", played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, points: 0 },
      { name: "RD Congo", code: "COD", played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, points: 0 },
      { name: "Gabon", code: "GAB", played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, points: 0 },
    ],
  },
}

export function GroupStandings() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {Object.entries(groups).map(([groupName, group]) => (
        <Card key={groupName}>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2">
              <span className="h-8 w-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold">
                {groupName}
              </span>
              <span>Groupe {groupName}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[40px]">#</TableHead>
                  <TableHead>Equipe</TableHead>
                  <TableHead className="text-center w-[40px]">J</TableHead>
                  <TableHead className="text-center w-[40px]">G</TableHead>
                  <TableHead className="text-center w-[40px]">N</TableHead>
                  <TableHead className="text-center w-[40px]">P</TableHead>
                  <TableHead className="text-center w-[50px]">DB</TableHead>
                  <TableHead className="text-center w-[50px]">Pts</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {group.teams.map((team, index) => (
                  <TableRow key={team.code}>
                    <TableCell className="font-medium">{index + 1}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <CountryFlag code={team.code} size="sm" />
                        <span className="font-medium">{team.code}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-center">{team.played}</TableCell>
                    <TableCell className="text-center">{team.won}</TableCell>
                    <TableCell className="text-center">{team.drawn}</TableCell>
                    <TableCell className="text-center">{team.lost}</TableCell>
                    <TableCell className="text-center">{team.gd}</TableCell>
                    <TableCell className="text-center font-bold">{team.points}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
