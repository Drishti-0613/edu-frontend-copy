import { useState } from "react";
import InputField from "../../components/InputField";
import Button from "../../components/Button";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Password reset link sent (placeholder)");
  }

  return (
    <div className="flex min-h-screen w-screen bg-[#1B1B28] text-[#E5E5E5] justify-center items-center">
      <div className="bg-[#2A2A3D] p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <InputField label="Registered Email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email" />
          <Button type="submit">Send Reset Link</Button>
        </form>
        <p className="mt-4 text-sm text-gray-300 text-center">If this email is registered, you’ll receive a password reset link.</p>
      </div>
    </div>
  )
}
