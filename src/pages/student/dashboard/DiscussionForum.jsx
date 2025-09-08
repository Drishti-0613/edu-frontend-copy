export default function DiscussionForum() {
  const discussions = [
    { id: 1, user: "Alice", topic: "React vs Angular", replies: 12 },
    { id: 2, user: "Bob", topic: "Best way to learn DSA?", replies: 8 },
  ];

  return (
    <div className="text-white">
      <h1 className="text-2xl font-bold mb-4">Discussion Forum</h1>
      <ul className="space-y-4">
        {discussions.map((d) => (
          <li key={d.id} className="p-4 bg-gray-800 rounded-lg shadow">
            <h2 className="font-semibold">{d.topic}</h2>
            <p>Started by {d.user}</p>
            <p>Replies: {d.replies}</p>
            <button className="mt-2 px-4 py-2 bg-purple-600 rounded text-white">
              Join Discussion
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
