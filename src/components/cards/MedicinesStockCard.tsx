'use client'

import { ReactNode } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Line } from "react-chartjs-2"
import type { LineChartOptions } from "@/lib/chart"

const options: LineChartOptions = {
  responsive: true,
  plugins: {
    legend: { display: false },
    datalabels: {
      color: '#2563eb',
      anchor: 'end',
      align: 'top',
      font: { weight: 600 },
      formatter: (value: number) => value,
    },
  },
  elements: {
    line: { tension: 0.4, borderWidth: 3 },
    point: { radius: 4 },
  },
  scales: {
    x: { grid: { display: false } },
    y: { display: false },
  },
}


export default function MedicinesStockCard(): ReactNode {
  return (
    <Card className="rounded-3xl bg-white dark:bg-neutral-900 dark:border-neutral-800">
      <CardHeader>
        <CardTitle>Medicines in Stock</CardTitle>
        <p className="text-sm text-gray-500 dark:text-gray-400">2,847</p>
      </CardHeader>

      <CardContent>
        <Line
          options={options}
          data={{
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
            datasets: [
              {
                data: [30, 65, 80, 55, 45],
                borderColor: '#2563eb',
                backgroundColor: 'rgba(37,99,235,0.15)',
                fill: true,
              },
            ],
          }}
        />
      </CardContent>
    </Card>
  )
}
