import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function CheckoutModal({ cart, setCart }) {
  const [viewMore, setViewMore] = useState(false);
  const navigate = useNavigate();

  const height = viewMore ? 140 + (cart.length - 1) * 67 : 140;

  const totalPrice = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-full fixed bg-black/40 flex flex-col justify-center items-center z-50"
    >
      <div className="p-8 w-[87%] max-w-[540px] bg-white rounded-lg flex flex-col gap-8 md:p-12 overflow-scroll">
        <div>
          <img
            src="/assets/checkout/icon-order-confirmation.svg"
            alt="icon order confirmation"
          />
          <h2 className=" text-left font-bold text-2xl uppercase mt-6 md:text-4xl md:mt-8">
            <span>Thank you</span>
            <br />
            <span>for your order</span>
          </h2>
          <p className="text-left font-medium text-base opacity-50 mt-4 mb-6 md:mt-6">
            You will receive an email confirmation shortly.
          </p>

          <div className="flex flex-col md:flex-row">
            <motion.div
              initial={{ height: "140" }}
              animate={{
                height: height,
              }}
              transition={{ duration: 0.15 }}
              className={`w-full rounded-t-lg bg-lightgray px-6 
                          md:rounded-t-none md:rounded-l-lg md:rounded-tl-lg md:flex md:flex-col md:justify-center`}
            >
              <div
                className={`w-full flex flex-col items-center pt-6 gap-4 ${
                  cart.length > 1 ? "pb-3" : "pb-6"
                }`}
              >
                {cart.slice(0, viewMore ? 9 : 1).map((item) => (
                  <div
                    key={item.id}
                    className="w-full flex justify-between items-center md:items-start opacity-100"
                  >
                    <div className="flex items-center gap-2">
                      <img
                        src={`/assets/cart/image${item.image.mobile
                          .replace("/assets/product", "")
                          .replace("/mobile/image-product.jpg", "")}.jpg`}
                        alt="product"
                        className="w-[50px] h-[50px] rounded-lg"
                      />
                      <div className="flex flex-col">
                        <span className="font-bold text-base uppercase">
                          {item.name
                            .replace("Headphones", "")
                            .replace("Speaker", "")
                            .replace("Earphones", "")
                            .replace("Wireless", "")
                            .replace("Mark", "MK")}
                        </span>
                        <span className="font-medium text-base opacity-60 uppercase">
                          {item.price.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                          })}
                        </span>
                      </div>
                    </div>

                    <div>
                      <span className="font-bold text-base opacity-60">
                        x{item.quantity}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              {cart.length > 1 && (
                <>
                  <div className="w-full border-t-[1px] border-black/10 pb-2"></div>
                  <div className="pb-6 text-center">
                    <span
                      className="font-bold text-[12px] tracking-[-0.2px] opacity-50 text-center cursor-pointer select-none"
                      onClick={() => setViewMore(!viewMore)}
                    >
                      {!viewMore
                        ? `and ${cart.length - 1} other item(s)`
                        : "View less"}
                    </span>
                  </div>
                </>
              )}
            </motion.div>

            <div
              className={`w-full rounded-b-lg bg-secondary px-6 py-4 
                          md:rounded-b-none md:rounded-r-lg md:rounded-br-lg md:flex md:flex-col md:justify-center`}
            >
              <p className="font-medium text-base text-white opacity-60 uppercase mb-2">
                Grand Total
              </p>
              <p className="font-bold text-lg uppercase text-white">
                {(totalPrice + 50).toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </p>
            </div>
          </div>
          <button
            className={`w-full h-12 bg-primary font-bold text-xs text-center tracking-tightest uppercase text-white 
                        mt-6 md:mt-12 hover:bg-[#FBAF85] transition-all`}
            onClick={() => {
              navigate("/");
              setCart([]);
            }}
          >
            Back to Home
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default CheckoutModal;
