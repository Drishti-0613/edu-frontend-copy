// src/pages/student/dashboard/LiveClasses.jsx
import { THEME } from "@/config/themeConfig.js";
const theme = THEME.light;

export default function LiveClasses() {
  const classes = [
    { id: 1, title: "React State Management", date: "Sep 14, 2025", time: "6:00 PM" },
    { id: 2, title: "Algorithms Deep Dive", date: "Sep 18, 2025", time: "7:30 PM" },
  ];

  return (
    <div className={`p-6 ${theme.background} ${theme.textSecondary}`}>
      <h1 className={`text-2xl font-bold mb-4 ${theme.textPrimary}`}>Live Classes</h1>
      <p className="mb-4">Join upcoming live sessions here.</p>

      <div className="overflow-x-auto">
        <table className={`min-w-full border border-gray-300 ${theme.card} ${theme.textPrimary}`}>
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left">Class Title</th>
              <th className="p-3">Date</th>
              <th className="p-3">Time</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((c) => (
              <tr key={c.id} className="border-t border-gray-300">
                <td className="p-3">{c.title}</td>
                <td className="p-3 text-center">{c.date}</td>
                <td className="p-3 text-center">{c.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
