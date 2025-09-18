// src/pages/student/dashboard/Engagement/DiscussionForum.jsx
import { THEME } from "@/config/themeConfig.js";
const theme = THEME.light;

export default function DiscussionForum() {
  const posts = [
    { id: 1, user: "Alice", topic: "How to understand React Hooks?", replies: 5 },
    { id: 2, user: "Bob", topic: "Best way to prepare for DSA?", replies: 8 },
    { id: 3, user: "Charlie", topic: "Share ML resources please!", replies: 2 },
  ];

  return (
    <div className={`p-6 ${theme.background} ${theme.textSecondary}`}>
      <h1 className={`text-2xl font-bold mb-4 ${theme.textPrimary}`}>
        Discussion Forum
      </h1>
      <p className="mb-4">Join the community discussions with peers.</p>

      <div className="overflow-x-auto">
        <table className={`min-w-full border border-gray-300 ${theme.card} ${theme.textPrimary}`}>
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left">User</th>
              <th className="p-3 text-left">Topic</th>
              <th className="p-3">Replies</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id} className="border-t border-gray-300">
                <td className="p-3">{post.user}</td>
                <td className="p-3">{post.topic}</td>
                <td className="p-3 text-center">{post.replies}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
