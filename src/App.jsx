import "./App.css";
import Header from "./components/Header";
import AdminUpload from "./components/adminupload";
import ContactForm from "./components/ContactForm";
import ProductPage from "./components/ProductPage";
import FrontPage from "./components/FrontPage";
import Cart from "./components/cart";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { firestore } from "./firebase";
import { collection, getDocs } from "@firebase/firestore";

function App() {
  const [product, setProduct] = useState([]);
  const [cartItems, setCartItems] = useState([]); //State för produkter vi skickar till varukorgen
  //const products = state;
  console.log(cartItems);
  const onAdd = (product) => {
    //Funktion för att lägga till i vår cart

    const exist = cartItems.find(
      //Har vi redan produkten i vår cartItem eller inte?
      (item) => item.articlenumber === product.articlenumber
    );
    if (exist) {
      console.log(exist);
      //Om vi har samma produkt öka den produkten med en
      const newCartItems = cartItems.map((item) =>
        item.articlenumber === product.articlenumber
          ? { ...exist, qty: exist.qty + 1 } //Lägger till qty till produkten och räknar upp
          : item
      );
      setCartItems(newCartItems); //Setter funktion
    } else {
      const newCartItems = [...cartItems, { ...product, qty: 1 }]; //Om vi inte har produkten i vår state så lägger vi till den
      setCartItems(newCartItems);
    }
  };
  const onRemove = (productbuy) => {
    //Tar bort produkt baserat på produktnummer
    const items = cartItems.filter(
      (item) => item.articlenumber !== productbuy.articlenumber
    );
    setCartItems(items);
  };

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
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <FrontPage
                product={product}
                kategorier={kategorier}
                onAdd={onAdd}
              />
            }
          />
          <Route
            path="adminupload"
            element={<AdminUpload product={product} />}
          />
          <Route path="contactForm" element={<ContactForm />} />
          <Route
            path="productpage"
            element={
              <ProductPage
                cartItems={cartItems}
                onAdd={onAdd}
                onRemove={onRemove}
                product={product}
                kategorier={kategorier}
              />
            }
          />
          <Route
            path="cart"
            element={
              <Cart
                cartItems={cartItems}
                onAdd={onAdd}
                onRemove={onRemove}
                product={product}
                kategorier={kategorier}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
