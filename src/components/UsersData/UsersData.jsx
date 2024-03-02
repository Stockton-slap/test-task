import React, { useState } from "react";

export default function UsersData({ text, className }) {
  const [isHovered, setIsHovered] = useState(false);

  const truncateText = (text) => {
    const isTruncated = text.length > 30 ? `${text.slice(0, 30)}...` : text;

    return isTruncated;
  };

  return (
    <p
      className={`users-item__${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? text : truncateText(text)}
    </p>
  );
}
