'use client'

import { Card, CardContent } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts'
import { Icon } from '@iconify/react'

const data = [
  { day: 'Mon', value: 30 },
  { day: 'Tue', value: 65 },
  { day: 'Wed', value: 80 },
  { day: 'Thu', value: 55 },
  { day: 'Fri', value: 45 },
]

export default function MedicinesStockCard() {
  return (
    <Card className="relative h-[380px] rounded-[10px] bg-white/35 text-white border-0 overflow-hidden">
      <div className="flex justify-between px-6 pt-6">
        <div>
          <h3 className="mainHead">Stock Products</h3>
          <h2 className="headValue">42450</h2>
        </div>
        <button className="h-12 w-12 rounded-[10px] bg-white/75 hover:bg-white/40 flex items-center justify-center">
          <Icon icon="tabler:dots" className="text-xl text-slate-700" />
        </button>
      </div>

      <CardContent className="h-40">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            {/* X Axis */}
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6B7280', fontSize: 12 }}
            />

            {/* Y Axis */}
            <YAxis hide />

            {/* Tooltip */}
            <Tooltip
              contentStyle={{ backgroundColor: 'white', borderRadius: 8, border: 'none' }}
              labelStyle={{ fontWeight: 600 }}
            />

            {/* Line */}
            <Line
              type="monotone"
              dataKey="value"
              stroke="#2563eb"
              strokeWidth={3}
              dot={{ r: 4, fill: '#2563eb' }}
              activeDot={{ r: 6 }}
              fill="rgba(37,99,235,0.15)"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
