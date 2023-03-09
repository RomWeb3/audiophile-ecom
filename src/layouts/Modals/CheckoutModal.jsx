import { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function CheckoutModal({ cart }) {
  const navigate = useNavigate();

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
      <div className="p-8 w-[87%] max-w-[540px] bg-white rounded-lg flex flex-col gap-8">
        <div>
          <img
            src="/assets/checkout/icon-order-confirmation.svg"
            alt="icon order confirmation"
          />
          <h2 className=" text-left font-bold text-2xl uppercase mt-6">
            <span>Thank you</span>
            <br />
            <span>for your order</span>
          </h2>
          <p className="text-left font-medium text-base opacity-50 mt-4 mb-6">
            You will receive an email confirmation shortly.
          </p>

          <div className="w-full rounded-t-lg bg-lightgray px-6">
            <div
              className={`flex justify-between items-center pt-6 ${
                cart.length > 1 ? "pb-3" : "pb-6"
              }`}
            >
              <div className="flex items-center gap-4">
                <img
                  src={`/assets/cart/image${cart[0].image.mobile
                    .replace("/assets/product", "")
                    .replace("/mobile/image-product.jpg", "")}.jpg`}
                  alt="product"
                  className="w-[50px] h-[50px] rounded-lg"
                />
                <div className="flex flex-col">
                  <span className="font-bold text-base uppercase">
                    {cart[0].name
                      .replace("Headphones", "")
                      .replace("Speaker", "")
                      .replace("Earphones", "")
                      .replace("Wireless", "")
                      .replace("Mark", "MK")}
                  </span>
                  <span className="font-medium text-base opacity-50 uppercase">
                    {cart[0].price.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </span>
                </div>
              </div>
              <span className="font-bold text-base opacity-50">
                x{cart[0].quantity}
              </span>
            </div>
            {cart.length > 1 && (
              <>
                <div className="w-full border-t-[1px] border-black/10 pb-2"></div>
                <div className="pb-6 text-center">
                  <span className="font-bold text-[12px] tracking-[-0.2px] opacity-50 text-center">
                    and {cart.length - 1} other item(s)
                  </span>
                </div>
              </>
            )}
          </div>

          <div className="w-full rounded-b-lg bg-secondary px-6 py-4">
            <p className="font-medium text-base text-white opacity-50 uppercase mb-2">
              Grand Total
            </p>
            <p className="font-bold text-lg uppercase text-white">
              {(totalPrice + 50).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </p>
          </div>
          <button
            className="w-full h-12 bg-primary font-bold text-xs text-center tracking-tightest uppercase text-white mt-6"
            onClick={() => navigate("/")}
          >
            Back to Home
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default CheckoutModal;
