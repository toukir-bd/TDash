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

export type BarChartOptions = ChartOptions<'bar'>
export type LineChartOptions = ChartOptions<'line'>