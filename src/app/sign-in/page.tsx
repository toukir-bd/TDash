"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function SignInPage() {
  const router = useRouter()
  const [error, setError] = useState("")

  async function onSubmit(formData: FormData) {
    setError("")

    const res = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    })

    if (!res.ok) {
      setError("Invalid email or password")
      return
    }

    router.push("/dashboard")
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 px-4">
      <Card className="w-full max-w-md border-slate-800 bg-slate-900/80 backdrop-blur shadow-2xl">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-semibold text-white">
            Welcome back
          </CardTitle>
          <CardDescription className="text-slate-400">
            Sign in to continue to your dashboard
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form action={onSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-slate-300">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                className="bg-slate-950 border-slate-800 text-white placeholder:text-slate-500"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-slate-300">
                Password
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                className="bg-slate-950 border-slate-800 text-white placeholder:text-slate-500"
                required
              />
            </div>

            {error && (
              <p className="text-sm text-red-400 text-center">{error}</p>
            )}

            <Button className="w-full bg-white text-slate-900 hover:bg-slate-200">
              Sign In
            </Button>
          </form>

          <p className="mt-6 text-center text-xs text-slate-500">
            © {new Date().getFullYear()} Your Company
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
