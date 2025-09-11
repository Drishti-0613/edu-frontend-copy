// src/pages/student/dashboard/ProfileSettings/ProfileSettings.jsx
import { THEME } from "@/config/themeConfig";
const theme = THEME.light;

export default function ProfileSettings() {
  const profile = {
    name: "John Doe",
    email: "johndoe@email.com",
    enrolled: 5,
    completed: 2,
  };

  return (
    <div className={`p-6 ${theme.background} ${theme.textSecondary}`}>
      <h1 className={`text-2xl font-bold mb-4 ${theme.textPrimary}`}>Profile Settings</h1>
      <p className="mb-4">Update your personal info and preferences.</p>

      <div className={`p-4 rounded-lg shadow ${theme.card} ${theme.textPrimary}`}>
        <p><strong>Name:</strong> {profile.name}</p>
        <p><strong>Email:</strong> {profile.email}</p>
        <p><strong>Enrolled Courses:</strong> {profile.enrolled}</p>
        <p><strong>Completed Courses:</strong> {profile.completed}</p>
      </div>
    </div>
  );
}
