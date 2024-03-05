import React from "react";
import Button from "../common/Button";

export default function Header({ handleSignUpClick }) {
  return (
    <header className="header container">
      <img src="/assets/Logo.svg" alt="Logo" className="logo" />
      <div className="btn-wrapper">
        <Button
          type="button"
          text="Users"
          className="btn header-btn"
          handleClick={() => handleSignUpClick("usersSection")}
        />
        <Button
          type="button"
          text="Sign up"
          className="btn header-btn"
          handleClick={() => handleSignUpClick("signUpSection")}
        />
      </div>
    </header>
  );
}
