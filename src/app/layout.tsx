
// src/app/layout.tsx
import "./globals.scss"
import { ReactNode } from "react"
import type { Metadata } from 'next'
import ClientLayout from "@/components/layout/ClientLayout"


export function generateMetadata({ params }: { params: { slug?: string[] }
}): Metadata {
  const page = params?.slug?.[0] ?.replace(/-/g, ' ') ?.replace(/\b\w/g, c => c.toUpperCase()) ?? 'Dashboard'
  return {
    title: `TDASH | ${page}`,
  }
}

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

      <body className="bg-[#e6dcd6] dark:bg-slate-900 text-slate-900 dark:text-white/80">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
