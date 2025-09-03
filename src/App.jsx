import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import UpdatePassword from "./pages/auth/UpdatePassword";

function App() {
  return (
    <BrowserRouter>
      <nav className="bg-[#2A2A3D] p-4 flex gap-4 justify-center flex-wrap">
        <Link to="/signup" className="hover:text-[#4B6EF5]">Signup</Link>
        <Link to="/login" className="hover:text-[#4B6EF5]">Login</Link>
        <Link to="/forgot-password" className="hover:text-[#4B6EF5]">Forgot Password</Link>
        <Link to="/reset-password" className="hover:text-[#4B6EF5]">Reset Password</Link>
        <Link to="/update-password" className="hover:text-[#4B6EF5]">Update Password</Link>
      </nav>

      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/update-password" element={<UpdatePassword />} />
        <Route path="/" element={<Signup />} /> {/* default */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
