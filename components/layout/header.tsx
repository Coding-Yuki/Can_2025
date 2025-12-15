"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, User, Ticket, Calendar, Users, LayoutDashboard, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "Matchs", href: "/matches", icon: Calendar },
  { name: "Billetterie", href: "/tickets", icon: Ticket },
  { name: "Benevoles", href: "/volunteers", icon: Users },
  { name: "Mascotte", href: "/mascotte", icon: Sparkles },
]

const OFFICIAL_LOGO_URL = "/images/can-logo.png"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [logoError, setLogoError] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary-foreground/10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <Image
              src={logoError ? "/placeholder.svg" : OFFICIAL_LOGO_URL}
              alt="CAN Morocco 2025"
              width={160}
              height={56}
              className="h-14 w-auto object-contain"
              onError={() => setLogoError(true)}
            />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-primary-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Ouvrir le menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-1.5 text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              {item.icon && <item.icon className="h-4 w-4" />}
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
          >
            <Link href="/login">
              <User className="h-4 w-4 mr-2" />
              Connexion
            </Link>
          </Button>
          <Button size="sm" asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
            <Link href="/admin">
              <LayoutDashboard className="h-4 w-4 mr-2" />
              Admin
            </Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn("lg:hidden transition-all duration-300 overflow-hidden", mobileMenuOpen ? "max-h-96" : "max-h-0")}
      >
        <div className="space-y-1 px-4 pb-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-base font-medium text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.icon && <item.icon className="h-5 w-5" />}
              {item.name}
            </Link>
          ))}
          <div className="pt-4 flex flex-col gap-2">
            <Button
              variant="outline"
              asChild
              className="w-full justify-center border-primary-foreground/20 text-primary-foreground bg-transparent"
            >
              <Link href="/login">Connexion</Link>
            </Button>
            <Button asChild className="w-full justify-center bg-secondary hover:bg-secondary/90">
              <Link href="/admin">Dashboard Admin</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
