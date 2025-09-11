// src/pages/admin/dashboard/DashboardHome.jsx
import StatsCard from "@/components/StatsCard";
import { THEME } from "@/config/themeConfig";

export default function DashboardHome() {
  const theme = THEME.light;

  return (
    <div className={`${theme.background} ${theme.textPrimary} p-6 space-y-6 min-h-screen`}>
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard title="Total Students" value="1,250" />
        <StatsCard title="Total Instructors" value="150" />
        <StatsCard title="Active Courses" value="80" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className={`${theme.card} p-4 rounded-lg shadow`}>
          <h2 className="font-semibold mb-2">Quick Actions</h2>
          <ul className="list-disc pl-5 text-sm">
            <li>Review pending course approvals</li>
            <li>Manage flagged discussion posts</li>
            <li>Generate monthly reports</li>
          </ul>
        </div>

        <div className={`${theme.card} p-4 rounded-lg shadow`}>
          <h2 className="font-semibold mb-2">Platform Summary</h2>
          <p className={`${theme.textSecondary}`}>Active users this month: 8,450</p>
          <p className={`${theme.textSecondary}`}>Monthly revenue: $12,450</p>
        </div>
      </div>
    </div>
  );
}
