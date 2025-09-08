export default function Quizzes() {
  const quizzes = [
    { id: 1, title: "React Basics Quiz", score: "80%" },
    { id: 2, title: "Java OOP Quiz", score: "Pending" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Quizzes</h1>
      <ul className="space-y-4">
        {quizzes.map((quiz) => (
          <li key={quiz.id} className="p-4 bg-gray-800 rounded-lg shadow">
            <h2 className="font-semibold">{quiz.title}</h2>
            <p>Score: {quiz.score}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
