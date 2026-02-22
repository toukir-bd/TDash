

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
    <div className="w-[calc(100%-78px)] pt-[140px] p-10 bg-[#E4EAF7] dark:bg-gray-900">
      <div className="fixed inset-0 pointer-events-none blur-[30px]">
        <div className="absolute -top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full border-[80px] border-[#7EFF00] dark:border-[#7EFF00]/50 opacity-20" />
        <div className="absolute -top-1/2 left-1/2 h-[1000px] w-[1000px] -translate-x-1/2 rounded-full border-[80px] border-[#8100FF] dark:border-[#8100FF]/50 opacity-20" />
        <div className="absolute -top-1/2 left-1/2 h-[1200px] w-[1200px] -translate-x-1/2 rounded-full border-[80px] border-[#7EFF00] dark:border-[#7EFF00]/50 opacity-20" />
        <div className="absolute -top-1/2 left-1/2 h-[1400px] w-[1400px] -translate-x-1/2 rounded-full border-[80px] border-[#8100FF] dark:border-[#8100FF]/50 opacity-20" />
      </div>
      {children}
    </div>
  )
}
