export default function DashboardHome() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Student Dashboard</h1>
      <p className="mb-6">Welcome back, John Doe 👋</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 bg-gray-800 rounded-lg shadow">
          <h2 className="font-semibold text-lg">Enrolled Courses</h2>
          <p className="text-3xl font-bold">5</p>
        </div>
        <div className="p-4 bg-gray-800 rounded-lg shadow">
          <h2 className="font-semibold text-lg">Assignments Due</h2>
          <p className="text-3xl font-bold">2</p>
        </div>
        <div className="p-4 bg-gray-800 rounded-lg shadow">
          <h2 className="font-semibold text-lg">Certificates</h2>
          <p className="text-3xl font-bold">3</p>
        </div>
      </div>
    </div>
  );
}
