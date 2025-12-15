import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Shield, Truck, Heart, MessageSquare, Camera, Ticket, HelpCircle } from "lucide-react"

const missions = [
  {
    icon: Users,
    title: "Accueil & Orientation",
    description: "Accueillir et orienter les spectateurs, delegations et medias dans les stades et zones officielles.",
    spots: 1200,
    color: "bg-primary",
  },
  {
    icon: Shield,
    title: "Securite & Controle",
    description: "Assister les equipes de securite pour le controle des acces et la gestion des flux de spectateurs.",
    spots: 800,
    color: "bg-secondary",
  },
  {
    icon: Truck,
    title: "Logistique & Transport",
    description: "Coordonner le transport des equipes, gerer les equipements et assurer la logistique des evenements.",
    spots: 650,
    color: "bg-accent",
  },
  {
    icon: Heart,
    title: "Services Medicaux",
    description: "Assister les equipes medicales, orienter vers les postes de secours et gerer les premiers soins.",
    spots: 400,
    color: "bg-destructive",
  },
  {
    icon: MessageSquare,
    title: "Communication",
    description:
      "Gerer les reseaux sociaux, assister les journalistes et communiquer avec le public pendant l'evenement.",
    spots: 500,
    color: "bg-primary",
  },
  {
    icon: Camera,
    title: "Media & Presse",
    description: "Accompagner les medias, gerer les zones de presse et assister lors des conferences.",
    spots: 300,
    color: "bg-secondary",
  },
  {
    icon: Ticket,
    title: "Billetterie",
    description: "Assister les spectateurs pour l'achat et la validation des billets aux guichets et entrees.",
    spots: 450,
    color: "bg-accent",
  },
  {
    icon: HelpCircle,
    title: "Information Generale",
    description: "Repondre aux questions des visiteurs, distribuer les programmes et fournir des informations.",
    spots: 700,
    color: "bg-primary",
  },
]

export function VolunteerMissions() {
  return (
    <section id="missions" className="py-16 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-bebas)" }}>
            NOS MISSIONS
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choisissez la mission qui correspond a vos competences et interets. Chaque role est essentiel au succes de
            la CAN 2025.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {missions.map((mission, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div
                  className={`w-12 h-12 rounded-lg ${mission.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <mission.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{mission.title}</CardTitle>
                  <Badge variant="secondary" className="text-xs">
                    {mission.spots} postes
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">{mission.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
