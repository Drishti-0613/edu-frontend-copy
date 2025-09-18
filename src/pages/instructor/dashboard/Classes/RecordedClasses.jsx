import { THEME } from "@/config/themeConfig.js";

export default function RecordedClasses() {
  const theme = THEME.light;
  const classes = [
    { id: 1, title: "Intro to React", uploaded: "2025-09-01" },
    { id: 2, title: "Data Structures", uploaded: "2025-09-05" },
  ];

  return (
    <div className={`${theme.background} ${theme.textPrimary} p-6`}>
      <h2 className="text-xl font-bold mb-4">Recorded Classes</h2>
      <table className="w-full border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">Class</th>
            <th className="border p-2">Uploaded</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((c) => (
            <tr key={c.id} className={theme.card}>
              <td className="border p-2">{c.title}</td>
              <td className="border p-2">{c.uploaded}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
