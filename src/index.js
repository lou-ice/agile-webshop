import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import DropdownMenu from "./DropdownMenu";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <br />
    <DropdownMenu />
  </React.StrictMode>
);
