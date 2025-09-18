import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

export default function DashboardLayout(){
  return (
    <div className="min-h-screen bg-surface-50">
      <Navbar />
      <div className="container-max flex gap-6 py-8">
        <Sidebar />
        <div className="flex-1">
          <Outlet />
          <Footer />
        </div>
      </div>
    </div>
  );
}
