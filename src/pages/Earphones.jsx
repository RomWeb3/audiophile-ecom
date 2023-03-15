import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import CategoryHeader from "../components/CategoryHeader";
import CategoryCard from "../components/CategoryCard";
import Categories from "../components/Categories";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";

function Earphones({ products, cart, setCart, screenWidth }) {
  const navigate = useNavigate();
  const filteredProducts = products
    .filter((product) => product.category === "earphones")
    .sort((a, b) => b.new - a.new);

  return (
    <div className="relative">
      <Header cart={cart} setCart={setCart} />
      <CategoryHeader category="Earphones" />
      <div className="flex flex-col gap-[120px] mt-16">
        {filteredProducts.map((product) => (
          <CategoryCard
            key={product.id}
            title={product.name.replace("Earphones", "")}
            category={product.category}
            description={product.description}
            image={
              screenWidth < 1024
                ? product.categoryImage.mobile
                : product.categoryImage.desktop
            }
            backgroundSize={screenWidth < 1024 ? "327px 352px" : "540px 560px"}
            newProduct={product.new}
            onClick={() => navigate(`/product/${product.id}`)}
          />
        ))}
        <div className="flex flex-col items-center gap-[120px] mt-[-40px] lg:gap-[160px] lg:mt-[-80px]">
          <Categories />
          <AboutUs />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Earphones;
