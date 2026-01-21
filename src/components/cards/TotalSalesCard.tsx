'use client'

import { Card } from '@/components/ui/card'
import { Bar } from 'react-chartjs-2'
import type { BarChartOptions } from '@/lib/chart'
import { Icon } from '@iconify/react'
import type { ScriptableContext } from 'chart.js'
import { createDotPattern, createStripePattern } from '@/lib/chart-patterns'


const options: BarChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: { enabled: false },
    datalabels: {
      color: '#fff',
      anchor: 'end',
      align: 'top',
      font: { size: 14, weight: 600 },
      formatter: (v, ctx) =>
        `+${v}%\n${ctx.chart.data.labels?.[ctx.dataIndex]}`,
    },
  },
  scales: {
    x: {
      grid: { display: false },
      ticks: {
        color: 'rgba(255,255,255,0.85)',
        font: { size: 13 },
      },
    },
    y: { display: false },
  },
}

export default function TotalSalesCard() {
  return (
    <Card className="relative h-[360px] rounded-[30px] bg-blue-600 dark:bg-blue-500 text-white border-0 overflow-hidden">
      {/* Header */}
      <div className="flex justify-between px-6 pt-6">
        <div>
          <h3 className="text-[18px] font-semibold">Total Sales weekly</h3>
          <p className="text-[14px] opacity-80">$12,450</p>
        </div>
        <button className="h-10 w-10 rounded-full bg-white/15 flex items-center justify-center">
          <Icon icon="mdi:tune-variant" className="text-xl text-white" />
        </button>
      </div>

      {/* Chart */}
      <div className="absolute bottom-0 left-0 right-0 h-[300px] px-6 pb-6">
        <Bar
          options={options}
          data={{
            labels: ['Saturday', 'Sunday', 'Monday', 'Tuesday'],
            datasets: [
              {
                data: [5.4, 10, 15.3, 20],
                borderRadius: 18,
                borderSkipped: false,
                backgroundColor: (ctx: ScriptableContext<'bar'>) => {
                  const i = ctx.dataIndex
                  const c = ctx.chart.ctx

                  if (i === 0) return 'rgba(255,255,255,0.95)'
                  if (i === 1) return createDotPattern(c)
                  if (i === 2) return createStripePattern(c)

                  const g = c.createLinearGradient(0, 0, 0, 180)
                  g.addColorStop(0, '#ffffff')
                  g.addColorStop(1, 'rgba(255,255,255,0.6)')
                  return g
                },
              },
            ],
          }}
        />
      </div>
    </Card>
  )
}
