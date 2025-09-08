export default function Button({ children }) {
  return (
    <button
      className="px-4 py-2 rounded-md font-medium"
      style={{
        background: "var(--color-primary)",
        color: "var(--color-text-inverse)",
        boxShadow: "var(--shadow-sm)"
      }}
    >
      {children}
    </button>
  );
}
