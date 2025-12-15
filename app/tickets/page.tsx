import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { TicketHero } from "@/components/tickets/ticket-hero"
import { TicketMatchSelector } from "@/components/tickets/ticket-match-selector"
import { TicketCategories } from "@/components/tickets/ticket-categories"
import { TicketFAQ } from "@/components/tickets/ticket-faq"

export const metadata: Metadata = {
  title: "Billetterie | CAN Morocco 2025 Hub",
  description: "Achetez vos billets pour la Coupe d'Afrique des Nations Morocco 2025",
}

export default function TicketsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <TicketHero />
        <TicketMatchSelector />
        <TicketCategories />
        <TicketFAQ />
      </main>
      <Footer />
    </div>
  )
}
