

"use client"

import { ReactNode, useEffect } from "react"
import { useRouter } from "next/navigation"
import { isLoggedIn } from "@/lib/auth"
import PageLoader from '@/components/layout/PageLoader'

export default function ProtectedWrapper({children,}:{children:ReactNode}) {
  const router = useRouter()

  useEffect(() => {
    if (!isLoggedIn()) {
      router.replace("/sign-in")
    }
  }, [router])

  if (!isLoggedIn()) {
    return (
      <PageLoader/>
    )
  }

  return (
    <div className="w-[calc(100%-78px)] p-10">
      {children}
    </div>
  )
}
