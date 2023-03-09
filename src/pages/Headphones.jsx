import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import CategoryHeader from "../components/CategoryHeader";
import CategoryCard from "../components/CategoryCard";
import Categories from "../components/Categories";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";

function Headphones({ products, cart, setCart }) {
  const navigate = useNavigate();
  const filteredProducts = products
    .filter((product) => product.category === "headphones")
    .sort((a, b) => b.new - a.new);

  return (
    <div className="relative">
      <Header cart={cart} setCart={setCart} />
      <CategoryHeader category="Headphones" />
      <div className="flex flex-col gap-[120px] mt-16">
        {filteredProducts.map((product) => (
          <CategoryCard
            key={product.id}
            title={product.name.replace("Headphones", "")}
            category={product.category}
            description={product.description}
            image={product.categoryImage.mobile}
            newProduct={product.new}
            onClick={() => navigate(`/product/${product.id}`)}
          />
        ))}
        <Categories />
        <AboutUs />
        <Footer />
      </div>
    </div>
  );
}

export default Headphones;
