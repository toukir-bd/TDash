


import PageHeader from "@/components/layout/PageHeader"

export default function DashboardPage() {
  return (
    <div className="min-h-screen space-y-8 bg-[#E4E2DE] dark:bg-slate-950">
      <PageHeader description="Welcome to your dashboard. Here you can see quick stats and navigate to other sections."/>

      {/* Example cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-4 bg-slate-800 rounded-lg shadow min-h-[2000px]">
          <h2 className="text-lg font-semibold text-white">Users</h2>
          <p className="text-slate-400">Manage all your users</p>
        </div>
        <div className="p-4 bg-slate-800 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-white">Branches</h2>
          <p className="text-slate-400">View branch details</p>
        </div>
        <div className="p-4 bg-slate-800 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-white">Doctors</h2>
          <p className="text-slate-400">Manage doctor profiles</p>
        </div>
      </div>
    </div>
  )
}
