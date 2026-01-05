

"use client"

import { ReactNode, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { isLoggedIn } from "@/lib/auth"

export default function ProtectedWrapper({ children }: { children: ReactNode }) {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!isLoggedIn()) {
      router.replace("/sign-in")
    } else {
      setLoading(false)
    }
  }, [router])

  if (loading) return <div className="flex items-center justify-center min-h-screen text-white">Loading...</div>

  return <>{children}</>
}
