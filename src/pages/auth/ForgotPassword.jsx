// src/pages/auth/ForgotPassword.jsx
import { useState } from "react";
import InputField from "../../components/InputField";
import Button from "../../components/Button";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Password reset link sent (placeholder)");
  };

  return (
    <>
      <h2 className="text-2xl font-bold text-center mb-6">Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Registered Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <Button type="submit">Send Reset Link</Button>
      </form>
      <p className="mt-4 text-sm text-gray-500 text-center">
        If this email is registered, you’ll receive a password reset link.
      </p>
    </>
  );
}
