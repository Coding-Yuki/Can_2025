import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Benevole = {
  id: string
  first_name: string
  last_name: string
  email: string
  phone: string
  birthdate: string
  nationality: string
  city: string
  mission: string
  languages: string[]
  motivation: string
  experience?: string
  status: "pending" | "approved" | "rejected"
  created_at: string
}
