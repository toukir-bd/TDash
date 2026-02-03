'use client'

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from 'recharts'
import { Card } from '@/components/ui/card'
import { Icon } from '@iconify/react'

const indicators = [
  { label: 'Medicines', color: 'bg-blue-500' },
  { label: 'Out', color: 'bg-blue-300' },
  { label: 'Pending', color: 'bg-blue-200' },
  { label: 'Registered', color: 'bg-blue-700' },
]

const data = [
  { step: 'Jan', value: 22 },
  { step: 'Feb', value: 60 },
  { step: 'Mar', value: 90 },
  { step: 'Apr', value: 55 },
]

export default function StockProducts() {
  return (
    <Card className="cardBox">
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="mainHead">Products In Stock</h3>
          <h2 className="headValue">$12,450.00</h2>
        </div>
        <button className="text-white/70 hover:text-white transition">
          <Icon icon="tabler:dots" className="text-xl" />
        </button>
      </div>

      <div className="w-full h-[160px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="lineFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#22c55e" stopOpacity={0.6} />
                <stop offset="100%" stopColor="#22c55e" stopOpacity={0} />
              </linearGradient>
            </defs>

            <XAxis dataKey="step" hide />
            <YAxis hide domain={[0, 100]} />

            <Area
              type="monotone"
              dataKey="value"
              stroke="#22c55e"
              strokeWidth={3}
              fill="url(#lineFill)"
              dot={false}
              activeDot={{ r: 6 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="flex gap-3 w-[35%]">
        {indicators.map((item, i) => (
          <div key={i} className="flex items-center gap-2 text-sm text-white/70">
            <span className={`w-2.5 h-2.5 rounded-full ${item.color}`} />
            {item.label}
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
    </Card>
  )
}
