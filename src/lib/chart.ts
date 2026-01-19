// src/lib/chart.ts
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
  ChartOptions,
} from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'

// Register Chart.js components + datalabels plugin
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
  ChartDataLabels
)

// Extend Chart.js types to allow datalabels plugin options
declare module 'chart.js' {
  interface PluginOptionsByType<TType extends keyof ChartTypeRegistry> {
    datalabels?: {
      color?: string
      anchor?: 'start' | 'center' | 'end'
      align?: 'start' | 'center' | 'end' | 'top' | 'bottom'
      font?: {
        weight?: string | number
        size?: number
      }
      formatter?: (value: number) => string | number
    }
  }
}

// Now these types are safe to use in your cards
export type BarChartOptions = ChartOptions<'bar'>
export type LineChartOptions = ChartOptions<'line'>
