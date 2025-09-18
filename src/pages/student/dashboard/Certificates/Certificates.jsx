// src/pages/student/dashboard/Certificates/Certificates.jsx
import { THEME } from "@/config/themeConfig.js";
const theme = THEME.light;

export default function Certificates() {
  const certificates = [
    { id: 1, title: "React Developer", date: "Aug 20, 2025" },
    { id: 2, title: "Data Structures", date: "Aug 28, 2025" },
  ];

  return (
    <div className={`p-6 ${theme.background} ${theme.textSecondary}`}>
      <h1 className={`text-2xl font-bold mb-4 ${theme.textPrimary}`}>Certificates</h1>
      <p className="mb-4">View and download your earned certificates.</p>

      <div className="overflow-x-auto">
        <table className={`min-w-full border border-gray-300 ${theme.card} ${theme.textPrimary}`}>
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left">Certificate</th>
              <th className="p-3">Date Earned</th>
            </tr>
          </thead>
          <tbody>
            {certificates.map((cert) => (
              <tr key={cert.id} className="border-t border-gray-300">
                <td className="p-3">{cert.title}</td>
                <td className="p-3 text-center">{cert.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
