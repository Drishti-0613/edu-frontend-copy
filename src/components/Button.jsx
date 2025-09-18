import React from "react";

export default function Button({ children, variant = "solid", className = "", ...rest }){
  const base = "inline-flex items-center justify-center gap-2 font-medium rounded-lg transition focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    solid: "px-4 py-2 bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-300",
    ghost: "px-3 py-2 bg-transparent text-primary-600 hover:bg-primary-50",
    subtle: "px-3 py-2 bg-surface-100 text-neutral-800 hover:shadow-subtle"
  };
  return (
    <button className={`${base} ${variants[variant] || variants.solid} ${className}`}
      {...rest}>
      {children}
    </button>
  );
}
