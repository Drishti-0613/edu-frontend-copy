// src/components/Sidebar.jsx
import { NavLink } from "react-router-dom";
import { ChevronDown, ChevronRight, X } from "lucide-react";
import { useState } from "react";
import { MENU_CONFIG } from "@/config/menuConfig";

export default function Sidebar({ role = "student", isSidebarOpen, setIsSidebarOpen }) {
  const [openMenus, setOpenMenus] = useState({});
  const menuItems = MENU_CONFIG[role] || [];

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  const linkClass =
    "block p-2 rounded hover:bg-gray-700 transition-colors duration-150";

  return (
    <aside
      className={`
        fixed lg:static inset-y-0 left-0 z-50
        w-64 bg-[#1B1B28] text-white flex flex-col h-screen overflow-y-auto
        transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
    >
      {/* Logo / Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <span className="text-xl font-bold">EduSaaS</span>

        {/* Close Button (mobile only) */}
        <button
          onClick={() => setIsSidebarOpen(false)}
          className="lg:hidden p-1 rounded hover:bg-gray-700"
        >
          <X size={20} />
        </button>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 px-2 py-4 space-y-1">
        {menuItems.map((item) => (
          <div key={item.label}>
            {item.children ? (
              <>
                <button
                  onClick={() => toggleMenu(item.label)}
                  className="flex items-center justify-between w-full p-2 rounded hover:bg-gray-700"
                >
                  <span>{item.label}</span>
                  {openMenus[item.label] ? (
                    <ChevronDown size={16} />
                  ) : (
                    <ChevronRight size={16} />
                  )}
                </button>

                {openMenus[item.label] && (
                  <div className="ml-4 space-y-1">
                    {item.children.map((child) => (
                      <NavLink
                        key={child.path}
                        to={child.path}
                        className={linkClass}
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <NavLink to={item.path} className={linkClass}>
                {item.label}
              </NavLink>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}
