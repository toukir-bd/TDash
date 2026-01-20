
"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight, House } from "lucide-react"

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
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
                {segments.length ? titleCase(segments[segments.length - 1]) : "Dashboard"}
            </h1>
            <nav className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                <Link href="/" className="hover:text-slate-900 dark:hover:text-white transition">
                    <House className="mx-2 h-4 w-4 text-slate-400"/>
                </Link>
                {segments.map((segment, index) => {
                    const href = "/" + segments.slice(0, index + 1).join("/")
                    const isLast = index === segments.length - 1
                    return (
                        <span key={href} className="flex items-center">
                            <ChevronRight className="mx-2 h-4 w-4 text-slate-400" />
                            {isLast ? (
                                <span className="font-medium text-slate-700 dark:text-slate-300">
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
