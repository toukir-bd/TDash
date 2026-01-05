
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navItems = [
  "dashboard",
  "profile",
  "notifications",
  "management",
  "branches",
  "doctors",
  "centers",
  "policy",
  "accounts",
  "settings",
].map((page) => ({ label: page[0].toUpperCase() + page.slice(1), href: `/${page}` }))

export default function MenuBar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 border-r border-slate-800 bg-slate-900 p-6 flex flex-col">
      <div className="text-xl font-bold mb-6">YourApp</div>

      <nav className="flex-1 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "block rounded-md px-4 py-2 text-sm transition",
                isActive
                  ? "bg-slate-800 text-white"
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              )}
            >
              {item.label}
            </Link>
          )
        })}
      </nav>

      <button
        className="mt-auto rounded-md bg-slate-800 py-2 text-sm text-slate-300 hover:bg-slate-700"
        onClick={() => {
          localStorage.removeItem("token")
          window.location.href = "/sign-in"
        }}
      >
        Logout
      </button>
    </aside>
  )
}
