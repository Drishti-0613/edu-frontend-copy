import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function AuthLayout(){
  return (
    <div className="min-h-screen bg-gradient-to-b from-surface-100 to-white">
      <Navbar />
      <main className="container-max py-12">
        <div className="max-w-md mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
