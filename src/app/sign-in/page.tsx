"use client"

import { useState } from "react"
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


export default function SignInPage() {
  const router = useRouter()
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const email = formData.get("email") as string
    const password = formData.get("password") as string

    if (login(email, password)) {
      localStorage.setItem("token", "FAKE-JWT-TOKEN")
      router.push("/dashboard")
    } else {
      setError("Invalid email or password")
    }
  }

  return (
    <div className="flex min-h-screen w-full items-center justify-center px-4">
      <Card className="w-full max-w-md bg-white shadow-xl">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-semibold">
            Welcome back
          </CardTitle>
          <CardDescription className="text-slate-400">
            Sign in with your email and password
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
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

            {error && (
              <p className="text-sm text-red-500 text-center">
                {error}
              </p>
            )}

            <Button className="w-full">
              Sign In
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
