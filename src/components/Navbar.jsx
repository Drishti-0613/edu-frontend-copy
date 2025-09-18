import React from "react";
import { Link } from "react-router-dom";
import { BRAND } from "../config/themeConfig.js";

export default function Navbar(){
  return (
    <header className="w-full bg-white border-b border-neutral-100">
      <div className="container-max flex items-center justify-between h-14">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-primary-500 text-white grid place-items-center font-bold">{BRAND.short}</div>
          <div className="hidden sm:block">
            <div className="text-sm font-semibold">{BRAND.name}</div>
            <div className="text-xs text-neutral-500">EdTech SaaS</div>
          </div>
        </Link>
        <nav className="flex items-center gap-3">
          <Link to="/login" className="text-sm text-neutral-700 hover:text-primary-600">Sign in</Link>
          <Link to="/signup" className="ml-3">
            <button className="text-sm px-3 py-1 rounded-md border border-primary-500 text-primary-600">Get started</button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
