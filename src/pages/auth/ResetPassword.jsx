import { useState } from "react";
import PasswordInput from "../../components/PasswordInput";
import Button from "../../components/Button";

export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Password reset submitted (placeholder)");
  }

  return (
    <div className="flex min-h-screen w-screen bg-[#1B1B28] text-[#E5E5E5] justify-center items-center">
      <div className="bg-[#2A2A3D] p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Reset Password</h2>
        <form onSubmit={handleSubmit}>
          <PasswordInput label="New Password" value={newPassword} onChange={e => setNewPassword(e.target.value)} />
          <PasswordInput label="Confirm Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
          <Button type="submit">Reset Password</Button>
        </form>
      </div>
    </div>
  )
}
