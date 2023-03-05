import Header from "../components/Header";
import CategoryHeader from "../components/CategoryHeader";
import Button1 from "../layouts/buttons/Button1";
import Button2 from "../layouts/buttons/Button2";
import Button3 from "../layouts/buttons/Button3";
import ProductCard from "../components/ProductCard";
import Categories from "../components/Categories";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";

function Headphones() {
  const description =
    "The new XX99 Mark II headphones is the pinnacle of pristine audio. Itredefines your premium headphone experience by reproducing thebalanced depth and precision of studio-quality sound.";
  const description2 =
    "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.";
  const description3 =
    "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.";

  return (
    <div>
      <Header />
      <CategoryHeader category="Headphones" />
      <div className="flex flex-col gap-[120px] mt-16">
        <ProductCard
          title="XX99 Mark II"
          description={description}
          image="product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg"
          newProduct={true}
        />
        <ProductCard
          title="XX99 Mark I"
          description={description2}
          image="product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg"
          newProduct={false}
        />
        <ProductCard
          title="XX59"
          description={description3}
          image="product-xx59-headphones/mobile/image-category-page-preview.jpg"
          newProduct={false}
        />
        <Categories />
        <AboutUs />
        <Footer />
      </div>
    </div>
  );
}

export default Headphones;
