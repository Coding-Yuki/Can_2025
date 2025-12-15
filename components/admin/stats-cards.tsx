import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Ticket, Users, Calendar, TrendingUp, ArrowUpRight, ArrowDownRight } from "lucide-react"

const stats = [
  {
    title: "Billets vendus",
    value: "24,532",
    change: "+12.5%",
    trend: "up",
    icon: Ticket,
    description: "vs. mois dernier",
  },
  {
    title: "Benevoles inscrits",
    value: "3,847",
    change: "+8.2%",
    trend: "up",
    icon: Users,
    description: "vs. mois dernier",
  },
  {
    title: "Matchs programmes",
    value: "52",
    change: "0%",
    trend: "neutral",
    icon: Calendar,
    description: "Phase de groupes + KO",
  },
  {
    title: "Revenu total",
    value: "€2.4M",
    change: "+18.3%",
    trend: "up",
    icon: TrendingUp,
    description: "vs. mois dernier",
  },
]

export function StatsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <stat.icon className="h-5 w-5 text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold" style={{ fontFamily: "var(--font-bebas)" }}>
              {stat.value}
            </div>
            <div className="flex items-center gap-1 mt-1">
              {stat.trend === "up" && <ArrowUpRight className="h-4 w-4 text-secondary" />}
              {stat.trend === "down" && <ArrowDownRight className="h-4 w-4 text-destructive" />}
              <span
                className={
                  stat.trend === "up"
                    ? "text-secondary text-sm font-medium"
                    : stat.trend === "down"
                      ? "text-destructive text-sm font-medium"
                      : "text-muted-foreground text-sm"
                }
              >
                {stat.change}
              </span>
              <span className="text-muted-foreground text-sm">{stat.description}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
