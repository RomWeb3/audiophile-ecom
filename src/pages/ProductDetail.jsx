import { useParams } from "react-router-dom";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import Categories from "../components/Categories";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";

function ProductDetail({ products, cart, setCart, screenWidth }) {
  const idOfId = useParams();
  const id = idOfId.id * 1;
  const product = products?.find((product) => product.id === id);

  console.log(product);

  return (
    <div className="relative">
      <Header cart={cart} setCart={setCart} />
      <ProductCard
        product={product}
        cart={cart}
        setCart={setCart}
        screenWidth={screenWidth}
      />
      <div className="flex flex-col gap-[120px] mt-[80px] items-center lg:mt-10 lg:gap-[160px]">
        <Categories />
        <AboutUs />
        <Footer />
      </div>
    </div>
  );
}

export default ProductDetail;
