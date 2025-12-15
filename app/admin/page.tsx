import { StatsCards } from "@/components/admin/stats-cards"
import { RecentActivity } from "@/components/admin/recent-activity"
import { UpcomingMatchesAdmin } from "@/components/admin/upcoming-matches-admin"
import { TicketSalesChart } from "@/components/admin/ticket-sales-chart"
import { VolunteerStats } from "@/components/admin/volunteer-stats"

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground" style={{ fontFamily: "var(--font-bebas)" }}>
          TABLEAU DE BORD
        </h1>
        <p className="text-muted-foreground mt-1">Vue d'ensemble de la gestion CAN Morocco 2025</p>
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
