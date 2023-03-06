import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button1 from "../layouts/buttons/Button1";
import Counter from "../layouts/Counter";

function ProductCard({ product }) {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const price = product.price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="w-full px-6 flex flex-col">
      <p
        className="flex items-center gap-2 font-medium text-base text-black opacity-50 pt-4 pb-6"
        onClick={() => navigate(-1)}
      >
        <img
          src="/assets/shared/desktop/icon-arrow-right.svg"
          alt="icon arrow"
          style={{ transform: "rotate(180deg)" }}
        />
        Go Back
      </p>
      <div
        className="w-full h-[327px] bg-lightgray rounded-lg mb-8"
        style={{
          backgroundImage: `url('${product.image.mobile}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "327px 327px",
          backgroundPosition: "center center",
        }}
      ></div>
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
      <div className="flex items-center gap-4 mb-[88px]">
        <Counter count={quantity} setCount={setQuantity} />
        <Button1 text="add to cart" onClick={() => {}} />
      </div>
      <h4 className="font-bold text-2xl tracking-tightest uppercase text-black mb-6">
        Features
      </h4>
      <p className="font-medium text-base text-black opacity-50 mb-[88px] whitespace-pre-line">
        {product.features}
      </p>
      <h4 className="font-bold text-2xl tracking-tightest uppercase text-black mb-6">
        In the box
      </h4>
      {product.includes.map((item, index) => (
        <div key={index} className="flex items-center gap-6">
          <p className="text-primary font-bold text-base">{item.quantity}x</p>
          <p className="font-medium text-dark opacity-50 text-base">
            {item.item}
          </p>
        </div>
      ))}
      <img
        src={product.gallery.first.mobile}
        alt="image gallery"
        className="mt-[88px] rounded-lg mb-[20px]"
      />
      <img
        src={product.gallery.second.mobile}
        alt="image gallery"
        className="rounded-lg mb-[20px]"
      />
      <img
        src={product.gallery.third.mobile}
        alt="image gallery"
        className="rounded-lg mb-[20px]"
      />
      <div className="mt-[120px]">
        <h5 className="font-bold text-black text-2xl tracking-tightest uppercase text-center mb-[-16px]">
          You may also like
        </h5>
        {product.others.map((item) => (
          <div
            key={item.slug}
            className="flex flex-col items-center gap-8 mt-[56px]"
          >
            <img
              src={item.image.mobile}
              alt="image product"
              className="rounded-lg"
            />
            <h5 className="font-bold text-2xl text-center tracking-wide uppercase text-black">
              {item.name}
            </h5>
            <Button1 text="See Product" onClick={() => {}} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCard;
