import { Fragment } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Header from "./components/Header";
import AdminUpload from "./components/adminupload";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Hero />} />
        <Route path="adminupload" element={<AdminUpload />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
