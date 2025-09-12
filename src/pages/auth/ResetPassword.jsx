import { useState } from "react";
import PasswordInput from "../../components/PasswordInput";
import Button from "../../components/Button";
import AuthLayout from "../../layouts/AuthLayout";

export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Password reset submitted (placeholder)");
  };

  return (
    <AuthLayout>
      <h2 className="text-2xl font-bold text-center mb-6">Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <PasswordInput
          label="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <PasswordInput
          label="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button type="submit">Reset Password</Button>
      </form>
    </AuthLayout>
  );
}
