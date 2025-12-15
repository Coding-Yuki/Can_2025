"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Ticket, Search, CheckCircle, XCircle, Eye, DollarSign, TrendingUp, Users } from "lucide-react"
import { Progress } from "@/components/ui/progress"

const ticketOrders = [
  {
    id: "TKT-001",
    customer: "Ahmed Ben Ali",
    email: "ahmed@email.com",
    match: "Maroc vs Mali",
    category: "VIP",
    quantity: 2,
    total: "1000 MAD",
    status: "confirmed",
    date: "15/12/2024",
  },
  {
    id: "TKT-002",
    customer: "Fatima Zahra",
    email: "fatima@email.com",
    match: "Egypte vs Afrique du Sud",
    category: "CAT1",
    quantity: 4,
    total: "800 MAD",
    status: "pending",
    date: "14/12/2024",
  },
  {
    id: "TKT-003",
    customer: "Youssef Elmahdi",
    email: "youssef@email.com",
    match: "Nigeria vs Tunisie",
    category: "CAT2",
    quantity: 3,
    total: "300 MAD",
    status: "confirmed",
    date: "14/12/2024",
  },
  {
    id: "TKT-004",
    customer: "Karim Hassan",
    email: "karim@email.com",
    match: "Senegal vs RD Congo",
    category: "CAT3",
    quantity: 5,
    total: "250 MAD",
    status: "cancelled",
    date: "13/12/2024",
  },
  {
    id: "TKT-005",
    customer: "Sara Alaoui",
    email: "sara@email.com",
    match: "Cote d Ivoire vs Cameroun",
    category: "VIP",
    quantity: 2,
    total: "1000 MAD",
    status: "confirmed",
    date: "13/12/2024",
  },
  {
    id: "TKT-006",
    customer: "Omar Benani",
    email: "omar@email.com",
    match: "Algerie vs Burkina Faso",
    category: "CAT1",
    quantity: 2,
    total: "400 MAD",
    status: "pending",
    date: "12/12/2024",
  },
]

const ticketStats = [
  { label: "Billets vendus", value: "12,450", icon: Ticket, change: "+12%" },
  { label: "Revenue total", value: "2.4M MAD", icon: DollarSign, change: "+8%" },
  { label: "Taux de vente", value: "68%", icon: TrendingUp, change: "+5%" },
  { label: "Clients uniques", value: "8,320", icon: Users, change: "+15%" },
]

export default function TicketsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")

  const filteredOrders = ticketOrders.filter((order) => {
    const matchesSearch =
      order.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.id.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = filterStatus === "all" || order.status === filterStatus
    return matchesSearch && matchesStatus
  })

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "confirmed":
        return <Badge className="bg-secondary text-secondary-foreground">Confirme</Badge>
      case "pending":
        return <Badge className="bg-accent text-accent-foreground">En attente</Badge>
      case "cancelled":
        return <Badge variant="destructive">Annule</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground" style={{ fontFamily: "var(--font-bebas)" }}>
          GESTION DE LA BILLETTERIE
        </h1>
        <p className="text-muted-foreground mt-1">Suivez les ventes de billets et gerez les commandes</p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {ticketStats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold mt-1">{stat.value}</p>
                  <p className="text-xs text-secondary mt-1">{stat.change} ce mois</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Sales Progress */}
      <Card>
        <CardHeader>
          <CardTitle>Progression des ventes par categorie</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>VIP (500 MAD)</span>
              <span className="text-muted-foreground">85% vendus</span>
            </div>
            <Progress value={85} className="h-2" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Categorie 1 (200 MAD)</span>
              <span className="text-muted-foreground">72% vendus</span>
            </div>
            <Progress value={72} className="h-2" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Categorie 2 (100 MAD)</span>
              <span className="text-muted-foreground">58% vendus</span>
            </div>
            <Progress value={58} className="h-2" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Categorie 3 (50 MAD)</span>
              <span className="text-muted-foreground">45% vendus</span>
            </div>
            <Progress value={45} className="h-2" />
          </div>
        </CardContent>
      </Card>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Rechercher par client ou numero..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Filtrer par statut" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les statuts</SelectItem>
                <SelectItem value="confirmed">Confirme</SelectItem>
                <SelectItem value="pending">En attente</SelectItem>
                <SelectItem value="cancelled">Annule</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Orders Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Ticket className="h-5 w-5 text-primary" />
            Commandes recentes
          </CardTitle>
          <CardDescription>{filteredOrders.length} commandes trouvees</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>N° Commande</TableHead>
                <TableHead>Client</TableHead>
                <TableHead>Match</TableHead>
                <TableHead>Categorie</TableHead>
                <TableHead>Quantite</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-mono text-sm">{order.id}</TableCell>
                  <TableCell>
                    <div>
                      <p className="font-medium">{order.customer}</p>
                      <p className="text-xs text-muted-foreground">{order.email}</p>
                    </div>
                  </TableCell>
                  <TableCell>{order.match}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{order.category}</Badge>
                  </TableCell>
                  <TableCell>{order.quantity}</TableCell>
                  <TableCell className="font-medium">{order.total}</TableCell>
                  <TableCell>{getStatusBadge(order.status)}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon">
                        <Eye className="h-4 w-4" />
                      </Button>
                      {order.status === "pending" && (
                        <>
                          <Button variant="ghost" size="icon" className="text-secondary">
                            <CheckCircle className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="text-destructive">
                            <XCircle className="h-4 w-4" />
                          </Button>
                        </>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
