export default function LiveClasses() {
  const live = [
    { id: 1, title: "React State Management", date: "2025-09-10", time: "10:00 AM" },
    { id: 2, title: "Java OOP Deep Dive", date: "2025-09-12", time: "2:00 PM" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Live Classes</h1>
      <ul className="space-y-4">
        {live.map((cls) => (
          <li key={cls.id} className="p-4 bg-gray-800 rounded-lg shadow">
            <h2 className="font-semibold">{cls.title}</h2>
            <p>Date: {cls.date}</p>
            <p>Time: {cls.time}</p>
            <button className="mt-2 px-4 py-2 bg-green-600 rounded">Join</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
