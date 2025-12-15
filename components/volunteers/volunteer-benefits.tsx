import { CheckCircle, Award, Users, Briefcase, Gift, GraduationCap } from "lucide-react"

const benefits = [
  {
    icon: Award,
    title: "Certificat officiel",
    description: "Recevez un certificat de participation signe par la CAF",
  },
  {
    icon: Gift,
    title: "Kit benevole",
    description: "Uniforme complet, sac et goodies exclusifs CAN 2025",
  },
  {
    icon: Users,
    title: "Reseau international",
    description: "Rencontrez des benevoles de toute l'Afrique",
  },
  {
    icon: Briefcase,
    title: "Experience professionnelle",
    description: "Developpez vos competences dans l'evenementiel",
  },
  {
    icon: GraduationCap,
    title: "Formation complete",
    description: "Sessions de formation avant l'evenement",
  },
  {
    icon: CheckCircle,
    title: "Acces exclusif",
    description: "Vivez les matchs depuis les coulisses",
  },
]

export function VolunteerBenefits() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-bebas)" }}>
            VOS AVANTAGES
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            En tant que benevole, vous beneficiez de nombreux avantages exclusifs
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex gap-4">
              <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <benefit.icon className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
