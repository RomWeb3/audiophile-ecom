import Button1 from "../layouts/buttons/Button1";

function ProductCard({ title, description, image, newProduct }) {
  return (
    <div className="w-full px-6 flex flex-col items-center">
      <div
        className="w-full h-[352px] bg-lightgray rounded-lg mb-8"
        style={{
          backgroundImage: `url('/assets/${image}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "327px 352px",
          backgroundPosition: "center center",
        }}
      ></div>
      {newProduct && (
        <p className="text-sm text-center tracking-widest text-primary uppercase mb-6">
          New Product
        </p>
      )}
      <h2 className="font-bold text-3xl text-center tracking-tightest uppercase text-black mb-6">
        <span>{title}</span>
        <br />
        <span>Headphones</span>
      </h2>
      <p className="font-medium text-base text-center text-black opacity-50 mb-6">
        {description}
      </p>
      <Button1 />
    </div>
  );
}

export default ProductCard;
