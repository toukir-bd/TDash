
// src/lib/auth.ts
const HARD_CODED_EMAIL = "user@admin.com"
const HARD_CODED_PASSWORD = "1234"

export function login(email: string, password: string): boolean {
  return email === HARD_CODED_EMAIL && password === HARD_CODED_PASSWORD
}

export function isLoggedIn(): boolean {
  if (typeof window === "undefined") return false
  return !!localStorage.getItem("token")
}

export function logout() {
  localStorage.removeItem("token")
}

