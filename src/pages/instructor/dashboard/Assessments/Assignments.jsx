import { THEME } from "@/config/themeConfig.js";

export default function Assignments() {
  const theme = THEME.light;
  const assignments = [
    { id: 1, title: "React Project", submissions: 45 },
    { id: 2, title: "DSA Sheet", submissions: 60 },
  ];

  return (
    <div className={`${theme.background} ${theme.textPrimary} p-6`}>
      <h2 className="text-xl font-bold mb-4">Assignments</h2>
      <ul className="space-y-2">
        {assignments.map((a) => (
          <li key={a.id} className={`${theme.card} p-4 rounded shadow`}>
            {a.title} - {a.submissions} submissions
          </li>
        ))}
      </ul>
    </div>
  );
}
