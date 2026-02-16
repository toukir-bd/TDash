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
  if (!x || !y || !width || value === undefined || index === undefined) return null

  const numericX = Number(x) + Number(width) / 2
  const numericY = Number(y)
  const day = data[index].name

  return (
    <g className="text-gray-700 dark:text-gray-200">
      <text
        x={numericX}
        y={numericY - 30}
        textAnchor="middle"
        fill="currentColor"
        fontSize={19}
        fontWeight={600}
      >
        {`${value}%`}
      </text>

      <text
        x={numericX}
        y={numericY - 10}
        textAnchor="middle"
        fill="currentColor"
        className="opacity-70"
        fontSize={12}
        fontWeight={500}
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
      <div className="totalSales absolute inset-x-0  bottom-0 h-[300px] px-6 min-h-[0]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barCategoryGap="2%">
            <defs>
              <linearGradient id="solid" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(99, 95, 215, 1)" />
                <stop offset="100%" stopColor="rgba(99, 95, 215, 1)" />
              </linearGradient>
              <pattern id="dots" width="4" height="4" patternUnits="userSpaceOnUse">
                <circle cx=".5" cy=".5" r="1" fill="rgba(99, 95, 215, 1)" />
              </pattern>
              <pattern id="stripes" width="7" height="7" patternUnits="userSpaceOnUse">
                <path d="M0 7 L7 0" stroke="rgba(99, 95, 215, 1)" strokeWidth="1" />
              </pattern>
              <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(99, 95, 215, 1)" />
                <stop offset="100%" stopColor="rgba(99, 95, 215, 0)" />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={false}
            />
            <Bar dataKey="value" shape={<CustomBar />}>
              <LabelList dataKey="value" content={CustomLabel} className='bg-[#635FD7]'/>
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
