import React from "react";

export default function Tooltip({ text, position }) {
  const style = {
    position: "fixed",
    top: position.y + 10 + "px",
    left: position.x + 10 + "px",
    background: "#333",
    color: "#fff",
    padding: "5px",
    borderRadius: "5px",
    zIndex: 9999,
  };

  return <div style={style}>{text}</div>;
}
