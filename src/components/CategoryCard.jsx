import Button1 from "../layouts/buttons/Button1";

function CategoryCard({
  title,
  category,
  description,
  image,
  backgroundSize,
  newProduct,
  onClick,
}) {
  return (
    <div className="w-full px-6 flex flex-col items-center md:px-10 lg:flex-row  lg:gap-[65px] lg:justify-center xl:gap-[125px] lg:odd:flex-row lg:even:flex-row-reverse">
      <div
        className="w-full h-[352px] bg-lightgray rounded-lg mb-8 bg-no-repeat bg-center lg:max-w-[540px] lg:h-[560px]"
        style={{
          backgroundImage: `url('${image}')`,
          backgroundSize: `${backgroundSize}`,
          aspectRatio: "1",
        }}
      ></div>
      <div className="flex flex-col items-center lg:items-start lg:max-w-[445px]">
        {newProduct && (
          <p className="text-sm text-center tracking-widest text-primary uppercase mb-6 lg:text-left">
            New Product
          </p>
        )}
        <h2 className="font-bold text-3xl text-center tracking-tightest uppercase text-black mb-6 md:text-6xl lg:text-left">
          <span>{title}</span>
          <br />
          <span>{category}</span>
        </h2>
        <p className="w-full max-w-[572px] font-medium text-base text-center text-black opacity-50 mb-6 lg:text-left">
          {description}
        </p>
        <Button1 text="See Product" onClick={onClick} />
      </div>
    </div>
  );
}

export default CategoryCard;
