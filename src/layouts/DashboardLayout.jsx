// src/layouts/DashboardLayout.jsx
import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";

export default function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [openMenus, setOpenMenus] = useState({
    courses: false,
    assessments: false,
    classes: false,
  });

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  const linkClass =
    "block p-2 rounded hover:bg-gray-700 transition-colors duration-150";

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? "w-64" : "w-20"
        } bg-[#1B1B28] text-white flex flex-col transition-all`}
      >
        {/* Logo */}
        <div className="flex items-center justify-between p-4">
          <span className="text-xl font-bold">EduSaaS</span>
          <button
            className="lg:hidden"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-2 space-y-1">
          <NavLink to="/dashboard" className={linkClass}>
            Dashboard
          </NavLink>

          {/* Courses */}
          <div>
            <button
              onClick={() => toggleMenu("courses")}
              className="flex items-center justify-between w-full p-2 rounded hover:bg-gray-700"
            >
              <span>Courses</span>
              {openMenus.courses ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </button>
            {openMenus.courses && (
              <div className="ml-4 space-y-1">
                <NavLink to="/courses/enrolled" className={linkClass}>
                  Enrolled Courses
                </NavLink>
                <NavLink to="/courses/available" className={linkClass}>
                  Available Courses
                </NavLink>
              </div>
            )}
          </div>

          {/* Assessments */}
          <div>
            <button
              onClick={() => toggleMenu("assessments")}
              className="flex items-center justify-between w-full p-2 rounded hover:bg-gray-700"
            >
              <span>Assessments</span>
              {openMenus.assessments ? (
                <ChevronDown size={16} />
              ) : (
                <ChevronRight size={16} />
              )}
            </button>
            {openMenus.assessments && (
              <div className="ml-4 space-y-1">
                <NavLink to="/assessments/assignments" className={linkClass}>
                  Assignments
                </NavLink>
                <NavLink to="/assessments/quizzes" className={linkClass}>
                  Quizzes
                </NavLink>
              </div>
            )}
          </div>

          {/* Classes */}
          <div>
            <button
              onClick={() => toggleMenu("classes")}
              className="flex items-center justify-between w-full p-2 rounded hover:bg-gray-700"
            >
              <span>Classes</span>
              {openMenus.classes ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </button>
            {openMenus.classes && (
              <div className="ml-4 space-y-1">
                <NavLink to="/classes/live" className={linkClass}>
                  Live Classes
                </NavLink>
                <NavLink to="/classes/recorded" className={linkClass}>
                  Recorded Classes
                </NavLink>
              </div>
            )}
          </div>

          <NavLink to="/discussion" className={linkClass}>
            Discussion Forum
          </NavLink>
          <NavLink to="/certificates" className={linkClass}>
            Certificates
          </NavLink>
          <NavLink to="/resources" className={linkClass}>
            Resources
          </NavLink>
          <NavLink to="/profile" className={linkClass}>
            Profile / Settings
          </NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="flex items-center justify-between bg-white shadow px-4 py-2">
          <input
            type="text"
            placeholder="Search..."
            className="border rounded px-3 py-1 w-1/3"
          />
          <div className="flex items-center gap-4">
            <button>🔔</button>
            <button>💬</button>
            <img
              src="https://via.placeholder.com/40"
              alt="profile"
              className="rounded-full w-10 h-10"
            />
          </div>
        </header>

        {/* Outlet for pages */}
        <main className="p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
