// src/pages/student/dashboard/AvailableCourses.jsx
import { THEME } from "@/config/themeConfig.js";
const theme = THEME.light;

export default function AvailableCourses() {
  const available = [
    { id: 1, title: "Advanced React", instructor: "John Doe" },
    { id: 2, title: "Python for Data Science", instructor: "Jane Smith" },
    { id: 3, title: "Cloud Computing Basics", instructor: "Mark Wilson" },
  ];

  return (
    <div className={`p-6 ${theme.background} ${theme.textSecondary}`}>
      <h1 className={`text-2xl font-bold mb-4 ${theme.textPrimary}`}>Available Courses</h1>
      <p className="mb-4">Browse and enroll in new courses.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {available.map((course) => (
          <div key={course.id} className={`p-4 rounded-lg shadow ${theme.card}`}>
            <h2 className={`text-lg font-semibold ${theme.textPrimary}`}>{course.title}</h2>
            <p className={theme.textSecondary}>Instructor: {course.instructor}</p>
            <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Enroll
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
