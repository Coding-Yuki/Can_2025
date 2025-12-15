import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "Fatima El Amrani",
    role: "Benevole CAN 2019",
    location: "Casablanca",
    quote:
      "Une experience inoubliable ! J'ai rencontre des gens extraordinaires et vecu des moments uniques. Je recommande a tous de tenter l'aventure.",
    avatar: "FE",
  },
  {
    name: "Youssef Bennani",
    role: "Benevole CAN 2019",
    location: "Rabat",
    quote:
      "Le benevolat m'a ouvert des portes professionnelles. L'experience acquise et les contacts noues m'ont aide dans ma carriere.",
    avatar: "YB",
  },
  {
    name: "Amina Tazi",
    role: "Benevole CAN 2023",
    location: "Marrakech",
    quote:
      "L'ambiance etait incroyable. Faire partie de l'equipe d'organisation d'un evenement aussi prestigieux est une fierte.",
    avatar: "AT",
  },
]

export function VolunteerTestimonials() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-bebas)" }}>
            TEMOIGNAGES
          </h2>
          <p className="text-muted-foreground">Ce que disent nos anciens benevoles</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative">
              <CardContent className="pt-8 pb-6">
                <Quote className="absolute top-4 left-4 h-8 w-8 text-primary/20" />
                <p className="text-muted-foreground leading-relaxed mb-6 relative z-10">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={`/.jpg?height=40&width=40&query=${testimonial.name}`} />
                    <AvatarFallback className="bg-primary text-primary-foreground">{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} - {testimonial.location}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
