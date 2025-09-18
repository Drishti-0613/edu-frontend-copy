import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Landing from "../pages/info/Landing";
import Login from "../pages/auth/Login";
import DashboardHome from "../pages/student/dashboard/DashboardHome";
import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";

/* Minimal route setup. Expand in your AppRoutes as needed. */
export default function AppRoutes(){
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        {/* other auth pages */}
      </Route>

      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<DashboardHome />} />
        {/* dashboard sub-routes */}
      </Route>

      <Route path="/" element={<Landing />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
