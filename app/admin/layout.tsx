"use client"

import type React from "react"
import { useState } from "react"
import { AdminSidebar, SidebarContext } from "@/components/admin/admin-sidebar"
import { AdminHeader } from "@/components/admin/admin-header"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
      <div className="min-h-screen bg-muted/30">
        <AdminSidebar />
        <div className="lg:pl-72">
          <AdminHeader />
          <main className="py-6 px-4 sm:px-6 lg:px-8">{children}</main>
        </div>
      </div>
    </SidebarContext.Provider>
  )
}
