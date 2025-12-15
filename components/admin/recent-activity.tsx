import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Ticket, Users, Calendar, Settings } from "lucide-react"

const activities = [
  {
    id: 1,
    type: "ticket",
    icon: Ticket,
    title: "Achat de billets",
    description: "12 billets achetes pour Maroc-Mali",
    time: "Il y a 5 min",
    user: "Ahmed M.",
  },
  {
    id: 2,
    type: "volunteer",
    icon: Users,
    title: "Nouvelle candidature",
    description: "Demande pour mission Accueil",
    time: "Il y a 15 min",
    user: "Fatima B.",
  },
  {
    id: 3,
    type: "match",
    icon: Calendar,
    title: "Match modifie",
    description: "Horaire Senegal-Cameroun mis a jour",
    time: "Il y a 1h",
    user: "Admin",
  },
  {
    id: 4,
    type: "settings",
    icon: Settings,
    title: "Configuration",
    description: "Prix des billets VIP modifies",
    time: "Il y a 2h",
    user: "Admin",
  },
  {
    id: 5,
    type: "ticket",
    icon: Ticket,
    title: "Remboursement",
    description: "2 billets rembourses",
    time: "Il y a 3h",
    user: "Support",
  },
]

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Activite recente</CardTitle>
        <CardDescription>Dernieres actions sur la plateforme</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-3">
              <Avatar className="h-9 w-9 bg-muted">
                <AvatarFallback className="bg-primary/10">
                  <activity.icon className="h-4 w-4 text-primary" />
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground">{activity.title}</p>
                <p className="text-sm text-muted-foreground truncate">{activity.description}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs text-muted-foreground">{activity.time}</span>
                  <span className="text-xs text-muted-foreground">•</span>
                  <span className="text-xs text-muted-foreground">{activity.user}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
