import React from "react";

export const InputComponent = ({ id, label, name, value, onChange, type, error }) => (
  <div>
    <label htmlFor={id}>{label}:</label>
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      className="form-input"
      required
    />
    {error && <span className="error">{error}</span>}
    <br />
  </div>
);