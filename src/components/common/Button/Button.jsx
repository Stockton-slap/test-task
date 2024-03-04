import React from "react";

export default function Button({ type, text, className, handleClick }) {
  return (
    <button type={type} className={className} onClick={handleClick}>
      {text}
    </button>
  );
}
