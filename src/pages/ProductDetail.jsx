import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import Categories from "../components/Categories";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";

function ProductDetail({ products }) {
  const idOfId = useParams();
  const id = idOfId.id * 1;
  const product = products?.find((product) => product.id === id);

  console.log(product);

  return (
    <div>
      <Header />
      <ProductCard product={product} />
      <div className="flex flex-col gap-[120px] mt-[120px]">
        <Categories />
        <AboutUs />
        <Footer />
      </div>
    </div>
  );
}

export default ProductDetail;
