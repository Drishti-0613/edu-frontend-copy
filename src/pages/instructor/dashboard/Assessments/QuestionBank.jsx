import { THEME } from "@/config/themeConfig.js";

export default function QuestionBank() {
  const theme = THEME.light;
  const questions = [
    { id: 1, question: "What is JSX?", type: "MCQ" },
    { id: 2, question: "Explain closures in JS.", type: "Subjective" },
  ];

  return (
    <div className={`${theme.background} ${theme.textPrimary} p-6`}>
      <h2 className="text-xl font-bold mb-4">Question Bank</h2>
      <ul className="space-y-2">
        {questions.map((q) => (
          <li key={q.id} className={`${theme.card} p-4 rounded shadow`}>
            {q.question} ({q.type})
          </li>
        ))}
      </ul>
    </div>
  );
}
