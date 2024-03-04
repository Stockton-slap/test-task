import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SignUpSection from "./components/SignUp/SignUpSection";
import UsersList from "./components/UsersList";
import "./sass/main.scss";

function App() {
  const [isUserRequestNeeded, setIsUserRequestNeeded] = useState(true);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <UsersList
          isUserRequestNeeded={isUserRequestNeeded}
          setIsUserRequestNeeded={setIsUserRequestNeeded}
        />
        <SignUpSection setIsUserRequestNeeded={setIsUserRequestNeeded} />
      </main>
    </>
  );
}

export default App;
