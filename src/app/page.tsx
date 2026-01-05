"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { isLoggedIn } from "@/lib/auth"

export default function HomePage() {
  const router = useRouter()

  useEffect(() => {
    if (isLoggedIn()) {
      router.replace("/dashboard")
    } else {
      router.replace("/sign-in")
    }
  }, [router])

  return null // no content needed
}
