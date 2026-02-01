

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
    <div className="w-[calc(100%-78px)] pt-[100px] p-10 bg-[#f2f2f2] dark:bg-slate-900">
      {/* <div className="fixed inset-0 pointer-events-none blur-[90px]">
        <div className="absolute -top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full border-[120px] border-[#ff7b00]/70 dark:border-[#725a3d]/65 opacity-30" />
        <div className="absolute -top-1/2 left-1/2 h-[1000px] w-[1000px] -translate-x-1/2 rounded-full border-[80px] border-[#8400ff]/70 dark:border-[#5a3568]/65 opacity-30" />
        <div className="absolute -top-1/2 left-1/2 h-[1200px] w-[1200px] -translate-x-1/2 rounded-full border-[80px] border-[#ff7b00]/70 dark:border-[#725a3d]/75 opacity-30" />
        <div className="absolute -top-1/2 left-1/2 h-[1400px] w-[1400px] -translate-x-1/2 rounded-full border-[80px] border-[#8400ff]/70 dark:border-[#5a3568]/65 opacity-30" />
      </div> */}
      {children}
    </div>
  )
}
