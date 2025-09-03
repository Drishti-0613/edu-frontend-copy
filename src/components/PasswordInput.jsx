import { useState } from "react";

export default function PasswordInput({ label, value, onChange }) {
  const [show, setShow] = useState(false);

  return (
    <div className="mb-4 relative">
      <label className="block text-sm mb-1">{label}</label>
      <input 
        type={show ? "text" : "password"} 
        value={value} 
        onChange={onChange}
        className="w-full px-4 py-2 rounded-lg bg-[#1B1B28] text-[#E5E5E5] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#4B6EF5]"
      />
      <span 
        className="absolute right-3 top-3 text-sm text-[#4B6EF5] cursor-pointer"
        onClick={() => setShow(!show)}
      >
        {show ? "Hide" : "Show"}
      </span>
    </div>
  )
}
