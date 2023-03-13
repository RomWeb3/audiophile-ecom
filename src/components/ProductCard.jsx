import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button1 from "../layouts/buttons/Button1";
import Counter from "../layouts/Form Elements/Counter";

function ProductCard({ product, cart, setCart, screenWidth }) {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const price = product.price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  const handleAddToCart = (product) => {
    const newCart = [...cart];
    const item = newCart.find((item) => item.id === product.id);
    if (item) {
      item.quantity += quantity;
    } else {
      newCart.push({ ...product, quantity });
    }
    setCart(newCart);
    setQuantity(1);
  };

  console.log(cart);

  return (
    <div className="w-full px-6 flex flex-col md:px-10">
      <p
        className="flex items-center gap-2 font-medium text-base text-black opacity-50 pt-4 pb-6 md:pt-8"
        onClick={() => navigate(-1)}
      >
        <img
          src="/assets/shared/desktop/icon-arrow-right.svg"
          alt="icon arrow"
          style={{ transform: "rotate(180deg)" }}
        />
        Go Back
      </p>
      <div className="flex flex-col lg:items-center">
        <div className="flex flex-col md:flex-row md:items-center md:gap-[70px] md:mb-[120px]">
          <div
            className="w-full h-[327px] bg-lightgray rounded-lg mb-8 bg-no-repeat bg-center md:min-w-[281px] md:h-[480px] md:mb-0"
            style={{
              backgroundImage: `url('${product.image.mobile}')`,
              backgroundSize: "327px 327px",
            }}
          ></div>
          <div className="flex flex-col">
            {product.new && (
              <p className="text-sm text-left tracking-widest text-primary uppercase mb-6">
                New Product
              </p>
            )}
            <h2 className="max-w-[300px] font-bold text-3xl text-left tracking-tightest uppercase text-black mb-6">
              <span>{product.name}</span>
            </h2>
            <p className="font-medium text-base text-left text-black opacity-50 mb-6">
              {product.description}
            </p>
            <p className="font-bold text-lg text-left tracking-tight uppercase text-black mb-8">
              <span>{price}</span>
            </p>
            <div className="flex items-center gap-4 mb-[88px] md:mb-0">
              <Counter count={quantity} setCount={setQuantity} />
              <Button1
                text="add to cart"
                onClick={() => handleAddToCart(product)}
              />
            </div>
          </div>
        </div>
        <h4 className="w-full font-bold text-2xl tracking-tightest uppercase text-black mb-6 md:text-4xl text-left">
          Features
        </h4>
        <p className="font-medium text-base text-black opacity-50 mb-[88px] whitespace-pre-line">
          {product.features}
        </p>
        <div className="flex flex-col md:flex-row md:gap-3">
          <h4 className="font-bold text-2xl tracking-tightest uppercase text-black mb-6 text-left md:text-4xl md:w-[338px] md:mb-0">
            In the box
          </h4>
          <div className="flex flex-col gap-2">
            {product.includes.map((item, index) => (
              <div key={index} className="flex items-center gap-6">
                <p className="text-primary font-bold text-base">
                  {item.quantity}x
                </p>
                <p className="font-medium text-dark opacity-50 text-base">
                  {item.item}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-[20px] mt-[88px] md:flex-row md:mt-[120px]">
          <div className="flex flex-col gap-[20px]">
            <img
              src={
                screenWidth < 768
                  ? product.gallery.first.mobile
                  : product.gallery.first.tablet
              }
              alt="image gallery"
              className="rounded-lg md:h-[174px]"
            />
            <img
              src={
                screenWidth < 768
                  ? product.gallery.second.mobile
                  : product.gallery.second.tablet
              }
              alt="image gallery"
              className="rounded-lg md:h-[174px]"
            />
          </div>
          <img
            src={
              screenWidth < 768
                ? product.gallery.third.mobile
                : product.gallery.third.tablet
            }
            alt="image gallery"
            className="rounded-lg md:max-w-[56%] md:h-[368px]"
          />
        </div>
        <div className="mt-[120px]">
          <h5 className="font-bold text-black text-2xl tracking-tightest uppercase text-center mb-[-16px]">
            You may also like
          </h5>
          <div className="flex flex-col md:flex-row md:gap-[11px]">
            {product.others.map((item) => (
              <div
                key={item.slug}
                className="flex flex-col items-center gap-8 mt-[56px]"
              >
                <img
                  src={
                    screenWidth < 768 ? item.image.mobile : item.image.tablet
                  }
                  alt="image product"
                  className="rounded-lg md:h-[318px]"
                />
                <h5 className="font-bold text-2xl text-center tracking-wide uppercase text-black">
                  {item.name}
                </h5>
                <Button1
                  text="See Product"
                  onClick={() => navigate({ pathname: `/product/${item.id}` })}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
