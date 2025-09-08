export default function Resources() {
  const resources = [
    { id: 1, title: "React Docs", link: "https://react.dev" },
    { id: 2, title: "Java Tutorial", link: "https://docs.oracle.com/javase/tutorial/" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Resources</h1>
      <ul className="space-y-4">
        {resources.map((r) => (
          <li key={r.id} className="p-4 bg-gray-800 rounded-lg shadow">
            <h2 className="font-semibold">{r.title}</h2>
            <a href={r.link} target="_blank" rel="noreferrer" className="text-blue-400 underline">
              Visit Resource
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
