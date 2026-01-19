'use client'
import { ReactNode } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar } from "react-chartjs-2"
import type { BarChartOptions } from "@/lib/chart"

const options: BarChartOptions = {
  responsive: true,
  plugins: {
    legend: { display: false },
    datalabels: {
      color: '#fff',
      anchor: 'end',
      align: 'top',
      font: { weight: '600', size: 12 },
      formatter: (value: number) => value,
    },
  },
  scales: {
    x: { grid: { display: false }, ticks: { color: '#fff' } },
    y: { display: false },
  },
}


export default function TotalSalesCard(): ReactNode {
  return (
    <Card className="rounded-[50px] bg-blue-600 text-white dark:bg-blue-500 border-0 shadow-none">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Total Sales (Weekly)</CardTitle>
        <p className="text-sm opacity-90">$12,450</p>
      </CardHeader>

      <CardContent>
        <Bar
          options={options}
          data={{
            labels: ['Sat', 'Sun', 'Mon', 'Tue'],
            datasets: [
              {
                data: [5.4, 10, 15.3, 20],
                backgroundColor: 'rgba(255,255,255,0.9)',
                borderRadius: 12,
                borderSkipped: false,
              },
            ],
          }}
        />
      </CardContent>
    </Card>
  )
}
