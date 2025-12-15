import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { VolunteerHero } from "@/components/volunteers/volunteer-hero"
import { VolunteerMissions } from "@/components/volunteers/volunteer-missions"
import { VolunteerForm } from "@/components/volunteers/volunteer-form"
import { VolunteerBenefits } from "@/components/volunteers/volunteer-benefits"
import { VolunteerTestimonials } from "@/components/volunteers/volunteer-testimonials"

export const metadata: Metadata = {
  title: "Devenir Benevole | CAN Morocco 2025 Hub",
  description: "Rejoignez notre equipe de 5000 benevoles pour la Coupe d'Afrique des Nations Morocco 2025",
}

export default function VolunteersPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <VolunteerHero />
        <VolunteerMissions />
        <VolunteerBenefits />
        <VolunteerForm />
        <VolunteerTestimonials />
      </main>
      <Footer />
    </div>
  )
}
