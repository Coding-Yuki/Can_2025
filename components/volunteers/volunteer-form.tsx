"use client"
import { createClient } from '@supabase/supabase-js'
import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Loader2, CheckCircle } from "lucide-react"
import { supabase } from "@/lib/supabase"

const cities = [
  { value: "casablanca", label: "Casablanca" },
  { value: "rabat", label: "Rabat" },
  { value: "marrakech", label: "Marrakech" },
  { value: "tanger", label: "Tanger" },
  { value: "fes", label: "Fes" },
  { value: "agadir", label: "Agadir" },
]

const missions = [
  { value: "accueil", label: "Accueil & Orientation" },
  { value: "securite", label: "Securite & Controle" },
  { value: "logistique", label: "Logistique & Transport" },
  { value: "medical", label: "Services Medicaux" },
  { value: "communication", label: "Communication" },
  { value: "media", label: "Media & Presse" },
  { value: "billetterie", label: "Billetterie" },
  { value: "info", label: "Information Generale" },
]

const languages = [
  { id: "french", label: "Francais" },
  { id: "arabic", label: "Arabe" },
  { id: "english", label: "Anglais" },
  { id: "spanish", label: "Espagnol" },
  { id: "other", label: "Autre" },
]

export function VolunteerForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([])
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    birthdate: "",
    nationality: "",
    city: "",
    mission: "",
    motivation: "",
    experience: "",
  })

  const toggleLanguage = (langId: string) => {
    setSelectedLanguages((prev) => (prev.includes(langId) ? prev.filter((l) => l !== langId) : [...prev, langId]))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const { error: insertError } = await supabase.from("benevoles").insert([
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          birthdate: formData.birthdate,
          nationality: formData.nationality,
          city: formData.city,
          mission: formData.mission,
          languages: selectedLanguages,
          motivation: formData.motivation,
          experience: formData.experience || null,
          status: "pending",
        },
      ])

      if (insertError) {
        throw insertError
      }

      setIsSubmitted(true)
    } catch (err: any) {
      console.error("Error submitting volunteer application:", err)
      setError(err.message || "Une erreur est survenue. Veuillez reessayer.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <section id="apply" className="py-16 bg-background">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <Card className="text-center py-12">
            <CardContent>
              <div className="mx-auto w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
                <CheckCircle className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-bebas)" }}>
                CANDIDATURE ENVOYEE !
              </h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Merci pour votre candidature. Notre equipe examinera votre dossier et vous contactera dans les prochains
                jours.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section id="apply" className="py-16 bg-background">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-bebas)" }}>
            POSTULER MAINTENANT
          </h2>
          <p className="text-muted-foreground">Remplissez le formulaire ci-dessous pour rejoindre notre equipe</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Formulaire de candidature</CardTitle>
            <CardDescription>Tous les champs marques d'un * sont obligatoires</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive text-sm">
                  {error}
                </div>
              )}

              {/* Personal info */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Prenom *</Label>
                  <Input
                    id="firstName"
                    placeholder="Jean"
                    required
                    disabled={isSubmitting}
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Nom *</Label>
                  <Input
                    id="lastName"
                    placeholder="Dupont"
                    required
                    disabled={isSubmitting}
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="votre@email.com"
                  required
                  disabled={isSubmitting}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Telephone *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+212 6XX XX XX XX"
                  required
                  disabled={isSubmitting}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="birthdate">Date de naissance *</Label>
                  <Input
                    id="birthdate"
                    type="date"
                    required
                    disabled={isSubmitting}
                    value={formData.birthdate}
                    onChange={(e) => setFormData({ ...formData, birthdate: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="nationality">Nationalite *</Label>
                  <Input
                    id="nationality"
                    placeholder="Marocaine"
                    required
                    disabled={isSubmitting}
                    value={formData.nationality}
                    onChange={(e) => setFormData({ ...formData, nationality: e.target.value })}
                  />
                </div>
              </div>

              {/* Preferences */}
              <div className="space-y-2">
                <Label htmlFor="city">Ville de preference *</Label>
                <Select
                  required
                  disabled={isSubmitting}
                  value={formData.city}
                  onValueChange={(value) => setFormData({ ...formData, city: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selectionnez une ville" />
                  </SelectTrigger>
                  <SelectContent>
                    {cities.map((city) => (
                      <SelectItem key={city.value} value={city.value}>
                        {city.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="mission">Mission souhaitee *</Label>
                <Select
                  required
                  disabled={isSubmitting}
                  value={formData.mission}
                  onValueChange={(value) => setFormData({ ...formData, mission: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selectionnez une mission" />
                  </SelectTrigger>
                  <SelectContent>
                    {missions.map((mission) => (
                      <SelectItem key={mission.value} value={mission.value}>
                        {mission.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Languages */}
              <div className="space-y-3">
                <Label>Langues parlees *</Label>
                <div className="flex flex-wrap gap-4">
                  {languages.map((lang) => (
                    <div key={lang.id} className="flex items-center gap-2">
                      <Checkbox
                        id={lang.id}
                        checked={selectedLanguages.includes(lang.id)}
                        onCheckedChange={() => toggleLanguage(lang.id)}
                        disabled={isSubmitting}
                      />
                      <Label htmlFor={lang.id} className="text-sm font-normal cursor-pointer">
                        {lang.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Motivation */}
              <div className="space-y-2">
                <Label htmlFor="motivation">Motivation *</Label>
                <Textarea
                  id="motivation"
                  placeholder="Expliquez pourquoi vous souhaitez devenir benevole pour la CAN 2025..."
                  rows={4}
                  required
                  disabled={isSubmitting}
                  value={formData.motivation}
                  onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                />
              </div>

              {/* Experience */}
              <div className="space-y-2">
                <Label htmlFor="experience">Experience precedente</Label>
                <Textarea
                  id="experience"
                  placeholder="Decrivez vos experiences precedentes en benevolat ou evenementiel (optionnel)"
                  rows={3}
                  disabled={isSubmitting}
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                />
              </div>

              {/* Terms */}
              <div className="flex items-start gap-2">
                <Checkbox id="terms" required disabled={isSubmitting} className="mt-0.5" />
                <Label htmlFor="terms" className="text-sm font-normal leading-relaxed cursor-pointer">
                  J'accepte les conditions de participation et autorise le traitement de mes donnees personnelles *
                </Label>
              </div>

              <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  "Envoyer ma candidature"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
