import { THEME } from "@/config/themeConfig";

export default function LiveClasses() {
  const theme = THEME.light;
  const live = [
    { id: 1, topic: "React Hooks", date: "2025-09-15", time: "10:00 AM" },
    { id: 2, topic: "Node.js Streams", date: "2025-09-18", time: "2:00 PM" },
  ];

  return (
    <div className={`${theme.background} ${theme.textPrimary} p-6`}>
      <h2 className="text-xl font-bold mb-4">Live Classes</h2>
      <ul className="space-y-2">
        {live.map((c) => (
          <li key={c.id} className={`${theme.card} p-4 rounded shadow`}>
            <p className="font-semibold">{c.topic}</p>
            <p>{c.date} at {c.time}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
