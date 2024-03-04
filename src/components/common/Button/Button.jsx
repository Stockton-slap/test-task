import React from "react";

export default function Button({
  type,
  text,
  className,
  handleClick,
  id = null,
  isDisabled = false,
}) {
  return (
    <button
      type={type}
      className={`${className}`}
      onClick={handleClick}
      id={id}
      disabled={id === "submitBtn" && isDisabled}
    >
      {text}
    </button>
  );
}
