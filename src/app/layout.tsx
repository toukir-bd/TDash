// src/app/layout.tsx
import "./globals.scss"
import { ReactNode } from "react"
import { usePathname } from "next/navigation"
import MenuBar from "@/components/layout/MenuBar"
import ProtectWrapper from "@/components/layout/ProtectWrapper"
import ThemeProvider from "@/components/layout/ThemeProvider"

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const authPages = ["/sign-in", "/forgot-password"]
  const isAuthPage = authPages.includes(pathname)

  return (
    <html lang="en">
      <body className="bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white/80">
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
      </body>
    </html>
  )
}
