
import { ReactNode } from "react"
import PageHeader from "@/components/layout/PageHeader"
import TotalSalesCard from "@/components/cards/TotalSalesCard"
import MedicinesStockCard from "@/components/cards/MedicinesStockCard"
import CustomersCard from "@/components/cards/CustomersCard"
import InventoryItemCard from "@/components/cards/InventoryItemCard"

export default function DashboardPage(): ReactNode {
  return (
    <div className="min-h-screen text-gray-900 dark:text-gray-100">
      <PageHeader />

      <div className="grid grid-cols-3 gap-2">
        <div className="col-span-2 grid grid-cols-2 gap-2">
          <TotalSalesCard />
          <MedicinesStockCard />
          <CustomersCard />
        </div>

        <InventoryItemCard />
      </div>
    </div>
  )
}
