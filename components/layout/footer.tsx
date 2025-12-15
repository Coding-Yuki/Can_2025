import Link from "next/link"
import { CANLogo } from "@/components/ui/can-logo"
import { MapPin, Mail, Phone } from "lucide-react"

const footerLinks = {
  evenement: [
    { name: "Calendrier des matchs", href: "/matches" },
    { name: "Stades", href: "/stadiums" },
    { name: "Equipes", href: "/teams" },
    { name: "Resultats", href: "/results" },
  ],
  services: [
    { name: "Billetterie", href: "/tickets" },
    { name: "Devenir benevole", href: "/volunteers" },
    { name: "Accreditations", href: "/accreditation" },
    { name: "FAQ", href: "/faq" },
  ],
  legal: [
    { name: "Mentions legales", href: "/legal" },
    { name: "Politique de confidentialite", href: "/privacy" },
    { name: "CGV", href: "/terms" },
    { name: "Contact", href: "/contact" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground moroccan-pattern">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <CANLogo theme="dark" />
            <p className="mt-4 text-sm text-primary-foreground/70 leading-relaxed">
              La plateforme officielle de gestion de la Coupe d&apos;Afrique des Nations Morocco 2025.
            </p>
            <div className="mt-6 space-y-2 text-sm text-primary-foreground/70">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-secondary" />
                <span>Rabat, Maroc</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-secondary" />
                <span>contact@can2025.ma</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-secondary" />
                <span>+212 5XX XX XX XX</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">Evenement</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.evenement.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">Services</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">Legal</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-4">
              <img src="/images/flag-of-morocco.png" alt="Drapeau du Maroc" className="h-6 w-auto rounded" />
              <img src="/images/zssboowalbcindtvgxdbvm6g4m.avif" alt="Logo CAN 2025" className="h-10 w-auto" />
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-primary-foreground/50">
                2025 CAN Morocco Hub. Projet universitaire - Web 1 & Web 2.
              </p>
              <p className="text-xs text-accent mt-1 font-medium">Concu et developpe par Ayoub Achmaoui</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
