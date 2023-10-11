import "./App.css";
import Header from "./components/Header";
import AdminUpload from "./components/adminupload";
import ContactForm from "./components/ContactForm";
import ProductPage from "./components/ProductPage";
import FrontPage from "./components/FrontPage";
import Cart from "./components/cart";
import Wishlist from "./components/Wishlist";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { firestore } from "./firebase";
import { collection, getDocs } from "@firebase/firestore";

function App() {
  const [product, setProduct] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [showWishlist, setShowWishlist] = useState(false);
  const [wishlistItems, setWishlistItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find(
      (item) => item.articlenumber === product.articlenumber
    );
    if (exist) {
      const newCartItems = cartItems.map((item) =>
        item.articlenumber === product.articlenumber
          ? { ...exist, qty: exist.qty + 1 }
          : item
      );
      setCartItems(newCartItems);
    } else {
      const newCartItems = [...cartItems, { ...product, qty: 1 }];
      setCartItems(newCartItems);
    }
  };

  const onAddWishlist = (product) => {
    const exist = wishlistItems.find(
      (item) => item.articlenumber === product.articlenumber
    );
    if (exist) {
      const newWishlistItems = wishlistItems.map((item) =>
        item.articlenumber === product.articlenumber
          ? { ...exist, qty: exist.qty + 1 }
          : item
      );
      setWishlistItems(newWishlistItems);
    } else {
      const newWishlistItems = [...wishlistItems, { ...product, qty: 1 }];
      setWishlistItems(newWishlistItems);
    }
  };

  const onRemove = (productbuy) => {
    const items = cartItems.filter(
      (item) => item.articlenumber !== productbuy.articlenumber
    );
    setCartItems(items);
  };

  const onRemoveWishlist = (productWish) => {
    const items = wishlistItems.filter(
      (item) => item.articlenumber !== productWish.articlenumber
    );
    setWishlistItems(items);
  };

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
        wishlistQty={getWishlistQuantity()}
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
