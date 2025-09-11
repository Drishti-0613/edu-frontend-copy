import { THEME } from "@/config/themeConfig";

export default function Quizzes() {
  const theme = THEME.light;
  const quizzes = [
    { id: 1, title: "React Basics Quiz", attempts: 30 },
    { id: 2, title: "Python Loops Quiz", attempts: 25 },
  ];

  return (
    <div className={`${theme.background} ${theme.textPrimary} p-6`}>
      <h2 className="text-xl font-bold mb-4">Quizzes</h2>
      <table className="w-full border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">Quiz</th>
            <th className="border p-2">Attempts</th>
          </tr>
        </thead>
        <tbody>
          {quizzes.map((q) => (
            <tr key={q.id} className={theme.card}>
              <td className="border p-2">{q.title}</td>
              <td className="border p-2">{q.attempts}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
