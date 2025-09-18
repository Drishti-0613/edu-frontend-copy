import React from "react";

export default function InputField({ label, id, type="text", className = "", ...rest }){
  return (
    <label className={`block text-sm ${className}`}>
      {label && <span className="block text-neutral-600 mb-1">{label}</span>}
      <input id={id} type={type} {...rest}
        className="w-full px-3 py-2 border border-neutral-200 rounded-lg bg-white text-neutral-900 placeholder-neutral-400 focus:ring-2 focus:ring-primary-200 focus:border-transparent" />
    </label>
  );
}
