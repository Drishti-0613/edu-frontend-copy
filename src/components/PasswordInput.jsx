import { useState } from "react";

export default function PasswordInput({ label, value, onChange }) {
  const [show, setShow] = useState(false);

  return (
    <div className="mb-4">
      <label className="block text-sm mb-1">{label}</label>
      <div className="relative">
        <input
          type={show ? "text" : "password"}
          value={value}
          onChange={onChange}
          className="w-full px-4 py-2 pr-14 rounded-lg bg-[#1B1B28] text-[#E5E5E5] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#4B6EF5]"
        />
        <span
          onClick={() => setShow(!show)}
          className="absolute inset-y-0 right-3 flex items-center text-sm text-[#9CA3AF] cursor-pointer select-none"
        >
          {show ? "Hide" : "Show"}
        </span>
      </div>
    </div>
  );
}
