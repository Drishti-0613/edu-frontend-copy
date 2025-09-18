// src/pages/student/dashboard/Engagement/Resources.jsx
import { THEME } from "@/config/themeConfig.js";
const theme = THEME.light;

export default function Resources() {
  const resources = [
    { id: 1, name: "React Notes", type: "PDF", uploaded: "Sep 2, 2025" },
    { id: 2, name: "Sorting Algo Video", type: "Video", uploaded: "Sep 4, 2025" },
  ];

  return (
    <div className={`p-6 ${theme.background} ${theme.textSecondary}`}>
      <h1 className={`text-2xl font-bold mb-4 ${theme.textPrimary}`}>Resources</h1>
      <p className="mb-4">Download notes and extra material.</p>

      <div className="overflow-x-auto">
        <table className={`min-w-full border border-gray-300 ${theme.card} ${theme.textPrimary}`}>
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left">Resource</th>
              <th className="p-3">Type</th>
              <th className="p-3">Uploaded</th>
            </tr>
          </thead>
          <tbody>
            {resources.map((res) => (
              <tr key={res.id} className="border-t border-gray-300">
                <td className="p-3">{res.name}</td>
                <td className="p-3 text-center">{res.type}</td>
                <td className="p-3 text-center">{res.uploaded}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
