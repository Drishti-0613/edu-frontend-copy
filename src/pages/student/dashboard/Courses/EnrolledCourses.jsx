export default function EnrolledCourses() {
  const courses = [
    { id: 1, title: "React Basics", progress: "80%" },
    { id: 2, title: "Java Fundamentals", progress: "45%" },
    { id: 3, title: "Data Structures", progress: "60%" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Enrolled Courses</h1>
      <ul className="space-y-4">
        {courses.map((course) => (
          <li key={course.id} className="p-4 bg-gray-800 rounded-lg shadow">
            <h2 className="font-semibold">{course.title}</h2>
            <p>Progress: {course.progress}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
