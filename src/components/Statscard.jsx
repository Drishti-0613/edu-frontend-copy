import React from "react";

export default function Statscard({ title, value, delta }) {
  return (
    <div className="p-4 rounded-xl bg-white shadow-subtle">
      <div className="text-sm text-neutral-500">{title}</div>
      <div className="mt-2 text-2xl font-semibold text-neutral-900">{value}</div>
      {delta && <div className="mt-1 text-xs text-green-600">{delta}</div>}
    </div>
  );
}
