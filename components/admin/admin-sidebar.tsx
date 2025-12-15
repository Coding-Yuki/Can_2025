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
  X,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"

const OFFICIAL_LOGO_URL = "/images/can2025-logo.png"

const navigation = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Matchs", href: "/admin/matches", icon: Calendar },
  { name: "Billetterie", href: "/admin/tickets", icon: Ticket },
  { name: "Benevoles", href: "/admin/volunteers", icon: Users },
  { name: "Stades", href: "/admin/stadiums", icon: Building2 },
  { name: "Equipes", href: "/admin/teams", icon: Trophy },
  { name: "Parametres", href: "/admin/settings", icon: Settings },
]

export function useMobileSidebar() {
  const [isOpen, setIsOpen] = useState(false)
  return { isOpen, setIsOpen, toggle: () => setIsOpen(!isOpen) }
}

import { createContext, useContext } from "react"

type SidebarContextType = {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

export const SidebarContext = createContext<SidebarContextType>({
  isOpen: false,
  setIsOpen: () => {},
})

export function useSidebarContext() {
  return useContext(SidebarContext)
}

export function AdminSidebar() {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)
  const { isOpen, setIsOpen } = useSidebarContext()

  // Close mobile sidebar on route change
  useEffect(() => {
    setIsOpen(false)
  }, [pathname, setIsOpen])

  const SidebarContent = ({ isMobile = false }: { isMobile?: boolean }) => (
    <div className="flex flex-col flex-1 overflow-y-auto">
      <div
        className={cn(
          "flex items-center h-20 px-4 border-b border-sidebar-border",
          isMobile ? "justify-between" : "justify-between",
        )}
      >
        {(!collapsed || isMobile) && (
          <Image
            src={OFFICIAL_LOGO_URL || "/placeholder.svg"}
            alt="CAN Morocco 2025"
            width={160}
            height={50}
            className="h-12 w-auto object-contain"
            unoptimized
          />
        )}
        {collapsed && !isMobile && (
          <Image
            src={OFFICIAL_LOGO_URL || "/placeholder.svg"}
            alt="CAN Morocco 2025"
            width={50}
            height={50}
            className="h-10 w-auto object-contain"
            unoptimized
          />
        )}
        {!isMobile && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCollapsed(!collapsed)}
            className="text-sidebar-foreground hover:bg-sidebar-accent"
          >
            <ChevronLeft className={cn("h-4 w-4 transition-transform", collapsed && "rotate-180")} />
          </Button>
        )}
        {isMobile && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            className="text-sidebar-foreground hover:bg-sidebar-accent"
          >
            <X className="h-5 w-5" />
          </Button>
        )}
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
              {(!collapsed || isMobile) && <span>{item.name}</span>}
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
            collapsed && !isMobile && "justify-center",
          )}
        >
          <LogOut className="h-5 w-5" />
          {(!collapsed || isMobile) && <span>Retour au site</span>}
        </Link>
      </div>
    </div>
  )

  return (
    <>
      {/* Desktop sidebar */}
      <div
        className={cn(
          "hidden lg:fixed lg:inset-y-0 lg:flex lg:flex-col bg-sidebar text-sidebar-foreground transition-all duration-300",
          collapsed ? "lg:w-20" : "lg:w-72",
        )}
      >
        <SidebarContent />
      </div>

      {/* Mobile sidebar using Sheet */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent side="left" className="w-72 p-0 bg-sidebar text-sidebar-foreground">
          <SheetHeader className="sr-only">
            <SheetTitle>Menu de navigation</SheetTitle>
          </SheetHeader>
          <SidebarContent isMobile />
        </SheetContent>
      </Sheet>
    </>
  )
}
