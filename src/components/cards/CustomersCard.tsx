'use client'

import { ReactNode } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

export default function CustomersCard(): ReactNode {
  return (
    <Card className="col-span-2 h-[1500px] rounded-3xl bg-white dark:bg-neutral-900 dark:border-neutral-800">
      <CardContent className="flex items-center justify-between p-6">
        <div>
          <h3 className="text-lg font-semibold">Top Customers</h3>
          <div className="mt-2 flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="h-4 w-4 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
        </div>

        <Button className="rounded-full bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
          +89
        </Button>
      </CardContent>
    </Card>
  )
}
