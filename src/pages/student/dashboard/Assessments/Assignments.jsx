// src/pages/student/dashboard/Assignments.jsx
import { THEME } from "@/config/themeConfig.js";
const theme = THEME.light;

export default function Assignments() {
  const assignments = [
    { id: 1, title: "React Components", due: "Sep 15, 2025", status: "Pending" },
    { id: 2, title: "Linked Lists", due: "Sep 20, 2025", status: "Submitted" },
    { id: 3, title: "ML Project Proposal", due: "Sep 25, 2025", status: "Pending" },
  ];

  return (
    <div className={`p-6 ${theme.background} ${theme.textSecondary}`}>
      <h1 className={`text-2xl font-bold mb-4 ${theme.textPrimary}`}>Assignments</h1>
      <p className="mb-4">View and submit assignments here.</p>

      <div className="overflow-x-auto">
        <table className={`min-w-full border border-gray-300 ${theme.card} ${theme.textPrimary}`}>
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left">Assignment</th>
              <th className="p-3">Due Date</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {assignments.map((assignment) => (
              <tr key={assignment.id} className="border-t border-gray-300">
                <td className="p-3">{assignment.title}</td>
                <td className="p-3 text-center">{assignment.due}</td>
                <td className="p-3 text-center">{assignment.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
