// src/pages/auth/Login.jsx
import React, { useState } from "react";
import "../../styles/index.css"; // Your global CSS

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <div className="h-screen flex bg-[#1B1B28] text-[#E5E5E5] font-sans">
      
      {/* Left Section (Image + Branding) */}
      <div
        className="hidden lg:flex w-1/2 bg-cover bg-center items-center justify-center"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/800x1200/?technology,code')",
        }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-xl text-center">
          <img src="your-logo.png" alt="Logo" className="mx-auto w-24 mb-4" />
          <h1 className="text-4xl font-bold">Welcome Back!</h1>
          <p className="mt-3 text-lg">Log in to continue to your dashboard.</p>
        </div>
      </div>

      {/* Right Section (Form) */}
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 px-6 sm:px-16">
        <div className="bg-[#2A2A3D] p-8 rounded-xl shadow-lg w-full max-w-md">
          
          {/* Logo */}
          <div className="text-center mb-6">
            <img src="your-logo.png" alt="Logo" className="mx-auto w-16" />
          </div>

          {/* Heading */}
          <h2 className="text-2xl font-bold text-center mb-6">Login to Your Account</h2>

          {/* Form */}
          <form className="space-y-5">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm mb-2">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-[#1B1B28] text-[#E5E5E5] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#4B6EF5]"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm mb-2">Password</label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 rounded-lg bg-[#1B1B28] text-[#E5E5E5] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#4B6EF5]"
                />
                <span
                  className="absolute right-3 top-3 text-sm text-[#4B6EF5] cursor-pointer"
                  onClick={togglePassword}
                >
                  {showPassword ? "Hide" : "Show"}
                </span>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="accent-[#4B6EF5] mr-2" /> Remember Me
              </label>
              <a href="#" className="text-[#4B6EF5] hover:underline">Forgot Password?</a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-[#4B6EF5] text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <hr className="flex-1 border-gray-600" />
            <span className="px-3 text-gray-400 text-sm">OR</span>
            <hr className="flex-1 border-gray-600" />
          </div>

          {/* Social Login */}
          <div className="flex space-x-4">
            <button className="flex-1 flex items-center justify-center gap-2 bg-white text-[#1B1B28] py-2 rounded-lg font-medium hover:bg-gray-200 transition">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" /> Google
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 bg-white text-[#1B1B28] py-2 rounded-lg font-medium hover:bg-gray-200 transition">
              <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" className="w-5 h-5" alt="Facebook" /> Facebook
            </button>
          </div>

          {/* Sign Up Link */}
          <p className="text-center text-sm mt-6">
            Don’t have an account?{" "}
            <a href="signup.html" className="text-[#4B6EF5] hover:underline">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
}
