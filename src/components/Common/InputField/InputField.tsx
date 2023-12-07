import React from "react";
import "./InputField.css"

interface InputFieldProps {
  attribute: string;
  value: string;
  onChange: (newValue: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  attribute,
  value,
  onChange
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(newValue);
  };

  return (
    <div className="input-field">
      <input type="text" className="round-input" value={value} onChange={handleInputChange} placeholder={`Enter ${attribute} here`} />
    </div>
  );
};

export default InputField;
