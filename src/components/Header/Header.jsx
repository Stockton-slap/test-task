import React from "react";

export default function Header() {
  return (
    <header className="header container">
      <img src="/assets/Logo.svg" alt="Logo" className="logo" />
      <div className="btn-wrapper">
        <button type="button" className="btn">
          Users
        </button>
        <button type="button" className="btn">
          Sign up
        </button>
      </div>
    </header>
  );
}
