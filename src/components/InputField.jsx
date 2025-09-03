export default function InputField({ label, type="text", placeholder, value, onChange }) {
  return (
    <div className="mb-4">
      <label className="block text-sm mb-1">{label}</label>
      <input 
        type={type} 
        placeholder={placeholder} 
        value={value} 
        onChange={onChange}
        className="w-full px-4 py-2 rounded-lg bg-[#1B1B28] text-[#E5E5E5] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#4B6EF5]"
      />
    </div>
  )
}
