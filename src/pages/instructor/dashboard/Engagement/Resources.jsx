import { THEME } from "@/config/themeConfig.js";

export default function Resources() {
  const theme = THEME.light;
  const resources = [
    { id: 1, title: "React Notes", type: "PDF" },
    { id: 2, title: "Pandas Tutorial", type: "Video" },
  ];

  return (
    <div className={`${theme.background} ${theme.textPrimary} p-6`}>
      <h2 className="text-xl font-bold mb-4">Resources</h2>
      <ul className="space-y-2">
        {resources.map((r) => (
          <li key={r.id} className={`${theme.card} p-4 rounded shadow`}>
            {r.title} ({r.type})
          </li>
        ))}
      </ul>
    </div>
  );
}
