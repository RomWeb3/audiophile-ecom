import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import useLocalStorage from "use-local-storage";
import Home from "./pages/Home";
import Headphones from "./pages/Headphones";
import Speakers from "./pages/Speakers";
import Earphones from "./pages/Earphones";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";

function App() {
  const [products, setProducts] = useLocalStorage("products", []);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const localData = localStorage.getItem("produts");
    if (localData && !Array.isArray(JSON.parse(localData))) {
      setProducts(JSON.parse(localData));
    } else {
      fetch("/data/data.json")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }
  }, []);

  console.log(products);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
        <Route
          path="headphones"
          element={
            <Headphones products={products} cart={cart} setCart={setCart} />
          }
        />
        <Route
          path="speakers"
          element={
            <Speakers products={products} cart={cart} setCart={setCart} />
          }
        />
        <Route
          path="earphones"
          element={
            <Earphones products={products} cart={cart} setCart={setCart} />
          }
        />
        <Route
          path="product/:id"
          element={
            <ProductDetail products={products} cart={cart} setCart={setCart} />
          }
        />
        <Route
          path="checkout"
          element={<Checkout cart={cart} setCart={setCart} />}
        />
      </Routes>
    </div>
  );
}

export default App;
