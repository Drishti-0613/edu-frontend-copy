// src/components/StatsCard.jsx
import { THEME } from "@/config/themeConfig";

export default function StatsCard({ title, value }) {
  const theme = THEME.light;
  return (
    <div className={`p-4 rounded-lg shadow ${theme.card}`}>
      <h2 className={`font-semibold text-lg ${theme.textSecondary}`}>{title}</h2>
      <p className={`text-3xl font-bold ${theme.textPrimary}`}>{value}</p>
    </div>
  );
}
