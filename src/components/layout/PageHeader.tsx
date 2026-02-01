
"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Icon } from '@iconify/react'

function segmentsFromPath(pathname: string) {
    return pathname.split("/").filter(Boolean)
}

function titleCase(str: string) {
    return str
        .replace(/-/g, " ")
        .replace(/\b\w/g, (l) => l.toUpperCase())
}

export default function PageHeader() {
    const pathname = usePathname()
    const segments = segmentsFromPath(pathname)

    return (
        <header className="flex items-center">
            <span className="text-[25px] font-[700] text-gray-950 dark:text-white">
                {segments.length ? titleCase(segments[segments.length - 1]) : "Dashboard"}
            </span>
            <nav className="flex items-center text-sm ms-4 relative">
                <Link href="/" className="breadHome">
                    <Icon icon="proicons:home" width="18" height="18"/>
                </Link>
                {segments.map((segment, index) => {
                    const href = "/" + segments.slice(0, index + 1).join("/")
                    const isLast = index === segments.length - 1
                    return (
                        <span key={href} className="flex items-center absolute left-[10px] -z-10">
                            {isLast ? (
                                <span className="breadLast">
                                    {titleCase(segment)}
                                </span>
                            ) : (
                                <Link href={href} className="hover:text-slate-900 dark:hover:text-white transition">
                                    {titleCase(segment)}
                                </Link>
                            )}
                        </span>
                    )
                })}
            </nav>
        </header>
    )
}
