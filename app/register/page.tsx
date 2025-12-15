import type { Metadata } from "next"
import Link from "next/link"
import { RegisterForm } from "@/components/auth/register-form"
import { CANLogo } from "@/components/ui/can-logo"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Inscription | CAN Morocco 2025 Hub",
  description: "Creez votre compte CAN 2025 Hub",
}

export default function RegisterPage() {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left side - Image/Branding */}
      <div className="hidden lg:flex relative bg-secondary moroccan-pattern">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90" />
        <div className="relative z-10 flex flex-col justify-center items-center p-12 text-center">
          <Image
            src="/images/can2025-logo.png"
            alt="CAN Morocco 2025"
            width={192}
            height={192}
            className="w-48 h-auto mb-8 drop-shadow-2xl"
          />
          <h2 className="text-4xl font-bold text-secondary-foreground mb-4" style={{ fontFamily: "var(--font-bebas)" }}>
            BIENVENUE AU MAROC
          </h2>
          <p className="text-secondary-foreground/80 text-lg max-w-md">
            Terre d accueil de la 35e edition de la Coupe d Afrique des Nations. Creez votre compte pour vivre l
            experience.
          </p>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="flex flex-col justify-center px-4 py-12 sm:px-6 lg:px-20 xl:px-24 bg-background">
        <div className="mx-auto w-full max-w-sm">
          <div className="mb-8">
            <Link href="/">
              <CANLogo theme="light" variant="full" />
            </Link>
          </div>

          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground" style={{ fontFamily: "var(--font-bebas)" }}>
              CREER UN COMPTE
            </h1>
            <p className="mt-2 text-muted-foreground">Rejoignez la communaute CAN 2025</p>
          </div>

          <RegisterForm />

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Deja un compte ?{" "}
            <Link href="/login" className="font-medium text-primary hover:text-primary/80 transition-colors">
              Se connecter
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
