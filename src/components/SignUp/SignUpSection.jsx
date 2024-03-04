import React from "react";
import SignUpForm from "./SignUpForm";

export default function SignUpSection({ setIsUserRequestNeeded, setPage }) {
  return (
    <section className="container sign-up" id="signUpSection">
      <h1 className="sign-up__heading">Working with POST request</h1>
      <SignUpForm
        setIsUserRequestNeeded={setIsUserRequestNeeded}
        setPage={setPage}
      />
    </section>
  );
}
