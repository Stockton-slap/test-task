import React from "react";
import truncateText from "../../utils/truncateText";
import { Tooltip } from "react-tooltip";

export default function UsersData({ text, className }) {
  return (
    <>
      <p
        className={`users-item__${className}`}
        data-tooltip-id="my-tooltip"
        data-tooltip-place="top"
        data-tooltip-content={text.length > 30 ? text : null}
      >
        {truncateText(text, 30)}
      </p>
      {text.length > 30 && (
        <Tooltip id="my-tooltip" place="top" effect="solid" />
      )}
    </>
  );
}
