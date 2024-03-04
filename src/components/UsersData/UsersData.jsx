import React, { useState } from "react";
import Tooltip from "../common/Tooltip";
import truncateText from "../../utils/truncateText";

export default function UsersData({ text, className }) {
  const [isHovered, setIsHovered] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (e) => {
    setIsHovered(true);
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <>
      <p
        className={`users-item__${className}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {truncateText(text, 30)}
      </p>
      {isHovered && text.length > 30 && (
        <Tooltip text={text} position={cursorPosition} />
      )}
    </>
  );
}
