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

  // const inputFieldStyle: React.CSSProperties = {
  //   backgroundColor: colour || "#4d95f7",
  //   color: fontColour || "#fff",
  //   padding: padding || DEFAULT_SPACING,
  //   margin: margin || DEFAULT_SPACING,
  //   cursor: onClick ? "pointer" : "default",
  // };

  return (
    // <input type="text" value={value} onChange={handleInputChange} placeholder={`Enter ${label}`} />
    <div className="input-field">
      <input type="text" className="round-input" value={value} onChange={handleInputChange} placeholder={`Enter ${attribute} here`} />
    </div>
  );
};

export default InputField;
