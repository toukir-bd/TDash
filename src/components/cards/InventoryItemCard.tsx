
'use client'

import { ReactNode } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Icon } from '@iconify/react'

export default function InventoryItemCard(): ReactNode {
  return (
    <Card className="cardBox">
      <div className="flex justify-between">
        <div>
          <h3 className="mainHead">Total Sales</h3>
          <h2 className="headValue">$12450.00</h2>
        </div>
        <button className="boxButton">
          <Icon icon="tabler:dots" className="text-xl text-slate-700" />
        </button>
      </div>
      <CardContent className="flex gap-6 p-6">
        <div className="relative h-40 w-28">
          <Image
            src=""
            alt="Amoxicillin"
            fill
            priority
            className="object-contain"
          />
        </div>

        <div className="flex-1">
          <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700 dark:bg-green-900/30 dark:text-green-400">
            In Stock
          </span>

          <h3 className="mt-3 text-lg font-semibold">Aspirin 500mg</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Expires: 2024-12-15
          </p>

          <div className="mt-4 flex justify-between text-sm">
            <span>Stock: 450 units</span>
            <span className="text-red-500">Low: 100</span>
          </div>

          <div className="mt-3 h-2 w-full rounded-full bg-gray-200 dark:bg-neutral-800">
            <div className="h-full w-[80%] rounded-full bg-blue-600" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
