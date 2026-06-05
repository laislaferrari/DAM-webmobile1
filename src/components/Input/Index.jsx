export default function Input({ value, onChange, label, placeholder }) {
  return (
    <div className="mb-3">
      <label htmlFor={`input-${value}`} className="form-label" type="text">
        {label}
      </label>
      <input
        className="form-control"
        id={`input-${value}`}
        placeholder={placeholder}
        value={value}
        required
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
