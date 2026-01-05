
"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

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
    <div className="flex min-h-screen items-center justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader>Sign in</CardHeader>
        <CardContent>
          <form action={onSubmit} className="space-y-4">
            <Input name="email" placeholder="Email" />
            <Input name="password" type="password" placeholder="Password" />
            {error && <p className="text-sm text-red-500">{error}</p>}
            <Button className="w-full">Sign in</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
