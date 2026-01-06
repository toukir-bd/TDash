
// src/app/layout.tsx
"use client"

import "./globals.scss"
import { ReactNode } from "react"
import { usePathname } from "next/navigation"
import MenuBar from "@/components/layout/MenuBar"
import ProtectWrapper from "@/components/layout/ProtectWrapper"

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const authPages = ["/sign-in", "/forgot-password"]
  const isAuthPage = authPages.includes(pathname)

  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900">
        {!isAuthPage && <MenuBar />}
        {isAuthPage ? (
          <main>{children}</main>
        ) : (
          <ProtectWrapper>
            <main>{children}</main>
          </ProtectWrapper>
        )}
      </body>
    </html>
  )
}
