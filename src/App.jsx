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
import Wishlist from "./components/Wishlist";

function App() {
  const [product, setProduct] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]); //State för produkter vi skickar till varukorgen
  const [showWishlist, setShowWishlist] = useState(false);
  const [wishlistItems, setWishlistItems] = useState([]); //State för produkter vi skickar till wishlist

  //const products = state;
  //console.log(cartItems);

  const onAdd = (product) => {
    //Funktion för att lägga till i vår cart
    const exist = cartItems.find(
      //Har vi redan produkten i vår cartItem eller inte?
      (item) => item.articlenumber === product.articlenumber
    );
    if (exist) {
      //console.log(exist);
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

  const onAddWishlist = (product) => {
    //Funktion för att lägga till i vår wishlist
    const exist = wishlistItems.find(
      //Har vi redan produkten i vår wishlist eller inte?
      (item) => item.articlenumber === product.articlenumber
    );
    if (exist) {
      //Om vi har samma produkt öka den produkten med en
      const newWishlistItems = wishlistItems.map((item) =>
        item.articlenumber === product.articlenumber
          ? { ...exist, qty: exist.qty + 1 } //Lägger till qty till produkten och räknar upp
          : item
      );
      setWishlistItems(newWishlistItems); //Setter funktion
    } else {
      const newWishlistItems = [...wishlistItems, { ...product, qty: 1 }]; //Om vi inte har produkten i vår state så lägger vi till den
      setWishlistItems(newWishlistItems);
    }
  };

  const onRemove = (productbuy) => {
    //Tar bort produkt baserat på produktnummer
    const items = cartItems.filter(
      (item) => item.articlenumber !== productbuy.articlenumber
    );
    setCartItems(items);
  };

  const onRemoveWishlist = (productWish) => {
    //Tar bort produkt baserat på produktnummer
    const items = wishlistItems.filter(
      (item) => item.articlenumber !== productWish.articlenumber
    );
    setWishlistItems(items);
  };

  // Total product quantity in cart
  const getCartQuantity = () => {
    return cartItems
      .map((productInCart) => productInCart.qty)
      .reduce((add, current) => add + current, 0);
  };

  const getWishlistQuantity = () => {
    return wishlistItems
      .map((productInWishlist) => productInWishlist.qty)
      .reduce((add, current) => add + current, 0);
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

  //console.log(product);
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
      <Header
        kategorier={kategorier}
        cartQty={getCartQuantity()}
        product={product}
        setShowCart={setShowCart}
        setShowWishlist={setShowWishlist}
        wishlistQty={getWishlistQuantity()}
      />
      <Wishlist
        showWishlist={showWishlist}
        handleCloseWishlist={() => setShowWishlist(false)}
        wishlistItems={wishlistItems}
        setWishlistItems={setWishlistItems}
        onAddWishlist={onAddWishlist}
        onRemoveWishlist={onRemoveWishlist}
        product={product}
        kategorier={kategorier}
      />
      <Cart
        showCart={showCart}
        handleClose={() => setShowCart(false)}
        cartItems={cartItems}
        setCartItems={setCartItems}
        onAdd={onAdd}
        onRemove={onRemove}
        product={product}
        kategorier={kategorier}
        cartQty={getCartQuantity()}
      />
      <Routes>
        <Route
          path="/"
          element={
            <FrontPage
              product={product}
              kategorier={kategorier}
              onAdd={onAdd}
              onAddWishlist={onAddWishlist}
            />
          }
        />
        <Route
          path="adminupload"
          element={<AdminUpload product={product} onAdd={onAdd} />}
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
              wishlistItems={wishlistItems}
              onAddWishlist={onAddWishlist}
              onRemoveWishlist={onRemoveWishlist}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
