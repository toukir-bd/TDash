import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js'

import ChartDataLabels from 'chartjs-plugin-datalabels'
import type { ChartOptions } from 'chart.js'

// runtime registration
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  ChartDataLabels
)

// ✅ TYPE EXPORT (THIS is what you’re missing)
export type BarChartOptions = ChartOptions<'bar'>
export type LineChartOptions = ChartOptions<'line'>