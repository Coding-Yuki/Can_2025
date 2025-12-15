import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

export const maxDuration = 30

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

let supabaseAdmin: ReturnType<typeof createClient> | null = null

if (supabaseUrl && supabaseServiceKey) {
  supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
    auth: { persistSession: false },
  })
}

const CAN_2025_INFO = {
  event: {
    name: "Coupe d'Afrique des Nations 2025",
    host: "Maroc",
    dates: "21 decembre 2025 au 18 janvier 2026",
    teams: 24,
    stadiums: 6,
  },
  groups: {
    A: ["Maroc", "Mali", "Zambie", "Comores"],
    B: ["Egypte", "Afrique du Sud", "Angola", "Zimbabwe"],
    C: ["Nigeria", "Tunisie", "Ouganda", "Tanzanie"],
    D: ["Senegal", "RD Congo", "Benin", "Botswana"],
    E: ["Algerie", "Burkina Faso", "Guinee Equatoriale", "Soudan"],
    F: ["Cote d'Ivoire", "Cameroun", "Gabon", "Mozambique"],
  },
  stadiums: [
    { name: "Complexe Sportif Prince Moulay Abdellah", city: "Rabat", capacity: 65000 },
    { name: "Stade Mohammed V", city: "Casablanca", capacity: 45000 },
    { name: "Grand Stade de Marrakech", city: "Marrakech", capacity: 45000 },
    { name: "Grand Stade de Tanger", city: "Tanger", capacity: 65000 },
    { name: "Complexe Sportif de Fes", city: "Fes", capacity: 45000 },
    { name: "Grand Stade d'Agadir", city: "Agadir", capacity: 45000 },
  ],
  tickets: [
    { category: "Categorie 3", price: "50 MAD", description: "Places standard" },
    { category: "Categorie 2", price: "100 MAD", description: "Bonnes places" },
    { category: "Categorie 1", price: "200 MAD", description: "Excellentes places" },
    { category: "VIP", price: "500 MAD", description: "Experience premium avec lounge" },
  ],
  volunteers: {
    total: 3000,
    missions: ["Accueil", "Securite", "Transport", "Media", "Medical", "Logistique"],
    benefits: ["Uniforme officiel", "Repas", "Certificat", "Acces aux matchs"],
  },
}

function getResponse(message: string): string {
  const msg = message
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")

  // Greetings
  if (msg.match(/^(salut|bonjour|hello|hi|salam|marhaba|coucou|hey)/)) {
    return "Marhaba! Je suis Assad, le lion mascotte de la CAN Maroc 2025! Comment puis-je t'aider aujourd'hui? Tu veux en savoir plus sur les matchs, les billets, les equipes ou les stades?"
  }

  // Questions about Assad/mascot
  if (msg.match(/(qui es[- ]tu|mascotte|assad|lion|toi)/)) {
    return "Je suis Assad, le lion mascotte officielle de la CAN Maroc 2025! Mon nom signifie 'lion' en arabe. Je suis fier de representer l'Afrique et le Maroc pour cette grande fete du football!"
  }

  // Dates and general info
  if (msg.match(/(quand|date|debut|commence|fin|periode|duree)/)) {
    return `La CAN 2025 se deroule au Maroc du ${CAN_2025_INFO.event.dates}. C'est presque un mois de football africain incroyable!`
  }

  // Location/host
  if (msg.match(/(ou|lieu|pays|hote|maroc|localisation)/)) {
    return `La CAN 2025 se deroule au Maroc! Le royaume accueille ${CAN_2025_INFO.event.teams} equipes dans ${CAN_2025_INFO.event.stadiums} magnifiques stades a travers le pays.`
  }

  // Teams and groups
  if (msg.match(/(equipe|groupe|participant|qualifie|pays|nation)/)) {
    const groups = Object.entries(CAN_2025_INFO.groups)
      .map(([g, teams]) => `Groupe ${g}: ${teams.join(", ")}`)
      .join("\n")
    return `Voici les 24 equipes qualifiees reparties en 6 groupes:\n\n${groups}\n\nQuelle equipe supportes-tu?`
  }

  // Specific team mentions
  const teamSearch = msg.match(/(maroc|egypte|nigeria|senegal|algerie|cameroun|cote d.?ivoire|tunisie|mali|ghana)/i)
  if (teamSearch) {
    const team = teamSearch[1].charAt(0).toUpperCase() + teamSearch[1].slice(1)
    for (const [group, teams] of Object.entries(CAN_2025_INFO.groups)) {
      const found = teams.find((t) => t.toLowerCase().includes(teamSearch[1].toLowerCase()))
      if (found) {
        return `${found} est dans le Groupe ${group} avec ${teams.filter((t) => t !== found).join(", ")}. Que le meilleur gagne!`
      }
    }
  }

  // Stadiums
  if (msg.match(/(stade|stadium|terrain|infrastructure|capacite)/)) {
    const stadiumList = CAN_2025_INFO.stadiums
      .map((s) => `• ${s.name} (${s.city}) - ${s.capacity.toLocaleString()} places`)
      .join("\n")
    return `Voici les 6 stades de la CAN 2025:\n\n${stadiumList}\n\nTous sont prets pour accueillir les supporters!`
  }

  // Tickets
  if (msg.match(/(billet|ticket|prix|tarif|place|acheter|reservation|combien)/)) {
    const ticketList = CAN_2025_INFO.tickets.map((t) => `• ${t.category}: ${t.price} - ${t.description}`).join("\n")
    return `Voici les tarifs des billets:\n\n${ticketList}\n\nReserve vite tes places sur notre page Billetterie!`
  }

  // Volunteers
  if (msg.match(/(benevole|volontaire|aider|participer|mission)/)) {
    return `Nous recrutons ${CAN_2025_INFO.volunteers.total}+ benevoles!\n\nMissions: ${CAN_2025_INFO.volunteers.missions.join(", ")}\n\nAvantages: ${CAN_2025_INFO.volunteers.benefits.join(", ")}\n\nRejoins l'aventure sur notre page Benevoles!`
  }

  // Match/schedule
  if (msg.match(/(match|calendrier|programme|jouer|rencontre|score)/)) {
    return "Le calendrier complet des matchs sera bientot disponible! Le match d'ouverture aura lieu le 21 decembre 2025 avec le Maroc. Consulte notre page Matchs pour les dernieres mises a jour!"
  }

  // Final
  if (msg.match(/(finale|final|champion|vainqueur|gagnant)/)) {
    return "La grande finale de la CAN 2025 aura lieu le 18 janvier 2026! Qui soulevera le trophee? Inshallah ce sera une finale memorable!"
  }

  // Creator
  if (msg.match(/(createur|developpe|fait|ayoub|achmaoui|qui a cree)/)) {
    return "Ce site a ete cree avec passion par Ayoub Achmaoui! Un grand merci a lui pour cette belle plateforme dediee a la CAN Maroc 2025!"
  }

  // Help
  if (msg.match(/(aide|help|comment|quoi|info|information)/)) {
    return "Je peux t'aider avec:\n• Les dates et lieux de la CAN 2025\n• Les equipes et groupes\n• Les stades\n• Les billets et tarifs\n• Le benevolat\n\nPose-moi ta question!"
  }

  // Thanks
  if (msg.match(/(merci|thanks|shukran|choukran)/)) {
    return "Avec plaisir! Shukran a toi! N'hesite pas si tu as d'autres questions sur la CAN Maroc 2025!"
  }

  // Goodbye
  if (msg.match(/(bye|au revoir|a bientot|ciao|salut$)/)) {
    return "A bientot! Maa salama! J'espere te voir dans les stades marocains pour celebrer le football africain!"
  }

  // Default response
  const defaultResponses = [
    "Marhaba! Je suis Assad et je suis la pour t'aider! Tu peux me poser des questions sur les matchs, les billets, les equipes, les stades ou le benevolat!",
    "Interessant! Pour mieux t'aider, dis-moi ce que tu veux savoir: equipes, stades, billets, dates ou benevolat?",
    "Je suis Assad, ton guide pour la CAN 2025! Demande-moi des infos sur les groupes, les stades, les tarifs ou comment devenir benevole!",
  ]
  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)]
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { messages, userId } = body

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Invalid request: messages array required" }, { status: 400 })
    }

    const lastMessage = messages[messages.length - 1]?.content || ""

    const text = getResponse(lastMessage)

    if (supabaseAdmin) {
      try {
        await supabaseAdmin.from("messages").insert([
          {
            user_id: userId || null,
            role: "user",
            content: lastMessage,
            metadata: { timestamp: new Date().toISOString() },
          },
          {
            user_id: userId || null,
            role: "assistant",
            content: text,
            metadata: { timestamp: new Date().toISOString() },
          },
        ])
      } catch (dbError) {
        console.error("Supabase insert error:", dbError)
      }
    }

    return NextResponse.json({ text }, { status: 200 })
  } catch (error) {
    console.error("Chat API error:", error)
    return NextResponse.json(
      {
        error: "Internal server error",
        text: "Marhaba! Je suis Assad! Pose-moi tes questions sur la CAN Maroc 2025: matchs, billets, equipes, stades ou benevolat!",
      },
      { status: 500 },
    )
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const userId = searchParams.get("userId")

    if (!supabaseAdmin) {
      return NextResponse.json({ error: "Database not configured" }, { status: 503 })
    }

    const query = supabaseAdmin.from("messages").select("*").order("created_at", { ascending: true })

    if (userId) {
      query.eq("user_id", userId)
    }

    const { data, error } = await query.limit(100)

    if (error) {
      console.error("Supabase query error:", error)
      return NextResponse.json({ error: "Failed to fetch messages" }, { status: 500 })
    }

    return NextResponse.json({ messages: data || [] }, { status: 200 })
  } catch (error) {
    console.error("Chat history API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
