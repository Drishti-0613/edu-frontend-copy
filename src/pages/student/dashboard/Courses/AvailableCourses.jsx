export default function AvailableCourses() {
  const courses = [
    { id: 1, title: "Node.js Mastery", instructor: "Jane Smith" },
    { id: 2, title: "Python for Data Science", instructor: "Alan Walker" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Available Courses</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {courses.map((course) => (
          <div key={course.id} className="p-4 bg-gray-800 rounded-lg shadow">
            <h2 className="font-semibold">{course.title}</h2>
            <p>Instructor: {course.instructor}</p>
            <button className="mt-2 px-4 py-2 bg-blue-600 rounded">Enroll</button>
          </div>
        ))}
      </div>
    </div>
  );
}
