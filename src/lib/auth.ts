// src/lib/auth.ts
import { cookies } from "next/headers"

const FIXED_USER = {
  email: "user@admin.com",
  password: "1234",
}

export async function signIn(email: string, password: string) {
  if (
    email !== FIXED_USER.email ||
    password !== FIXED_USER.password
  ) {
    return false
  }

  const cookieStore = await cookies()

  cookieStore.set("session", "authenticated", {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
  })

  return true
}

export async function signOut() {
  const cookieStore = await cookies()
  cookieStore.delete("session")
}

export async function auth() {
  const cookieStore = await cookies()
  return cookieStore.get("session")?.value === "authenticated"
}
