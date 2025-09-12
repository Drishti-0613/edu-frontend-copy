// src/routes/AppRoutes.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import AuthRoutes from "./AuthRoutes";
import DashboardRoutes from "./DashboardRoutes";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Redirect root to login */}
      <Route path="/" element={<Navigate to="/auth/login" replace />} />

      {/* Auth Routes */}
      <Route path="/auth/*" element={<AuthRoutes />} />

      {/* Dashboard Routes */}
      <Route path="/*" element={<DashboardRoutes />} />

      {/* Catch-all → redirect to login */}
      <Route path="*" element={<Navigate to="/auth/login" replace />} />
    </Routes>
  );
}
