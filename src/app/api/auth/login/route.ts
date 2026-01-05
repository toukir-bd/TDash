

import { NextResponse } from "next/server"
import { signIn } from "@/lib/auth"

export async function POST(req: Request) {
  const { email, password } = await req.json()

  const ok = await signIn(email, password)

  if (!ok) {
    return NextResponse.json(
      { error: "Invalid credentials" },
      { status: 401 }
    )
  }

  if (!email || !password) {
    return NextResponse.json(
        { error: "Missing credentials" },
        { status: 400 }
    )
  }

  return NextResponse.json({ success: true })
}
