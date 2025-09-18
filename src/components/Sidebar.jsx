import React from "react";
import { NavLink } from "react-router-dom";
import { adminMenu } from "../config/menuConfig.js";
import { LAYOUT } from "../config/themeConfig.js";

export default function Sidebar({ collapsed = false }){
  return (
    <aside className="hidden lg:block w-[260px] border-r border-neutral-100 bg-surface-50">
      <div className="p-4 space-y-1">
        {adminMenu.map(i => (
          <NavLink
            key={i.to}
            to={i.to}
            className={({ isActive }) => `flex items-center gap-3 p-2 rounded-md hover:bg-primary-50 ${isActive ? 'bg-primary-50 text-primary-700' : 'text-neutral-700'}`}
          >
            <span className="text-lg">{i.icon}</span>
            <span className="text-sm">{i.title}</span>
          </NavLink>
        ))}
      </div>
    </aside>
  );
}
