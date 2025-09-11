// src/pages/superadmin/dashboard/DashboardHome.jsx
import StatsCard from "@/components/Statscard";

export default function DashboardHome() {
  const stats = [
    { title: "Total Users", value: 1580 },
    { title: "Total Admins", value: 5 },
    { title: "Active Courses", value: 52 },
    { title: "Total Revenue", value: "$240,000" },
    { title: "Monthly Revenue", value: "$18,000" },
    { title: "Growth Rate", value: "12%" },
    { title: "System Health", value: "99.9%" },
    { title: "Compliance Status", value: "✅ Passed" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Super Admin Dashboard</h1>
      <p className="text-gray-600 mb-6">
        Global platform controls and high-level insights.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, i) => (
          <StatsCard key={i} title={item.title} value={item.value} />
        ))}
      </div>
    </div>
  );
}
