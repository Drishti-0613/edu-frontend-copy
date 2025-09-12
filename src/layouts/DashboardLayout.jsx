// src/layouts/DashboardLayout.jsx
import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu } from "lucide-react";
import { THEME } from "@/config/themeConfig";
import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({ role = "student" }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const theme = THEME.light; // Later dynamic by role
  const navigate = useNavigate();

  const handleRoleChange = (e) => {
    const selectedRole = e.target.value;
    if (selectedRole === "student") navigate("/student/dashboard");
    if (selectedRole === "instructor") navigate("/instructor/dashboard");
    if (selectedRole === "admin") navigate("/admin/dashboard");
    if (selectedRole === "superadmin") navigate("/superadmin/dashboard");
  };

  return (
    <div className={`flex h-screen ${theme.background}`}>
      {/* Sidebar */}
      <aside className="h-screen overflow-y-auto">
        <Sidebar
          role={role}
          theme={theme}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      </aside>

      {/* Main Section */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <header
          className={`flex items-center justify-between ${theme.navbar} shadow px-4 py-2 sticky top-0 z-10`}
        >
          <button
            className="lg:hidden"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <Menu />
          </button>

          <input
            type="text"
            placeholder="Search..."
            className="border rounded-md px-3 py-1 w-1/3 hidden md:block"
          />

          <div className="flex items-center gap-4">
            {/* Role Switcher */}
            <select
              value={role}
              onChange={handleRoleChange}
              className="border rounded-md px-3 py-1 bg-gray-100 text-gray-900"
            >
              <option value="student">Student</option>
              <option value="instructor">Instructor</option>
              <option value="admin">Admin</option>
              <option value="superadmin">Super Admin</option>
            </select>

            <button>🔔</button>
            <button>💬</button>
            <img
              src="https://via.placeholder.com/40"
              alt="profile"
              className="rounded-full w-10 h-10"
            />
          </div>
        </header>

        {/* Page Content */}
        <main className={`p-6 flex-1 overflow-y-auto ${theme.background}`}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
