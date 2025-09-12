// src/layouts/DashboardLayout.jsx
import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { THEME } from "@/config/themeConfig";
import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({ role = "student" }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // default: closed on mobile
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
      <aside
        className={`
          fixed inset-y-0 left-0 transform
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          transition-transform duration-300 ease-in-out
          w-64 bg-[#1B1B28] z-40
          lg:static lg:translate-x-0
        `}
      >
        <Sidebar
          role={role}
          theme={theme}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      </aside>

      {/* Main Section */}
      <div
        className={`
          flex-1 flex flex-col overflow-hidden
          transition-all duration-300
          ${isSidebarOpen ? "lg:ml-64" : ""}
        `}
      >
        {/* Topbar */}
        <header
          className={`flex items-center justify-between ${theme.navbar} shadow px-4 py-2 sticky top-0 z-30`}
        >
          {/* Sidebar Toggle (mobile) */}
          <button
            className="lg:hidden"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? <X /> : <Menu />}
          </button>

          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search..."
            className="border rounded-md px-3 py-1 w-1/3 hidden md:block"
          />

          {/* Right Section */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Role Switcher */}
            <select
              value={role}
              onChange={handleRoleChange}
              className="border rounded-md px-2 sm:px-3 py-1 bg-gray-100 text-gray-900 text-sm sm:text-base"
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
              className="rounded-full w-8 h-8 sm:w-10 sm:h-10"
            />
          </div>
        </header>

        {/* Page Content */}
        <main
          className={`p-4 sm:p-6 flex-1 overflow-y-auto ${theme.background}`}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}
