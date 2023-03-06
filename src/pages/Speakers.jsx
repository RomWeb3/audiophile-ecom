import Header from "../components/Header";
import CategoryHeader from "../components/CategoryHeader";
import CategoryCard from "../components/CategoryCard";
import Categories from "../components/Categories";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";

function Speakers({ products }) {
  const filteredProducts = products
    .filter((product) => product.category === "speakers")
    .sort((a, b) => b.new - a.new);

  return (
    <div>
      <Header />
      <CategoryHeader category="Speakers" />
      <div className="flex flex-col gap-[120px] mt-16">
        {filteredProducts.map((product) => (
          <CategoryCard
            key={product.id}
            title={product.name.replace("Speaker", "")}
            category={product.category.slice(0, -1)}
            description={product.description}
            image={product.categoryImage.mobile}
            newProduct={product.new}
          />
        ))}
        <Categories />
        <AboutUs />
        <Footer />
      </div>
    </div>
  );
}

export default Speakers;
