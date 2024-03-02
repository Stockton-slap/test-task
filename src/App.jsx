import Header from "./components/Header";
import Hero from "./components/Hero";
import UsersList from "./components/UsersList";
import "./sass/main.scss";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <UsersList />
      </main>
    </>
  );
}

export default App;
