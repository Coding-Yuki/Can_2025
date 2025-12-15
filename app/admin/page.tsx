import { StatsCards } from "@/components/admin/stats-cards"
import { RecentActivity } from "@/components/admin/recent-activity"
import { UpcomingMatchesAdmin } from "@/components/admin/upcoming-matches-admin"
import { TicketSalesChart } from "@/components/admin/ticket-sales-chart"
import { VolunteerStats } from "@/components/admin/volunteer-stats"
import Image from "next/image"

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground" style={{ fontFamily: "var(--font-bebas)" }}>
            TABLEAU DE BORD
          </h1>
          <p className="text-muted-foreground mt-1">Vue d ensemble de la gestion CAN Morocco 2025</p>
        </div>
        <Image
          src="/images/can2025-logo.png"
          alt="CAN Morocco 2025"
          width={120}
          height={40}
          className="h-10 w-auto object-contain hidden sm:block"
        />
      </div>

      <StatsCards />

      <div className="grid gap-6 lg:grid-cols-2">
        <TicketSalesChart />
        <VolunteerStats />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <UpcomingMatchesAdmin />
        </div>
        <RecentActivity />
      </div>
    </div>
  )
}
