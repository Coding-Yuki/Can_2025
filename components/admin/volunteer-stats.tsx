"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"

const data = [
  { name: "Accueil", value: 1200, color: "oklch(0.35 0.15 15)" },
  { name: "Securite", value: 800, color: "oklch(0.4 0.12 155)" },
  { name: "Logistique", value: 650, color: "oklch(0.75 0.15 85)" },
  { name: "Medical", value: 400, color: "oklch(0.55 0.22 25)" },
  { name: "Communication", value: 500, color: "oklch(0.6 0.1 250)" },
  { name: "Autres", value: 297, color: "oklch(0.5 0.05 30)" },
]

export function VolunteerStats() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Repartition des benevoles</CardTitle>
        <CardDescription>Par type de mission</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={2}
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                labelLine={false}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
