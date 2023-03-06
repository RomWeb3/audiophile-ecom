import Header from "../components/Header";
import CategoryHeader from "../components/CategoryHeader";
import ProductCard from "../components/ProductCard";
import Categories from "../components/Categories";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";

function Speakers() {
  const description =
    "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.";
  const description2 =
    "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.";

  return (
    <div>
      <Header />
      <CategoryHeader category="Speakers" />
      <div className="flex flex-col gap-[120px] mt-16">
        <ProductCard
          title="ZX9"
          category="Speaker"
          description={description}
          image="product-zx9-speaker/mobile/image-category-page-preview.jpg"
          newProduct={true}
        />
        <ProductCard
          title="ZX7"
          category="Speaker"
          description={description2}
          image="product-zx7-speaker/mobile/image-category-page-preview.jpg"
          newProduct={false}
        />
        <Categories />
        <AboutUs />
        <Footer />
      </div>
    </div>
  );
}

export default Speakers;
