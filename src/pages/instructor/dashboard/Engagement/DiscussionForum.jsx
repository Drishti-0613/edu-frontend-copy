import { THEME } from "@/config/themeConfig";

export default function DiscussionForum() {
  const theme = THEME.light;
  const discussions = [
    { id: 1, topic: "React vs Vue", posts: 12 },
    { id: 2, topic: "Best way to learn DSA?", posts: 20 },
  ];

  return (
    <div className={`${theme.background} ${theme.textPrimary} p-6`}>
      <h2 className="text-xl font-bold mb-4">Discussion Forum</h2>
      <ul className="space-y-2">
        {discussions.map((d) => (
          <li key={d.id} className={`${theme.card} p-4 rounded shadow`}>
            {d.topic} — {d.posts} posts
          </li>
        ))}
      </ul>
    </div>
  );
}
