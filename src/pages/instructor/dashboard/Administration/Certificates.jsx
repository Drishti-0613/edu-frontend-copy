import { THEME } from "@/config/themeConfig.js";

export default function Certificates() {
  const theme = THEME.light;
  const certificates = [
    { id: 1, student: "Alice", course: "React Basics" },
    { id: 2, student: "Bob", course: "Data Science 101" },
  ];

  return (
    <div className={`${theme.background} ${theme.textPrimary} p-6`}>
      <h2 className="text-xl font-bold mb-4">Certificates</h2>
      <table className="w-full border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">Student</th>
            <th className="border p-2">Course</th>
          </tr>
        </thead>
        <tbody>
          {certificates.map((c) => (
            <tr key={c.id} className={theme.card}>
              <td className="border p-2">{c.student}</td>
              <td className="border p-2">{c.course}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
