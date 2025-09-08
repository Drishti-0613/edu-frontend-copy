export default function Assignments() {
  const assignments = [
    { id: 1, title: "React Components", due: "2025-09-15", status: "Pending" },
    { id: 2, title: "Java Basics", due: "2025-09-12", status: "Submitted" },
  ];

  return (
    <div className="text-white">
      <h1 className="text-2xl font-bold mb-4">Assignments</h1>
      <ul className="space-y-4">
        {assignments.map((a) => (
          <li
            key={a.id}
            className="p-4 bg-gray-800 rounded-lg shadow text-gray-200"
          >
            <h2 className="font-semibold text-white">{a.title}</h2>
            <p className="text-gray-300">Due: {a.due}</p>
            <p className="text-gray-400">Status: {a.status}</p>
            <button className="mt-2 px-4 py-2 bg-blue-600 rounded text-white">
              View Details
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
