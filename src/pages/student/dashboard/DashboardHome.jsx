// src/pages/student/dashboard/DashboardHome.jsx
import { THEME } from "@/config/themeConfig";
const theme = THEME.light;

export default function DashboardHome() {
  return (
    <div className={`p-6 ${theme.background} ${theme.textSecondary}`}>
      <h1 className={`text-2xl font-bold mb-6 ${theme.textPrimary}`}>Student Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className={`p-4 rounded-lg shadow ${theme.card}`}>
          <h2 className="text-lg font-semibold">Enrolled Courses</h2>
          <p className="text-3xl font-bold">5</p>
        </div>

        <div className={`p-4 rounded-lg shadow ${theme.card}`}>
          <h2 className="text-lg font-semibold">Assignments Due</h2>
          <p className="text-3xl font-bold">2</p>
        </div>

        <div className={`p-4 rounded-lg shadow ${theme.card}`}>
          <h2 className="text-lg font-semibold">Quizzes Pending</h2>
          <p className="text-3xl font-bold">1</p>
        </div>
      </div>
    </div>
  );
}
