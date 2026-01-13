"use client"

import { useState, useContext } from "react"
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
import { LogIn, Sun, Moon } from "lucide-react"
import { ThemeContext } from "@/components/layout/ThemeProvider"

export default function SignInPage() {
  const router = useRouter()
  const [error, setError] = useState("")
  const { theme, toggleTheme } = useContext(ThemeContext)

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
    <div className="sign-page">
      <button onClick={toggleTheme} className="btn-theme" aria-label="Toggle theme">
        {theme === "dark" ? (<Sun className="h-[18px] w-[18px] text-yellow-400"/>) : (<Moon className="h-[18px] w-[18px] text-slate-900"/>)}
      </button>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full border border-white/80 dark:border-white/10" />
        <div className="absolute -top-1/2 left-1/2 h-[1000px] w-[1000px] -translate-x-1/2 rounded-full border border-white/70 dark:border-white/5" />
      </div>
      <Card className="sign-card">
        <CardHeader className="text-center space-y-3 p-0 mb-3">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-[10px] bg-white/70 dark:bg-white/5">
            <LogIn className="h-6 w-6 text-slate-700 dark:text-slate-200" />
          </div>
          <CardTitle className="text-4xl font-[700] text-slate-700 dark:text-white">
            Sign In
          </CardTitle>
          <CardDescription className="text-[14px] font-[400] text-slate-600 dark:text-slate-400">
            Welcome! Please enter your details.
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
            <div className="text-right text-[12px] font-[500]">
              <button type="button" className="text-slate-600 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 hover:underline">
                Forgot password?
              </button>
            </div>

            {error && (
              <p className="text-sm text-red-500 text-center">
                {error}
              </p>
            )}

            <Button className="w-full h-[50px] rounded-[5px] bg-slate-700 hover:bg-slate-800 dark:bg-white/90 dark:hover:bg-white text-white dark:text-slate-900 shadow">
              Get Started
            </Button>
          </form>

          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-slate-200 dark:bg-white/10" />
              <span className="text-xs text-slate-500 font-">Or sign in with</span>
            <div className="h-px flex-1 bg-slate-200 dark:bg-white/10" />
          </div>

          <div className="grid grid-cols-3 gap-3">
            <button type="button" className="btn-social">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 262"><path fill="#4285f4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"/><path fill="#34a853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"/><path fill="#fbbc05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"/><path fill="#eb4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"/></svg>
            </button>
            <button type="button" className="btn-social">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256"><path fill="#1877f2" d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"/><path fill="#fff" d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z"/></svg>
            </button>
            <button type="button" className="btn-social">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M11.673 7.222c-.876 0-2.232-.996-3.66-.96c-1.884.024-3.612 1.092-4.584 2.784c-1.956 3.396-.504 8.412 1.404 11.172c.936 1.344 2.04 2.856 3.504 2.808c1.404-.06 1.932-.912 3.636-.912c1.692 0 2.172.912 3.66.876c1.512-.024 2.472-1.368 3.396-2.724c1.068-1.56 1.512-3.072 1.536-3.156c-.036-.012-2.94-1.128-2.976-4.488c-.024-2.808 2.292-4.152 2.4-4.212c-1.32-1.932-3.348-2.148-4.056-2.196c-1.848-.144-3.396 1.008-4.26 1.008m3.12-2.832c.78-.936 1.296-2.244 1.152-3.54c-1.116.048-2.46.744-3.264 1.68c-.72.828-1.344 2.16-1.176 3.432c1.236.096 2.508-.636 3.288-1.572"/></svg>
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
