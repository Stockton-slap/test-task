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
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      name={name}
      className={`${className} input`}
      onChange={onChange}
      defaultChecked={type === "radio" && index === 0}
      ref={fileInputRef}
      // {...(fileInputRef && { ref: fileInputRef })}
    />
  );
}
