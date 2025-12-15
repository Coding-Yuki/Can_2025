"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Settings, Globe, Bell, Shield, Palette, Database, Save, RefreshCw } from "lucide-react"

export default function SettingsPage() {
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
    marketing: false,
  })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground" style={{ fontFamily: "var(--font-bebas)" }}>
          PARAMETRES
        </h1>
        <p className="text-muted-foreground mt-1">Configurez les parametres de la plateforme</p>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
          <TabsTrigger value="general" className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            <span className="hidden sm:inline">General</span>
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center gap-2">
            <Bell className="h-4 w-4" />
            <span className="hidden sm:inline">Notifications</span>
          </TabsTrigger>
          <TabsTrigger value="appearance" className="flex items-center gap-2">
            <Palette className="h-4 w-4" />
            <span className="hidden sm:inline">Apparence</span>
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            <span className="hidden sm:inline">Securite</span>
          </TabsTrigger>
          <TabsTrigger value="data" className="flex items-center gap-2">
            <Database className="h-4 w-4" />
            <span className="hidden sm:inline">Donnees</span>
          </TabsTrigger>
        </TabsList>

        {/* General Settings */}
        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                Parametres generaux
              </CardTitle>
              <CardDescription>Configurez les informations de base de la plateforme</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label>Nom du site</Label>
                  <Input defaultValue="CAN Morocco 2025 Hub" />
                </div>
                <div className="space-y-2">
                  <Label>Email de contact</Label>
                  <Input type="email" defaultValue="contact@can2025.ma" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Description</Label>
                <Textarea
                  defaultValue="Plateforme officielle de gestion de la Coupe d'Afrique des Nations Maroc 2025"
                  rows={3}
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label>Langue par defaut</Label>
                  <Select defaultValue="fr">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fr">Francais</SelectItem>
                      <SelectItem value="ar">Arabe</SelectItem>
                      <SelectItem value="en">Anglais</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Fuseau horaire</Label>
                  <Select defaultValue="africa/casablanca">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="africa/casablanca">Africa/Casablanca (GMT+1)</SelectItem>
                      <SelectItem value="europe/paris">Europe/Paris (GMT+1)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex justify-end">
                <Button>
                  <Save className="h-4 w-4 mr-2" />
                  Sauvegarder
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications */}
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-primary" />
                Parametres de notification
              </CardTitle>
              <CardDescription>Gerez vos preferences de notification</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                  <div>
                    <p className="font-medium">Notifications par email</p>
                    <p className="text-sm text-muted-foreground">Recevez des mises a jour par email</p>
                  </div>
                  <Switch
                    checked={notifications.email}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, email: checked })}
                  />
                </div>
                <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                  <div>
                    <p className="font-medium">Notifications push</p>
                    <p className="text-sm text-muted-foreground">Alertes instantanees sur le navigateur</p>
                  </div>
                  <Switch
                    checked={notifications.push}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, push: checked })}
                  />
                </div>
                <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                  <div>
                    <p className="font-medium">Notifications SMS</p>
                    <p className="text-sm text-muted-foreground">Alertes par message texte</p>
                  </div>
                  <Switch
                    checked={notifications.sms}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, sms: checked })}
                  />
                </div>
                <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                  <div>
                    <p className="font-medium">Communications marketing</p>
                    <p className="text-sm text-muted-foreground">Offres et promotions</p>
                  </div>
                  <Switch
                    checked={notifications.marketing}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, marketing: checked })}
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <Button>
                  <Save className="h-4 w-4 mr-2" />
                  Sauvegarder
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Appearance */}
        <TabsContent value="appearance">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5 text-primary" />
                Apparence
              </CardTitle>
              <CardDescription>Personnalisez l apparence de la plateforme</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Theme</Label>
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 bg-background border-2 border-primary rounded-lg text-center cursor-pointer">
                    <div className="h-8 w-full bg-muted rounded mb-2" />
                    <p className="text-sm font-medium">Clair</p>
                  </div>
                  <div className="p-4 bg-zinc-900 border-2 border-muted rounded-lg text-center cursor-pointer">
                    <div className="h-8 w-full bg-zinc-700 rounded mb-2" />
                    <p className="text-sm font-medium text-white">Sombre</p>
                  </div>
                  <div className="p-4 bg-gradient-to-b from-background to-zinc-900 border-2 border-muted rounded-lg text-center cursor-pointer">
                    <div className="h-8 w-full bg-muted rounded mb-2" />
                    <p className="text-sm font-medium">Systeme</p>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Couleur primaire</Label>
                <div className="flex gap-3">
                  <div className="h-10 w-10 rounded-full bg-[#8B1538] border-2 border-primary cursor-pointer" />
                  <div className="h-10 w-10 rounded-full bg-[#006233] cursor-pointer" />
                  <div className="h-10 w-10 rounded-full bg-[#d4a300] cursor-pointer" />
                  <div className="h-10 w-10 rounded-full bg-blue-600 cursor-pointer" />
                </div>
              </div>
              <div className="flex justify-end">
                <Button>
                  <Save className="h-4 w-4 mr-2" />
                  Sauvegarder
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security */}
        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Securite
              </CardTitle>
              <CardDescription>Gerez les parametres de securite</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="p-4 bg-muted rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-medium">Authentification a deux facteurs</p>
                    <Badge className="bg-secondary text-secondary-foreground">Active</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Securisez votre compte avec une verification supplementaire
                  </p>
                  <Button variant="outline" size="sm">
                    Configurer
                  </Button>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <p className="font-medium mb-2">Changer le mot de passe</p>
                  <p className="text-sm text-muted-foreground mb-3">Derniere modification il y a 30 jours</p>
                  <Button variant="outline" size="sm">
                    Modifier
                  </Button>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <p className="font-medium mb-2">Sessions actives</p>
                  <p className="text-sm text-muted-foreground mb-3">2 appareils connectes</p>
                  <Button variant="outline" size="sm">
                    Voir les sessions
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Data */}
        <TabsContent value="data">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5 text-primary" />
                Gestion des donnees
              </CardTitle>
              <CardDescription>Exportez ou importez vos donnees</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="p-4 bg-muted rounded-lg">
                  <p className="font-medium mb-2">Exporter les donnees</p>
                  <p className="text-sm text-muted-foreground mb-3">
                    Telechargez toutes vos donnees au format CSV ou JSON
                  </p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Export CSV
                    </Button>
                    <Button variant="outline" size="sm">
                      Export JSON
                    </Button>
                  </div>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <p className="font-medium mb-2">Importer des donnees</p>
                  <p className="text-sm text-muted-foreground mb-3">Importez des donnees depuis un fichier</p>
                  <Button variant="outline" size="sm">
                    Importer
                  </Button>
                </div>
              </div>
              <div className="p-4 border border-destructive/50 bg-destructive/5 rounded-lg">
                <p className="font-medium text-destructive mb-2">Zone dangereuse</p>
                <p className="text-sm text-muted-foreground mb-3">Actions irreversibles</p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Reinitialiser les donnees
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
