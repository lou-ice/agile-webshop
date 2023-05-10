import "./App.css";
import Header from "./components/Header";
import AdminUpload from "./components/adminupload";
import ContactForm from "./components/ContactForm";
import ProductPage from "./components/ProductPage";
import FrontPage from "./components/FrontPage";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { firestore } from "./firebase";
import { collection, getDocs } from "@firebase/firestore";

function App() {
  const [product, setProduct] = useState([]);

  const fetchPost = async () => {
    await getDocs(collection(firestore, "products")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProduct(newData);
    });
  };

  console.log(product);
  useEffect(() => {
    fetchPost();
  }, []);

  const kategorier = product.reduce((kategorier, currentValue) => {
    if (!kategorier.includes(currentValue.kategori)) {
      kategorier.push(currentValue.kategori);
    }
    return kategorier;
  }, []);

  return (
    <BrowserRouter>
      <Header kategorier={kategorier} />
      <Routes>
        <Route
          path="/"
          element={<FrontPage product={product} kategorier={kategorier} />}
        />
        <Route path="adminupload" element={<AdminUpload product={product} />} />
        <Route path="contactForm" element={<ContactForm />} />
        <Route
          path="productpage"
          element={<ProductPage product={product} kategorier={kategorier} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
