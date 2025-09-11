import { THEME } from "@/config/themeConfig";

export default function AnalyticsReports() {
  const theme = THEME.light;
  const reports = [
    { id: 1, title: "Course Completion", status: "Generated" },
    { id: 2, title: "Student Engagement", status: "Pending" },
  ];

  return (
    <div className={`${theme.background} ${theme.textPrimary} p-6`}>
      <h2 className="text-xl font-bold mb-4">Analytics & Reports</h2>
      <table className="w-full border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">Report</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((r) => (
            <tr key={r.id} className={theme.card}>
              <td className="border p-2">{r.title}</td>
              <td className="border p-2">{r.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
