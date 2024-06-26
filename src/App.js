import "./App.css";
import Register from "./Pages/register/Register";
import Footer from "./Pages/Footer/Footer";
import Header from "./Pages/Header/Header";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/loggin/Login";
import React from "react";
import Main from "./Pages/Main/Main";
import Products from "./Pages/Products/Products";
import ContextProducts from "./context/context-products/ContextProducts";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Product from "./Pages/Product/Product";
import ShoppingCart from "./Pages/ShoppingCart/ShoppingCart";

function App() {
  return (
    <div className="App">
      <Header />
      <ContextProducts>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/checkout/cart" element={<ShoppingCart />} />
        </Routes>
      </ContextProducts>
      <Footer />
    </div>
  );
}

export default App;
