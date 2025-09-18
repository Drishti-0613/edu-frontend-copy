// src/pages/student/dashboard/Quizzes.jsx
import { THEME } from "@/config/themeConfig.js";
const theme = THEME.light;

export default function Quizzes() {
  const quizzes = [
    { id: 1, title: "React Basics Quiz", due: "Sep 12, 2025", status: "Pending" },
    { id: 2, title: "DSA Quiz", due: "Sep 18, 2025", status: "Completed" },
  ];

  return (
    <div className={`p-6 ${theme.background} ${theme.textSecondary}`}>
      <h1 className={`text-2xl font-bold mb-4 ${theme.textPrimary}`}>Quizzes</h1>
      <p className="mb-4">Check and attempt your quizzes.</p>

      <div className="overflow-x-auto">
        <table className={`min-w-full border border-gray-300 ${theme.card} ${theme.textPrimary}`}>
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left">Quiz Title</th>
              <th className="p-3">Due Date</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {quizzes.map((quiz) => (
              <tr key={quiz.id} className="border-t border-gray-300">
                <td className="p-3">{quiz.title}</td>
                <td className="p-3 text-center">{quiz.due}</td>
                <td className="p-3 text-center">{quiz.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
