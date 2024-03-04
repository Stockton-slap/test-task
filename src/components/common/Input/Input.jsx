import React from "react";

export default function Input({
  type,
  placeholder,
  className,
  value,
  name,
  onChange,
  fileInputRef,
  index,
  onBlur,
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      name={name}
      className={`${className} input`}
      onChange={onChange}
      onBlur={onBlur}
      defaultChecked={type === "radio" && index === 0}
      ref={fileInputRef}
    />
  );
}
