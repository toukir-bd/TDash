"use client"

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
      {!isAuthPage && <MenuBar />}
      {isAuthPage ? (
        <main>{children}</main>
      ) : (
        <ProtectWrapper>
          <main>{children}</main>
        </ProtectWrapper>
      )}
    </ThemeProvider>
  )
}
