'use client'

import { Card } from '@/components/ui/card'
import { BarChart, Bar, XAxis, ResponsiveContainer, LabelList, LabelProps } from 'recharts'
import { Icon } from '@iconify/react'

const data = [
  { name: 'Saturday', value: 5.4 },
  { name: 'Sunday', value: 10 },
  { name: 'Monday', value: 15.3 },
  { name: 'Tuesday', value: 20 },
]

interface CustomBarProps {
  x?: number
  y?: number
  width?: number
  height?: number
  index?: number
}

const CustomBar = ({
  x = 0,
  y = 0,
  width = 0,
  height = 0,
  index = 0,
}: CustomBarProps) => {
  const fills = ['url(#solid)', 'url(#dots)', 'url(#stripes)', 'url(#gradient)']
  const fill = index === 0 ? 'url(#solid)' : fills[index % fills.length]
  return <rect x={x} y={y} width={width} height={height} rx={18} fill={fill} />
}

const CustomLabel = (props: LabelProps) => {
  const { x, y, width, value, index } = props
  if (
    x === undefined ||
    y === undefined ||
    width === undefined ||
    value === undefined ||
    index === undefined
  )
  return null
  const numericX = Number(x) + Number(width) / 2
  const numericY = Number(y)
  const numericValue = Number(value)
  const day = data[index].name
  const valueOffset = 30 // distance above bar for value
  const dayOffset = 20  // distance from value to day

  return (
    <g>
      <text
        x={numericX}
        y={numericY - valueOffset}
        textAnchor="middle"
        fill="#fff"
        fontSize={19}
        fontWeight={400}
      >
        {`${numericValue}%`}
      </text>
      <text
        x={numericX}
        y={numericY - valueOffset + dayOffset}
        textAnchor="middle"
        fill="rgba(255,255,255,.6)"
        fontSize={14}
        fontWeight={400}
      >
        {day}
      </text>
    </g>
  )
}



export default function TotalSales() {
  return (
    <Card className="cardBox">
      <div className="flex justify-between">
        <div>
          <h3 className="mainHead">Total Sales</h3>
          <h2 className="headValue">$12450.00</h2>
        </div>
        <button className="boxButton">
          <Icon icon="tabler:dots" className="text-xl" />
        </button>
      </div>
      <div className="totalSales absolute inset-x-0  bottom-0 h-[300px] px-4 min-h-[0]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barCategoryGap="2%">
            <defs>
              <linearGradient id="solid" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1f1f1f" />
                <stop offset="100%" stopColor="#1f1f1f" />
              </linearGradient>
              <pattern id="dots" width="4" height="4" patternUnits="userSpaceOnUse">
                <circle cx=".5" cy=".5" r="1" fill="#1f1f1f" />
              </pattern>
              <pattern id="stripes" width="7" height="7" patternUnits="userSpaceOnUse">
                <path d="M0 7 L7 0" stroke="#1f1f1f" strokeWidth="1" />
              </pattern>
              <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1f1f1f" />
                <stop offset="100%" stopColor="rgba(0,0,0,0)" />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={false}
            />
            <Bar dataKey="value" shape={<CustomBar />}>
              <LabelList dataKey="value" content={CustomLabel} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
