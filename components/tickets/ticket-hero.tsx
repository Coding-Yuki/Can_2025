import { Ticket, Shield, CreditCard } from "lucide-react"

export function TicketHero() {
  return (
    <section className="bg-primary py-16 moroccan-pattern relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/50 to-primary" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1
            className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-4"
            style={{ fontFamily: "var(--font-bebas)" }}
          >
            BILLETTERIE OFFICIELLE
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Reservez vos places pour les 52 matchs de la CAN Morocco 2025. Billets electroniques securises, livraison
            instantanee.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="flex items-center gap-2 bg-primary-foreground/10 rounded-lg px-4 py-2">
              <Ticket className="h-5 w-5 text-accent" />
              <span className="text-primary-foreground text-sm">E-Billets instantanes</span>
            </div>
            <div className="flex items-center gap-2 bg-primary-foreground/10 rounded-lg px-4 py-2">
              <Shield className="h-5 w-5 text-secondary" />
              <span className="text-primary-foreground text-sm">100% Securise</span>
            </div>
            <div className="flex items-center gap-2 bg-primary-foreground/10 rounded-lg px-4 py-2">
              <CreditCard className="h-5 w-5 text-accent" />
              <span className="text-primary-foreground text-sm">Paiement flexible</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
