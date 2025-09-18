import { THEME } from "@/config/themeConfig.js";

export default function MyCourses() {
  const theme = THEME.light;
  const courses = [
    { id: 1, title: "React Basics", students: 120 },
    { id: 2, title: "Node.js Advanced", students: 80 },
    { id: 3, title: "Data Structures", students: 150 },
  ];

  return (
    <div className={`${theme.background} ${theme.textPrimary} p-6`}>
      <h2 className="text-xl font-bold mb-4">My Courses</h2>
      <table className="w-full border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">Course</th>
            <th className="border p-2">Students</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((c) => (
            <tr key={c.id} className={theme.card}>
              <td className="border p-2">{c.title}</td>
              <td className="border p-2">{c.students}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
