// src/pages/student/dashboard/EnrolledCourses.jsx
import { THEME } from "@/config/themeConfig.js";
const theme = THEME.light;

export default function EnrolledCourses() {
  const courses = [
    { id: 1, title: "React for Beginners", progress: "65%", status: "Ongoing" },
    { id: 2, title: "Data Structures", progress: "100%", status: "Completed" },
    { id: 3, title: "Machine Learning Basics", progress: "20%", status: "Ongoing" },
  ];

  return (
    <div className={`p-6 ${theme.background} ${theme.textSecondary}`}>
      <h1 className={`text-2xl font-bold mb-4 ${theme.textPrimary}`}>Enrolled Courses</h1>
      <p className="mb-4">Your active and completed courses.</p>

      <div className="overflow-x-auto">
        <table className={`min-w-full border border-gray-300 ${theme.card} ${theme.textPrimary}`}>
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left">Course Title</th>
              <th className="p-3">Progress</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id} className="border-t border-gray-300">
                <td className="p-3">{course.title}</td>
                <td className="p-3 text-center">{course.progress}</td>
                <td className="p-3 text-center">{course.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
