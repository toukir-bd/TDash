
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"

export default async function ManagerPage() {
  const isAuthenticated = await auth()

  if (!isAuthenticated) {
    redirect("/sign-in")
  }

  return <h1>Manager Dashboard</h1>
}
