// src/components/Navbar.jsx
export default function Navbar() {
  return (
    <header className="flex items-center justify-between bg-white shadow px-4 py-2">
      <input
        type="text"
        placeholder="Search..."
        className="border rounded px-3 py-1 w-1/3"
      />
      <div className="flex items-center gap-4">
        <button>🔔</button>
        <button>💬</button>
        <img
          src="https://via.placeholder.com/40"
          alt="profile"
          className="rounded-full w-10 h-10"
        />
      </div>
    </header>
  );
}
