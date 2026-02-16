
import { ReactNode } from "react"
import TotalSales from "@/components/cards/TotalSales"
import SalesGrowth from "@/components/cards/SalesGrowth"
import CustomersCard from "@/components/cards/CustomersCard"
import InventoryItem from "@/components/cards/InventoryItem"

export default function DashboardPage(): ReactNode {
  return (
    <div className="grid grid-cols-3 gap-[5px]">
      <div className="col-span-2 grid grid-cols-2 gap-[5px]">
        <TotalSales/>
        <SalesGrowth/>
        <CustomersCard/>
      </div>
      <InventoryItem/>
    </div>
  )
}
