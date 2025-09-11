// src/pages/instructor/dashboard/DashboardHome.jsx
import StatsCard from "@/components/Statscard";
import { THEME } from "@/config/themeConfig";

export default function DashboardHome() {
  const theme = THEME.light;

  return (
    <div className={`${theme.background} ${theme.textPrimary} space-y-6`}>
      <h1 className="text-2xl font-bold">Instructor Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard title="My Courses" value="12" />
        <StatsCard title="Assignments Pending" value="34" />
        <StatsCard title="Live Classes Scheduled" value="5" />
      </div>
    </div>
  );
}
