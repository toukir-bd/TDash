'use client'

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Cell,
  Tooltip,
} from 'recharts'
import { Card } from '@/components/ui/card'
import { Icon } from '@iconify/react'

const COLORS = {
  past: '#1f2937',
  current: '#14532d',
  active: '#22c55e',
  future: '#334155',
}

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
const CURRENT_MONTH = 'Mar'
const DAYS_IN_MONTH = 22

// Real daily sales for past & current months
const SALES_DATA: Record<string, number[]> = {
  Jan: [400, 320, 500, 450, 380, 600, 300, 410, 500, 450, 420, 390, 480, 520, 450, 400, 410, 430, 460, 490, 500, 470],
  Feb: [450, 480, 500, 520, 400, 420, 460, 430, 480, 500, 510, 490, 450, 470, 460, 430, 420, 400, 430, 450, 470, 480],
  Mar: [420, 430, 450, 460, 480, 500, 520, 540, 560, 580, 600, 620, 640, 660, 680, 700, 720, 740, 760, 780, 800, 820],
}

// Precompute monthly totals
const MONTH_TOTALS: Record<string, number> = {}
months.forEach((month) => {
  const values = SALES_DATA[month] || []
  MONTH_TOTALS[month] = values.reduce((sum, v) => sum + v, 0)
})

type DayData = {
  month: string
  day: number
  value: number
  isPastMonth: boolean
  isCurrentMonth: boolean
  isActiveDay: boolean
  isFutureMonth: boolean
}

// Build daily bars including future month random values
const data: DayData[] = months.flatMap((month) =>
  Array.from({ length: DAYS_IN_MONTH }, (_, dIndex) => {
    const isPastMonth = months.indexOf(month) < months.indexOf(CURRENT_MONTH)
    const isCurrentMonth = month === CURRENT_MONTH
    const isFutureMonth = months.indexOf(month) > months.indexOf(CURRENT_MONTH)
    const isActiveDay = isCurrentMonth && dIndex === DAYS_IN_MONTH - 1

    const value =
      isPastMonth || isCurrentMonth
        ? SALES_DATA[month][dIndex]
        : Math.floor(Math.random() * 400) + 200 // future month random

    return {
      month,
      day: dIndex + 1,
      value,
      isPastMonth,
      isCurrentMonth,
      isActiveDay,
      isFutureMonth,
    }
  })
)

// interface TooltipProps {
//   active?: boolean;
//   payload?: Array<{ payload: any }>;
//   label?: string | number;
// }

// Tooltip shows sum of month only for past/current months
const CustomTooltip = ({ active, payload }: { active?: boolean; payload?: { payload: DayData }[] }) => {
  if (!active || !payload?.length) return null
  const month = payload[0].payload.month
  if (months.indexOf(month) > months.indexOf(CURRENT_MONTH)) return null
  const total = MONTH_TOTALS[month] || 0

  return (
    <div className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-xs">
      <p className="text-gray-500">{month}</p>
      <p className="text-gray-700 font-semibold tracking-wide">Monthly Sales: {total}</p>
    </div>
  )
}


export default function SalesGrowth() {
  const currentMonthTotal = MONTH_TOTALS[CURRENT_MONTH] || 0

  return (
    <Card className="cardBox">
      {/* Header */}
      <div className="flex justify-between">
        <div>
          <h3 className="mainHead">Sales Growth</h3>
          <h2 className="headValue">${currentMonthTotal.toLocaleString()}</h2>
        </div>
        <button className="boxButton">
          <Icon icon="tabler:dots" className="text-xl" />
        </button>
      </div>

      {/* Chart */}
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barCategoryGap={2}>
            <XAxis
              dataKey="month"
              tick={{ fill: '#64748b', fontSize: 11 }}
              axisLine={false}
              tickLine={false}
              interval={DAYS_IN_MONTH - 1} // show month once
            />
            <YAxis
              tick={{ fill: '#64748b', fontSize: 11 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />

            <Bar dataKey="value" radius={[2, 2, 2, 2]}>
              {data.map((d, i) => {
                let fill = COLORS.past
                let opacity = 0.6

                if (d.isFutureMonth) {
                  fill = COLORS.future
                  opacity = 0.5
                } else if (d.isCurrentMonth) {
                  fill = COLORS.current
                  opacity = d.isActiveDay ? 1 : 0.8
                }

                if (d.isActiveDay) fill = COLORS.active

                return <Cell key={i} fill={fill} opacity={opacity} />
              })}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
