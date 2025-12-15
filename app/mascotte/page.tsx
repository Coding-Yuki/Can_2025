import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, Star, Trophy, Users, Calendar, MapPin, Sparkles, MessageCircle } from "lucide-react"
import Link from "next/link"

const ASSAD_IMAGE_URL = "/images/can-mascot.png"

export default function MascottePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-[#c8102e] py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 moroccan-pattern opacity-10" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="text-center lg:text-left order-2 lg:order-1">
                <Badge className="mb-4 bg-[#d4a300] text-black font-bold">Mascotte Officielle</Badge>
                <h1
                  className="text-5xl md:text-7xl font-bold text-white mb-4"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  ASSAD
                </h1>
                <p className="text-2xl md:text-3xl text-[#d4a300] font-semibold mb-4">Le Lion de la CAN 2025</p>
                <p className="text-lg text-white/90 mb-8 leading-relaxed">
                  Inspire du majestueux Lion de l Atlas, Assad incarne la force, la fierte et l esprit du football
                  africain. Il est l ambassadeur officiel de la Coupe d Afrique des Nations Maroc 2025.
                </p>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <Button size="lg" className="bg-[#006233] hover:bg-[#006233]/90 text-white" asChild>
                    <Link href="/tickets">
                      <Trophy className="mr-2 h-5 w-5" />
                      Acheter des Billets
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/50 text-white hover:bg-white/10 bg-transparent"
                    asChild
                  >
                    <Link href="/volunteers">
                      <Users className="mr-2 h-5 w-5" />
                      Devenir Benevole
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end order-1 lg:order-2">
                <div className="relative">
                  <img
                    src={ASSAD_IMAGE_URL || "/placeholder.svg"}
                    alt="Assad - Mascotte officielle CAN Morocco 2025"
                    className="relative z-10 w-full max-w-lg h-auto object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2
                className="text-3xl md:text-4xl font-bold text-foreground mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                QUI EST ASSAD?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Decouvrez l histoire et la signification de la mascotte officielle de la CAN 2025
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <Star className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Origine du Nom</h3>
                  <p className="text-muted-foreground">
                    Assad signifie "Lion" en arabe. Ce nom symbolise la force et le courage du football africain.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-secondary/20 hover:border-secondary/40 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 h-14 w-14 rounded-full bg-secondary/10 flex items-center justify-center">
                    <MapPin className="h-7 w-7 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Lion de l Atlas</h3>
                  <p className="text-muted-foreground">
                    Inspire du Lion de l Atlas, une espece emblematique du Maroc, symbole de fierte nationale.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-accent/20 hover:border-accent/40 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 h-14 w-14 rounded-full bg-accent/10 flex items-center justify-center">
                    <Heart className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Personnalite</h3>
                  <p className="text-muted-foreground">
                    Assad est amical, energique et passionne. Il represente l esprit d unite et de celebration.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#c8102e]/20 hover:border-[#c8102e]/40 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 h-14 w-14 rounded-full bg-[#c8102e]/10 flex items-center justify-center">
                    <MessageCircle className="h-7 w-7 text-[#c8102e]" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Assistant IA</h3>
                  <p className="text-muted-foreground">
                    Discutez avec Assad! Cliquez sur l icone en bas a droite pour poser vos questions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Role Section */}
        <section className="py-16 bg-muted/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <Badge className="mb-4 bg-primary text-primary-foreground">
                  <Sparkles className="mr-1 h-3 w-3" />
                  Role Officiel
                </Badge>
                <h2
                  className="text-3xl md:text-4xl font-bold text-foreground mb-6"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  AMBASSADEUR DE LA CAN 2025
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    Assad a ete devoile par la CAF et le comite local d organisation en decembre 2024. En tant qu
                    ambassadeur visuel et emotionnel du tournoi, il joue un role essentiel dans la promotion de l
                    evenement.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 rounded-full bg-[#c8102e] flex-shrink-0" />
                      <span>Animation des stades et fan-zones pendant les matchs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 rounded-full bg-[#006233] flex-shrink-0" />
                      <span>Campagnes marketing et contenus numeriques officiels</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 rounded-full bg-[#d4a300] flex-shrink-0" />
                      <span>Actions aupres des jeunes et developpement du football</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 rounded-full bg-[#c8102e] flex-shrink-0" />
                      <span>Programmes scolaires et communautaires</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-[#c8102e] text-white">
                  <CardContent className="p-6 text-center">
                    <Calendar className="mx-auto h-8 w-8 mb-3 text-[#d4a300]" />
                    <p className="text-3xl font-bold">29</p>
                    <p className="text-sm text-white/80">Jours de competition</p>
                  </CardContent>
                </Card>
                <Card className="bg-[#006233] text-white">
                  <CardContent className="p-6 text-center">
                    <Trophy className="mx-auto h-8 w-8 mb-3" />
                    <p className="text-3xl font-bold">52</p>
                    <p className="text-sm text-white/80">Matchs au total</p>
                  </CardContent>
                </Card>
                <Card className="bg-[#d4a300] text-black">
                  <CardContent className="p-6 text-center">
                    <Users className="mx-auto h-8 w-8 mb-3" />
                    <p className="text-3xl font-bold">24</p>
                    <p className="text-sm text-black/70">Equipes qualifiees</p>
                  </CardContent>
                </Card>
                <Card className="bg-muted">
                  <CardContent className="p-6 text-center">
                    <MapPin className="mx-auto h-8 w-8 mb-3 text-primary" />
                    <p className="text-3xl font-bold text-foreground">6</p>
                    <p className="text-sm text-muted-foreground">Villes hotes</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Event Info */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2
              className="text-3xl md:text-4xl font-bold text-foreground mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              CAN MAROC 2025
            </h2>
            <p className="text-xl text-muted-foreground mb-8">Du 21 decembre 2025 au 18 janvier 2026</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Badge variant="outline" className="text-lg py-2 px-4">
                Rabat
              </Badge>
              <Badge variant="outline" className="text-lg py-2 px-4">
                Casablanca
              </Badge>
              <Badge variant="outline" className="text-lg py-2 px-4">
                Marrakech
              </Badge>
              <Badge variant="outline" className="text-lg py-2 px-4">
                Tanger
              </Badge>
              <Badge variant="outline" className="text-lg py-2 px-4">
                Fes
              </Badge>
              <Badge variant="outline" className="text-lg py-2 px-4">
                Agadir
              </Badge>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
