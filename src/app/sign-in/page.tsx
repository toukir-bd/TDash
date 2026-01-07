"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { login } from "@/lib/auth"
import { FloatingLabelInput } from "@/components/ui/floating-input"
import { ArrowRight, Sun, Moon } from "lucide-react"

export default function SignInPage() {
  const router = useRouter()
  const [error, setError] = useState("")
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    const root = window.document.documentElement
    if (theme === "dark") {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const email = formData.get("email")
    const password = formData.get("password")

    if (typeof email !== "string" || typeof password !== "string") {
      setError("Invalid form submission")
      return
    }

    if (login(email, password)) {
      localStorage.setItem("token", "FAKE-JWT-TOKEN")
      router.push("/dashboard")
    } else {
      setError("Invalid email or password")
    }
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-gradient-to-b from-sky-200 to-white dark:from-slate-900 dark:to-slate-950">
      
      {/* Theme Toggle Button */}
      <button onClick={toggleTheme} className="absolute top-5 right-5 p-2 rounded-full bg-white/30 dark:bg-slate-800/30 hover:bg-white/50 dark:hover:bg-slate-700/50 transition">
        {theme === "light" ? <Moon className="w-5 h-5 text-slate-900" /> : <Sun className="w-5 h-5 text-yellow-400" />}
      </button>
      
      {/* Soft arcs / aura */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full border border-white/80 dark:border-white/10"/>
        <div className="absolute -top-1/2 left-1/2 h-[1000px] w-[1000px] -translate-x-1/2 rounded-full border border-white/70 dark:border-white/5"/>
      </div>

      <Card className="p-8 relative z-10 w-full max-w-md rounded-[20px] border shadow-xl bg-white/20 border-white/30 backdrop-blur-sm dark:bg-slate-900/40 dark:border-white/10">
        <CardHeader className="text-center space-y-3 p-0">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl shadow bg-white/10 dark:bg-white/5">
            <ArrowRight className="h-5 w-5 text-slate-700 dark:text-slate-200" />
          </div>

          <CardTitle className="text-2xl font-semibold text-slate-900 dark:text-white">
            Sign in with email
          </CardTitle>

          <CardDescription className="text-sm text-slate-500 dark:text-slate-400">
            Make a new doc to bring your words, data, and teams together. For free
          </CardDescription>
        </CardHeader>

        <CardContent className="p-0">
          <form onSubmit={handleSubmit} className="space-y-5">
            <FloatingLabelInput
              id="email"
              name="email"
              label="Email"
              type="email"
              required
            />

            <FloatingLabelInput
              id="password"
              name="password"
              label="Password"
              type="password"
              required
            />

            <div className="text-right text-sm">
              <button type="button" className="text-slate-500 transition hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200">
                Forgot password?
              </button>
            </div>

            {error && (
              <p className="text-sm text-red-500 text-center">
                {error}
              </p>
            )}

            <Button className="w-full h-[50px] rounded-[5px] bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200">
              Get Started
            </Button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-slate-200 dark:bg-white/10" />
              <span className="text-xs text-slate-400">Or sign in with</span>
            <div className="h-px flex-1 bg-slate-200 dark:bg-white/10" />
          </div>

          {/* Social buttons */}
          <div className="grid grid-cols-3 gap-3">
            <Button variant="outline" className="rounded-xl dark:border-white/20 dark:text-slate-200 dark:hover:bg-white/10l">
              Google
            </Button>
            <Button variant="outline" className="rounded-xl">
              Facebook
            </Button>
            <Button variant="outline" className="rounded-xl">
              Apple
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
