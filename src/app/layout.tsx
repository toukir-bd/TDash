
// src/app/layout.tsx
import "./globals.scss"
import { ReactNode } from "react"
import ClientLayout from "@/components/layout/ClientLayout"

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Apply theme BEFORE React loads */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  const theme = localStorage.getItem("theme");
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (theme === 'dark' || (!theme && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (_) {}
              })();
            `,
          }}
        />
      </head>

      <body className="bg-[#E4E2DE] dark:bg-slate-900 text-slate-900 dark:text-white/80">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
