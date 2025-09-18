// src/pages/student/dashboard/RecordedClasses.jsx
import { THEME } from "@/config/themeConfig.js";
const theme = THEME.light;

export default function RecordedClasses() {
  const recordings = [
    { id: 1, title: "Intro to React", uploaded: "Sep 1, 2025" },
    { id: 2, title: "Sorting Algorithms", uploaded: "Sep 3, 2025" },
    { id: 3, title: "Cloud Basics", uploaded: "Sep 5, 2025" },
  ];

  return (
    <div className={`p-6 ${theme.background} ${theme.textSecondary}`}>
      <h1 className={`text-2xl font-bold mb-4 ${theme.textPrimary}`}>Recorded Classes</h1>
      <p className="mb-4">Rewatch your past sessions here.</p>

      <div className="overflow-x-auto">
        <table className={`min-w-full border border-gray-300 ${theme.card} ${theme.textPrimary}`}>
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left">Class Title</th>
              <th className="p-3">Uploaded</th>
            </tr>
          </thead>
          <tbody>
            {recordings.map((rec) => (
              <tr key={rec.id} className="border-t border-gray-300">
                <td className="p-3">{rec.title}</td>
                <td className="p-3 text-center">{rec.uploaded}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
