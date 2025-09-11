// src/components/Sidebar.jsx
import { NavLink } from "react-router-dom";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";
import { MENU_CONFIG } from "@/config/menuConfig";

export default function Sidebar({ role = "student" }) {
  const [openMenus, setOpenMenus] = useState({});
  const menuItems = MENU_CONFIG[role] || [];

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  const linkClass =
    "block p-2 rounded hover:bg-gray-700 transition-colors duration-150";

  return (
    <aside
      className="
        w-64 bg-[#1B1B28] text-white flex flex-col transition-all
        h-screen overflow-y-auto
      "
    >
      {/* Logo / Header */}
      <div className="flex items-center justify-between p-4">
        <span className="text-xl font-bold">EduSaaS</span>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 px-2 space-y-1">
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
