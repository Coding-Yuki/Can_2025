import type { Metadata } from "next"
import Link from "next/link"
import { LoginForm } from "@/components/auth/login-form"
import { CANLogo } from "@/components/ui/can-logo"

export const metadata: Metadata = {
  title: "Connexion | CAN Morocco 2025 Hub",
  description: "Connectez-vous a votre compte CAN 2025 Hub",
}

export default function LoginPage() {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left side - Form */}
      <div className="flex flex-col justify-center px-4 py-12 sm:px-6 lg:px-20 xl:px-24 bg-background">
        <div className="mx-auto w-full max-w-sm">
          <div className="mb-8">
            <Link href="/">
              <CANLogo theme="light" variant="full" />
            </Link>
          </div>

          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground" style={{ fontFamily: "var(--font-bebas)" }}>
              CONNEXION
            </h1>
            <p className="mt-2 text-muted-foreground">Accedez a votre espace personnel CAN 2025</p>
          </div>

          <LoginForm />

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Pas encore de compte ?{" "}
            <Link href="/register" className="font-medium text-primary hover:text-primary/80 transition-colors">
              Creer un compte
            </Link>
          </p>
        </div>
      </div>

      {/* Right side - Image/Branding */}
      <div className="hidden lg:flex relative bg-primary moroccan-pattern">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90" />
        <div className="relative z-10 flex flex-col justify-center items-center p-12 text-center">
          <img
            src="/images/coupe-d-27afrique-des-nations-de-football-2025-logo.png"
            alt="CAN 2025 Logo"
            className="w-64 h-auto mb-8 drop-shadow-2xl"
          />
          <h2 className="text-4xl font-bold text-primary-foreground mb-4" style={{ fontFamily: "var(--font-bebas)" }}>
            AFRICA CUP OF NATIONS
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-md">
            La plus grande celebration du football africain. Rejoignez-nous pour un evenement historique au Maroc.
          </p>
          <div className="mt-12 flex gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent" style={{ fontFamily: "var(--font-bebas)" }}>
                24
              </div>
              <div className="text-sm text-primary-foreground/60">Equipes</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent" style={{ fontFamily: "var(--font-bebas)" }}>
                52
              </div>
              <div className="text-sm text-primary-foreground/60">Matchs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent" style={{ fontFamily: "var(--font-bebas)" }}>
                6
              </div>
              <div className="text-sm text-primary-foreground/60">Villes</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
