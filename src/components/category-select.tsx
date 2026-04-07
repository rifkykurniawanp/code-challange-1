type Option = {
  id: string
  name: string
}
type SelectProps = {
  label: string
  name: string
  options: Option[]
  value?: string
  disabled?: boolean
  onChange: (value: string) => void
}

export default function Select({
  label,
  name,
  options,
  value,
  disabled = false,
  onChange,
}: SelectProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">
        {label}
      </label>
      <div
        className={`flex items-center border border-gray-200 rounded-xl px-3.5 py-2.5 bg-white gap-2 transition-all ${
          disabled
            ? "opacity-40 pointer-events-none bg-gray-50"
            : "hover:border-blue-400 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100"
        }`}
      >
        <select
          name={name}
          value={value ?? ""}
          disabled={disabled}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1 border-none outline-none text-sm text-gray-800 bg-transparent cursor-pointer appearance-none"
        >
          <option value="" disabled>
            Pilih {label}
          </option>
          {options.map((opt) => (
            <option key={opt.id} value={opt.id}>
              {opt.name}
            </option>
          ))}
        </select>
        <span className="text-gray-300 shrink-0 text-xs">⌄</span>
      </div>
    </div>
  )
}