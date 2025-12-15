import { Calendar, Ticket, Users, Shield, BarChart3, Globe } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: Calendar,
    title: "Calendrier des matchs",
    description: "Consultez tous les matchs, phases de groupes et eliminatoires avec les horaires officiels.",
    color: "bg-primary",
  },
  {
    icon: Ticket,
    title: "Billetterie en ligne",
    description: "Reservez vos places pour tous les matchs de la competition en quelques clics.",
    color: "bg-secondary",
  },
  {
    icon: Users,
    title: "Espace benevoles",
    description: "Rejoignez notre equipe de benevoles et participez a l'organisation de l'evenement.",
    color: "bg-accent",
  },
  {
    icon: Shield,
    title: "Securite",
    description: "Systeme securise avec authentification robuste et protection des donnees.",
    color: "bg-primary",
  },
  {
    icon: BarChart3,
    title: "Dashboard Admin",
    description: "Tableau de bord complet pour la gestion des matchs, billets et benevoles.",
    color: "bg-secondary",
  },
  {
    icon: Globe,
    title: "Multi-langue",
    description: "Interface disponible en francais, arabe et anglais pour tous les visiteurs.",
    color: "bg-accent",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-bebas)" }}>
            TOUT POUR LA CAN 2025
          </h2>
          <p className="text-lg text-muted-foreground">
            Une plateforme complete pour vivre la Coupe d&apos;Afrique des Nations au Maroc
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30"
            >
              <CardHeader>
                <div
                  className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
