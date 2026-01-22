
import { ReactNode } from "react"
import TotalSalesCard from "@/components/cards/TotalSalesCard"
import MedicinesStockCard from "@/components/cards/MedicinesStockCard"
import CustomersCard from "@/components/cards/CustomersCard"
import InventoryItemCard from "@/components/cards/InventoryItemCard"

export default function DashboardPage(): ReactNode {
  return (
    <div className="grid grid-cols-3 gap-[5px]">
      <div className="col-span-2 grid grid-cols-2 gap-[5px]">
        <TotalSalesCard />
        <MedicinesStockCard />
        <CustomersCard/>
      </div>
      <InventoryItemCard />
    </div>
  )
}
