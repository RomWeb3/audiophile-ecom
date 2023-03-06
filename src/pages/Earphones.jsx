import Header from "../components/Header";
import CategoryHeader from "../components/CategoryHeader";
import ProductCard from "../components/ProductCard";
import Categories from "../components/Categories";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";

function Speakers() {
  const description =
    "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.";

  return (
    <div>
      <Header />
      <CategoryHeader category="Earphones" />
      <div className="flex flex-col gap-[120px] mt-16">
        <ProductCard
          title="YX1 Wireless"
          category="Earphones"
          description={description}
          image="product-yx1-earphones/mobile/image-category-page-preview.jpg"
          newProduct={true}
        />
        <Categories />
        <AboutUs />
        <Footer />
      </div>
    </div>
  );
}

export default Speakers;
