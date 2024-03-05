import React from "react";
import Button from "../common/Button";

export default function Hero({ handleSignUpClick }) {
  return (
    <section className="hero">
      <div className="hero__wrapper">
        <h1 className="hero__headline">
          Test assignment for front-end developer
        </h1>
        <p className="hero__paragraph">
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </p>
        <Button
          type="button"
          text="Sign up"
          className="btn hero__btn"
          handleClick={() => handleSignUpClick("signUpSection")}
        />
      </div>
    </section>
  );
}
