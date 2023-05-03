import { Fragment } from "react";
import "./App.css";
import Hero from "./Hero";
import DropdownMenu from "./DropdownMenu.jsx";

function App() {
  return (
    <Fragment>
      <DropdownMenu />
      <Hero />
    </Fragment>
  );
}

export default App;
