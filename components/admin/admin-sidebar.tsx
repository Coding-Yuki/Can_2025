"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Calendar,
  Ticket,
  Users,
  Building2,
  Settings,
  LogOut,
  ChevronLeft,
  Trophy,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const OFFICIAL_LOGO_URL = "/images/zssboowalbcindtvgxdbvm6g4m.avif"

const navigation = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Matchs", href: "/admin/matches", icon: Calendar },
  { name: "Billetterie", href: "/admin/tickets", icon: Ticket },
  { name: "Benevoles", href: "/admin/volunteers", icon: Users },
  { name: "Stades", href: "/admin/stadiums", icon: Building2 },
  { name: "Equipes", href: "/admin/teams", icon: Trophy },
  { name: "Parametres", href: "/admin/settings", icon: Settings },
]

export function AdminSidebar() {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)

  return (
    <>
      {/* Desktop sidebar */}
      <div
        className={cn(
          "hidden lg:fixed lg:inset-y-0 lg:flex lg:flex-col bg-sidebar text-sidebar-foreground transition-all duration-300",
          collapsed ? "lg:w-20" : "lg:w-72",
        )}
      >
        <div className="flex flex-col flex-1 overflow-y-auto">
          <div className="flex items-center justify-between h-20 px-4 border-b border-sidebar-border">
            {!collapsed && (
              <Image
                src={OFFICIAL_LOGO_URL || "/placeholder.svg"}
                alt="CAN Morocco 2025"
                width={160}
                height={50}
                className="h-12 w-auto object-contain"
                unoptimized
              />
            )}
            {collapsed && (
              <Image
                src={OFFICIAL_LOGO_URL || "/placeholder.svg"}
                alt="CAN Morocco 2025"
                width={50}
                height={50}
                className="h-10 w-auto object-contain"
                unoptimized
              />
            )}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setCollapsed(!collapsed)}
              className="text-sidebar-foreground hover:bg-sidebar-accent"
            >
              <ChevronLeft className={cn("h-4 w-4 transition-transform", collapsed && "rotate-180")} />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-3 py-4 space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-sidebar-primary text-sidebar-primary-foreground"
                      : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground",
                  )}
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  {!collapsed && <span>{item.name}</span>}
                </Link>
              )
            })}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-sidebar-border">
            <Link
              href="/"
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground transition-colors",
                collapsed && "justify-center",
              )}
            >
              <LogOut className="h-5 w-5" />
              {!collapsed && <span>Deconnexion</span>}
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
