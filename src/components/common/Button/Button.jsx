import React from "react";

export default function Button({
  type,
  text,
  className,
  handleClick,
  isDisabled = false,
}) {
  return (
    <button
      type={type}
      className={`${className}`}
      onClick={handleClick}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
}
