import { Fragment } from "react";
import "./App.css";
import Hero from "./Hero";
import DropdownMenu from "./DropdownMenu.jsx";
import Header from "./Header";

function App() {
  return (
    <Fragment>
      <Header />
      <DropdownMenu />
      <Hero />
    </Fragment>
  );
}

export default App;
