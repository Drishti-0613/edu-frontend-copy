export default function Button({ children, onClick, type="button" }) {
  return (
    <button 
      type={type}
      onClick={onClick}
      className="w-full bg-[#4B6EF5] text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
    >
      {children}
    </button>
  )
}
