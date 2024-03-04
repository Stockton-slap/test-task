import React from "react";
import SignUpForm from "./SignUpForm";

export default function SignUpSection({ setIsUserRequestNeeded, setPage }) {
  return (
    <section className="container sign-up" id="signUpSection">
      <SignUpForm
        setIsUserRequestNeeded={setIsUserRequestNeeded}
        setPage={setPage}
      />
    </section>
  );
}
