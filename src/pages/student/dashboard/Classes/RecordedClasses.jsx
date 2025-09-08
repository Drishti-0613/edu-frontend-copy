export default function RecordedClasses() {
  const recordings = [
    { id: 1, title: "Intro to React", duration: "1h 20m" },
    { id: 2, title: "Java Basics", duration: "2h 05m" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Recorded Classes</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {recordings.map((rec) => (
          <div key={rec.id} className="p-4 bg-gray-800 rounded-lg shadow">
            <h2 className="font-semibold">{rec.title}</h2>
            <p>Duration: {rec.duration}</p>
            <button className="mt-2 px-4 py-2 bg-blue-600 rounded">Watch</button>
          </div>
        ))}
      </div>
    </div>
  );
}
