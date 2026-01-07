

export default function DashboardPage() {
  return (
    <div className="space-y-6 p-10 ms-20">
      <h1 className="text-3xl font-bold text-white">Dashboard</h1>
      <p className="text-slate-400">
        Welcome to your dashboard. Here you can see quick stats and navigate to other sections.
      </p>

      {/* Example cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-4 bg-slate-800 rounded-lg shadow">
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
