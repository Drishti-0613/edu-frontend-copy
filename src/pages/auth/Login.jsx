// src/pages/auth/Login.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [role, setRole] = useState("student");

  const handleLogin = (e) => {
    e.preventDefault();
    if (role === "student") navigate("/student/dashboard");
    if (role === "instructor") navigate("/instructor/dashboard");
    if (role === "admin") navigate("/admin/dashboard");
    if (role === "superadmin") navigate("/superadmin/dashboard");
  };

  return (
    <>
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      <form onSubmit={handleLogin} className="space-y-3">
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded"
          required
        />

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full border p-2 rounded"
        >
          <option value="student">Student</option>
          <option value="instructor">Instructor</option>
          <option value="admin">Admin</option>
          <option value="superadmin">SuperAdmin</option>
        </select>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          Login
        </button>
      </form>

      <div className="mt-4 text-sm text-center">
        <Link to="/auth/forgot-password" className="text-blue-600">
          Forgot Password?
        </Link>
      </div>
      <div className="mt-2 text-sm text-center">
        Don’t have an account?{" "}
        <Link to="/auth/signup" className="text-blue-600">
          Sign up
        </Link>
      </div>
    </>
  );
}
