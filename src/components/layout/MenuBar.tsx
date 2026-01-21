
"use client"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Icon } from '@iconify/react'

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: "carbon:dashboard-reference" },
  { label: "Profile", href: "/profile", icon: "ph:user" },
  { label: "Management", href: "/management", icon: "hugeicons:folder-management" },
  { label: "Centers", href: "/centers", icon: "hugeicons:building-03" },
  { label: "Accounts", href: "/accounts", icon: "streamline-ultimate:cash-search" },
  { label: "Policy", href: "/policy", icon: "hugeicons:policy" },
  { label: "Settings", href: "/settings", icon: "hugeicons:dashboard-circle-settings" }
]


export default function MenuBar() {
  const pathname = usePathname()
  return (
    <aside>
      <div className="menuBar-side">
        <div className="mb-8 text-lg font-bold text-white">
          ⚡
        </div>
        <nav className="flex flex-col gap-1 flex-1">
          {navItems.map(({ href, icon, label }) => {
            const isActive = pathname === href
            return (
              <Link key={href} href={href} title={label} className={cn('navMenus', isActive ? "active" : "")}>
                <Icon icon={icon} width="19" height="19" />
                <span>{label}</span>
              </Link>
            )
          })}
        </nav>
        <div className="flex flex-col gap-1 pt-6">
          <button title="User profile" className="navMenus overflow-hidden">
            <Image className="overflow-hidden object-cover" src="/images/user.webp" alt="User" width={56} height={56}/>
          </button>
          <button title="Logout" onClick={() => { localStorage.removeItem("token"); window.location.href = "/sign-in"}} className="navMenus logoutMenu">
            <Icon icon="hugeicons:logout-square-01" width="20" height="20" />
          </button>
        </div>
      </div>
    </aside>
  )
}