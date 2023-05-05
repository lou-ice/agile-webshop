import "./App.css";
import Hero from "./components/Hero";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Hero />} />
        <Route path="contact" element={<ContactForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
