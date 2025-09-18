import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../../components/InputField";
import PasswordInput from "../../components/PasswordInput";
import Button from "../../components/Button";

export default function Login(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e){
    e.preventDefault();
    try {
      // call your auth API (backend)
      // await authApi.login({ email, password });
      // redirect to dashboard
      navigate("/dashboard");
    } catch (err) {
      alert("Login failed");
    }
  }

  return (
    <div className="bg-white p-8 rounded-xl shadow-subtle">
      <h2 className="text-2xl font-semibold mb-1">Welcome back</h2>
      <p className="text-sm text-neutral-500 mb-6">Sign in to continue to the dashboard</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <InputField label="Email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.com" />
        <PasswordInput label="Password" value={password} onChange={e=>setPassword(e.target.value)} />
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" className="h-4 w-4" />
            Remember me
          </label>
          <a href="/forgot" className="text-sm text-primary-600">Forgot?</a>
        </div>
        <div>
          <Button type="submit" className="w-full">Sign in</Button>
        </div>
      </form>
    </div>
  );
}
