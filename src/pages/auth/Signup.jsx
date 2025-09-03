import { useState } from "react";
import InputField from "../../components/InputField";
import PasswordInput from "../../components/PasswordInput";
import Button from "../../components/Button";

export default function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("Student");
  const [terms, setTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Signup submitted (replace with API call)");
  }

  return (
    <div className="flex min-h-screen w-screen bg-[#1B1B28] text-[#E5E5E5] font-sans justify-center items-center">
      <div className="bg-[#2A2A3D] p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <InputField label="Full Name" value={fullName} onChange={e => setFullName(e.target.value)} placeholder="John Doe" />
          <InputField label="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" />
          <PasswordInput label="Password" value={password} onChange={e => setPassword(e.target.value)} />
          <PasswordInput label="Confirm Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
          <div className="mb-4">
            <label className="block text-sm mb-1">Role / Account Type</label>
            <select className="w-full px-4 py-2 rounded-lg bg-[#1B1B28] text-[#E5E5E5] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#4B6EF5]" value={role} onChange={e => setRole(e.target.value)}>
              <option>Student</option>
              <option>Instructor</option>
              <option>Admin</option>
            </select>
          </div>
          <div className="mb-4 flex items-center gap-2">
            <input type="checkbox" checked={terms} onChange={e => setTerms(e.target.checked)} className="accent-[#4B6EF5]" />
            <span className="text-sm">I agree to <a href="#" className="text-[#4B6EF5] hover:underline">Terms & Conditions</a> and <a href="#" className="text-[#4B6EF5] hover:underline">Privacy Policy</a></span>
          </div>
          <Button type="submit">Sign Up</Button>
        </form>
      </div>
    </div>
  )
}
