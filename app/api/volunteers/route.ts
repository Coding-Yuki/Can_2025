import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: { persistSession: false },
})

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get("status")
    const mission = searchParams.get("mission")
    const search = searchParams.get("search")

    let query = supabaseAdmin.from("benevoles").select("*").order("created_at", { ascending: false })

    if (status && status !== "all") {
      query = query.eq("status", status)
    }

    if (mission && mission !== "all") {
      query = query.eq("mission", mission)
    }

    if (search) {
      query = query.or(`first_name.ilike.%${search}%,last_name.ilike.%${search}%,email.ilike.%${search}%`)
    }

    const { data, error } = await query

    if (error) {
      console.error("Supabase query error:", error)
      return NextResponse.json({ error: "Failed to fetch volunteers" }, { status: 500 })
    }

    return NextResponse.json({ volunteers: data || [] }, { status: 200 })
  } catch (error) {
    console.error("Volunteers API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function PATCH(request: Request) {
  try {
    const { id, status } = await request.json()

    if (!id || !status) {
      return NextResponse.json({ error: "Missing id or status" }, { status: 400 })
    }

    if (!["pending", "approved", "rejected"].includes(status)) {
      return NextResponse.json({ error: "Invalid status" }, { status: 400 })
    }

    const { error } = await supabaseAdmin.from("benevoles").update({ status }).eq("id", id)

    if (error) {
      console.error("Supabase update error:", error)
      return NextResponse.json({ error: "Failed to update volunteer status" }, { status: 500 })
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error("Volunteers API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
