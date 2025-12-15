import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

const categories = [
  {
    name: "Categorie 3",
    price: "A partir de 130 MAD",
    description: "Tribunes laterales hautes",
    features: ["Acces au stade", "Place assise numerotee", "Vue sur le terrain"],
    color: "border-border",
  },
  {
    name: "Categorie 2",
    price: "A partir de 260 MAD",
    description: "Tribunes laterales basses",
    features: ["Acces au stade", "Place assise numerotee", "Vue rapprochee", "Acces restauration"],
    color: "border-border",
  },
  {
    name: "Categorie 1",
    price: "A partir de 420 MAD",
    description: "Tribune centrale",
    features: [
      "Acces au stade",
      "Place assise premium",
      "Vue centrale optimale",
      "Acces restauration",
      "Programme officiel",
    ],
    color: "border-secondary",
    popular: true,
  },
  {
    name: "VIP",
    price: "A partir de 1300 MAD",
    description: "Experience exclusive",
    features: [
      "Acces VIP prioritaire",
      "Loge privee",
      "Vue panoramique",
      "Buffet gastronomique",
      "Open bar",
      "Cadeau officiel",
      "Parking reserve",
    ],
    color: "border-accent",
  },
]

export function TicketCategories() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-bebas)" }}>
            CATEGORIES DE BILLETS
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choisissez l'experience qui vous correspond. Toutes les categories offrent une vue sur le terrain et une
            atmosphere unique.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <Card
              key={index}
              className={`relative ${category.color} ${category.popular ? "ring-2 ring-secondary" : ""}`}
            >
              {category.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-secondary text-secondary-foreground text-xs font-medium px-3 py-1 rounded-full">
                    Populaire
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-xl">{category.name}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
                <div className="text-2xl font-bold text-foreground pt-2" style={{ fontFamily: "var(--font-bebas)" }}>
                  {category.price}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {category.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-secondary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
