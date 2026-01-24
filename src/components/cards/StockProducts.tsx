'use client'

import { Card } from "@/components/ui/card"
import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  ReferenceDot,
} from "recharts"
import { Icon } from "@iconify/react"

const indicators = [
  { label: "Medicines", color: "bg-blue-500" },
  { label: "Out", color: "bg-blue-300" },
  { label: "Pending", color: "bg-blue-200" },
  { label: "Registered", color: "bg-blue-700" },
]

// Today movement trend (mock — visual only)
const data = [
  { step: 1, value: 22, tag: "+3.2%" },
  { step: 2, value: 60, tag: "-12.5" },
  { step: 3, value: 90, tag: "+20.1%" },
  { step: 4, value: 55, tag: "+7.9%" },
]

export default function StockProducts() {
  return (
    <Card className="cardBox">
      <div className="flex justify-between">
        <div>
          <h3 className="mainHead">Products In Stock</h3>
          <h2 className="headValue">$12450.00</h2>
        </div>
        <button className="boxButton">
          <Icon icon="tabler:dots" className="text-xl" />
        </button>
      </div>

      <div className="flex gap-4">
        {/* Indicators */}
        <div className="flex flex-col gap-3 w-[40%]">
          {indicators.map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
              <span className={`w-3 h-3 rounded-full ${item.color}`} />
              {item.label}
            </div>
          ))}
        </div>

        {/* Graph */}
        <div className="w-[60%] h-[150px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="step" hide />
              <YAxis hide domain={[0, 100]} />

              {/* Solid line */}
              <Line
                type="monotone"
                dataKey="value"
                stroke="#2563eb"
                strokeWidth={4}
                dot={{ r: 6, fill: "#2563eb" }}
                activeDot={{ r: 8 }}
              />

              {/* Floating bubbles */}
              {data.map((d, i) => (
                <ReferenceDot
                  key={i}
                  x={d.step}
                  y={d.value}
                  r={0}
                  label={{
                    value: d.tag,
                    position: "top",
                    fill: "#fff",
                    fontSize: 11,
                    fontWeight: 600,
                    offset: 15,
                  }}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  )
}
