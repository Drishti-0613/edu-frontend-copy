import StatsCard from "@/components/StatsCard";
import { THEME } from "@/config/themeConfig";

export default function DashboardHome() {
  const theme = THEME.light;

  return (
    <div className={`${theme.background} ${theme.textPrimary} space-y-6`}>
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard title="Total Users" value="1500" />
        <StatsCard title="Active Courses" value="85" />
        <StatsCard title="Revenue (Monthly)" value="$12,450" />
      </div>
    </div>
  );
}
