
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
      <body className="min-h-screen bg-slate-950 text-white">
        <div className="flex min-h-screen">
          {!isAuthPage && <MenuBar />}

          {isAuthPage ? (
            <main className="flex-1 p-6">{children}</main>
          ) : (
            <ProtectWrapper>
              <main className="flex-1 p-6">{children}</main>
            </ProtectWrapper>
          )}
        </div>
      </body>
    </html>
  )
}
