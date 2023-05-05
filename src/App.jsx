import { Fragment } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Header from "./components/Header";
import AdminUpload from "./components/adminupload";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useRef, useState, useEffect } from "react";
import { firestore } from "./firebase";
import { addDoc, collection, getDocs } from "@firebase/firestore";

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
        <Route index element={<Hero />} />
        <Route path="adminupload" element={<AdminUpload />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
