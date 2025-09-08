export default function ProfileSettings() {
  const student = {
    name: "John Doe",
    email: "john@example.com",
    course: "BCA",
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Profile Settings</h1>
      <div className="p-6 bg-gray-800 rounded-lg shadow w-full max-w-md">
        <p><span className="font-semibold">Name:</span> {student.name}</p>
        <p><span className="font-semibold">Email:</span> {student.email}</p>
        <p><span className="font-semibold">Course:</span> {student.course}</p>
        <button className="mt-4 px-4 py-2 bg-blue-600 rounded">Edit Profile</button>
      </div>
    </div>
  );
}
