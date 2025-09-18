import { THEME } from "@/config/themeConfig.js";

export default function CourseDetails() {
  const theme = THEME.light;
  const details = {
    title: "React Basics",
    description: "Introductory React course with hands-on projects",
    enrolled: 50,
  };

  return (
    <div className={`${theme.background} ${theme.textPrimary} p-6`}>
      <h2 className="text-xl font-bold mb-4">Course Details</h2>
      <div className={`${theme.card} p-4 rounded shadow`}>
        <p><strong>Title:</strong> {details.title}</p>
        <p><strong>Description:</strong> {details.description}</p>
        <p><strong>Enrolled Students:</strong> {details.enrolled}</p>
      </div>
    </div>
  );
}
