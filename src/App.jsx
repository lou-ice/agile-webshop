import "./App.css";
import Header from "./components/Header";
import AdminUpload from "./components/adminupload";
import ContactForm from "./components/ContactForm";
import ProductPage from "./components/ProductPage";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { firestore } from "./firebase";
import { collection, getDocs } from "@firebase/firestore";
import FrontPage from "./components/FrontPage";

function App() {
  const [product, setProduct] = useState([]);
  console.log(product);

  const fetchPost = async () => {
    await getDocs(collection(firestore, "products")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProduct(newData);
    });
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<FrontPage />} />
        <Route path="adminupload" element={<AdminUpload product={product} />} />
        <Route path="contactForm" element={<ContactForm />} />
        <Route path="productpage" element={<ProductPage product={product} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
