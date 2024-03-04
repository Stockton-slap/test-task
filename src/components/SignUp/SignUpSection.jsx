import React from "react";
import SignUpForm from "./SignUpForm";

export default function SignUpSection({ setIsUserRequestNeeded }) {
  return (
    <section className="container sign-up">
      <h1 className="sign-up__heading">Working with POST request</h1>
      <SignUpForm setIsUserRequestNeeded={setIsUserRequestNeeded} />
    </section>
  );
}
