export default function Certificates() {
  const certificates = [
    { id: 1, course: "React Basics", date: "2025-05-12" },
    { id: 2, course: "Java Fundamentals", date: "2025-06-20" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Certificates</h1>
      <ul className="space-y-4">
        {certificates.map((c) => (
          <li key={c.id} className="p-4 bg-gray-800 rounded-lg shadow">
            <h2 className="font-semibold">{c.course}</h2>
            <p>Issued on: {c.date}</p>
            <button className="mt-2 px-4 py-2 bg-yellow-600 rounded">Download</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
