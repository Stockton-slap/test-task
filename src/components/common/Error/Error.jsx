import React from "react";

export default function Error({ error }) {
  return (
    <div className="error-wrapper">
      <h1 className="error-text">Oops! Something went wrong...</h1>
      <p className="error-msg">{error}</p>
    </div>
  );
}
