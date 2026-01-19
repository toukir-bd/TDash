"use client"

import '@/lib/chart'
import { ReactNode } from "react"
import { usePathname } from "next/navigation"
import MenuBar from "@/components/layout/MenuBar"
import ProtectWrapper from "@/components/layout/ProtectWrapper"
import ThemeProvider from "@/components/layout/ThemeProvider"

export default function ClientLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const authPages = ["/sign-in", "/forgot-password"]
  const isAuthPage = authPages.includes(pathname)

  return (
    <ThemeProvider>
      <div className="flex w-full">
        {!isAuthPage && <MenuBar/>}
        {isAuthPage ? (
          <main className="w-full">{children}</main>
        ) : (
          <ProtectWrapper>
            <main>{children}</main>
          </ProtectWrapper>
        )}
      </div>
    </ThemeProvider>
  )
}
