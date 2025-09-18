import React from "react";

export default function SelectField({ label, options = [], ...rest }){
  return (
    <label className="block text-sm">
      {label && <span className="block text-neutral-600 mb-1">{label}</span>}
      <select {...rest} className="w-full px-3 py-2 border border-neutral-200 rounded-lg bg-white">
        {options.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
      </select>
    </label>
  );
}
