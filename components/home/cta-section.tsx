import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Users, ArrowRight, CheckCircle } from "lucide-react"

const benefits = [
  "Acces exclusif aux zones reservees",
  "Formation complete fournie",
  "Certificat de participation",
  "Experience unique sur un evenement continental",
]

export function CTASection() {
  return (
    <section className="py-24 bg-secondary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 moroccan-pattern opacity-20" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm text-white mb-6">
              <Users className="h-4 w-4" />
              Rejoignez notre equipe
            </div>

            <h2
              className="text-4xl lg:text-5xl font-bold text-white mb-6 text-balance"
              style={{ fontFamily: "var(--font-bebas)" }}
            >
              DEVENEZ BENEVOLE
              <br />
              POUR LA CAN 2025
            </h2>

            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Participez a l&apos;organisation du plus grand evenement sportif africain. Plus de 5000 benevoles sont
              recherches pour assurer le succes de la competition.
            </p>

            <ul className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3 text-white/90">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <Button size="lg" asChild className="bg-white text-secondary hover:bg-white/90 gap-2">
              <Link href="/volunteers">
                Postuler maintenant
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-white/10 backdrop-blur-sm p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-bebas)" }}>
                  5000+
                </div>
                <div className="text-xl text-white/80">Benevoles recherches</div>
                <div className="mt-6 flex justify-center gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent" style={{ fontFamily: "var(--font-bebas)" }}>
                      6
                    </div>
                    <div className="text-sm text-white/60">Villes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent" style={{ fontFamily: "var(--font-bebas)" }}>
                      30
                    </div>
                    <div className="text-sm text-white/60">Jours</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent" style={{ fontFamily: "var(--font-bebas)" }}>
                      52
                    </div>
                    <div className="text-sm text-white/60">Matchs</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
