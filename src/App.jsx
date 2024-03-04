import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SignUpSection from "./components/SignUp/SignUpSection";
import UsersList from "./components/UsersList";
import "./sass/main.scss";

function App() {
  const [isUserRequestNeeded, setIsUserRequestNeeded] = useState(true);
  const [page, setPage] = useState(1);

  const handleSignUpClick = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Header handleSignUpClick={handleSignUpClick} />
      <main>
        <Hero handleSignUpClick={handleSignUpClick} />
        <UsersList
          isUserRequestNeeded={isUserRequestNeeded}
          setIsUserRequestNeeded={setIsUserRequestNeeded}
          page={page}
          setPage={setPage}
        />
        <SignUpSection
          setIsUserRequestNeeded={setIsUserRequestNeeded}
          setPage={setPage}
        />
      </main>
    </>
  );
}

export default App;
