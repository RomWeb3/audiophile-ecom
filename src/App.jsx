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
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [products, setProducts] = useLocalStorage("products", []);
  const [cart, setCart] = useState([]);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

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

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
        <Route
          path="headphones"
          element={
            <Headphones
              products={products}
              cart={cart}
              setCart={setCart}
              screenWidth={screenWidth}
            />
          }
        />
        <Route
          path="speakers"
          element={
            <Speakers
              products={products}
              cart={cart}
              setCart={setCart}
              screenWidth={screenWidth}
            />
          }
        />
        <Route
          path="earphones"
          element={
            <Earphones
              products={products}
              cart={cart}
              setCart={setCart}
              screenWidth={screenWidth}
            />
          }
        />
        <Route
          path="product/:id"
          element={
            <ProductDetail
              products={products}
              cart={cart}
              setCart={setCart}
              screenWidth={screenWidth}
            />
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
