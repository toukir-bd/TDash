
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"

export default async function ManagerPage() {
  const isAuthenticated = await auth()

  if (!isAuthenticated) {
    redirect("/sign-in")
  }

  return <h1 className="text-center text-7xl font-semibold text-slate-800">Lufga Regular</h1>
}
