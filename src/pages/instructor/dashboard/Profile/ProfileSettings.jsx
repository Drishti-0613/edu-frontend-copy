import { THEME } from "@/config/themeConfig";

export default function ProfileSettings() {
  const theme = THEME.light;
  const profile = {
    name: "Dr. Smith",
    email: "drsmith@email.com",
    courses: 5,
  };

  return (
    <div className={`${theme.background} ${theme.textPrimary} p-6`}>
      <h2 className="text-xl font-bold mb-4">Profile Settings</h2>
      <div className={`${theme.card} p-4 rounded shadow`}>
        <p><strong>Name:</strong> {profile.name}</p>
        <p><strong>Email:</strong> {profile.email}</p>
        <p><strong>Courses Managed:</strong> {profile.courses}</p>
      </div>
    </div>
  );
}
