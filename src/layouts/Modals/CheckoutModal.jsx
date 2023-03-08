import { useEffect } from "react";
import { motion } from "framer-motion";

function CheckoutModal({ setShowCart }) {
  const closeModal = (e) => {
    if (e.target === e.currentTarget) {
      setShowCart(false);
    }
  };

  useEffect(() => {
    const close = (e) => {
      if (e.key === "Escape") {
        setShowCart(false);
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-full fixed bg-black/40 flex flex-col justify-center items-center z-50"
      onClick={closeModal}
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
          <div className="w-full rounded-t-lg bg-lightgray">
            <div className="flex justify-between items-center p-6">
              <img
                src="/assets/cart/image-xx99-mark-two-headphones.jpg"
                alt="mark two headphones"
                className="w-[32px] h-[32px] object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="w-full rounded-b-lg bg-secondary px-6 py-4">
            <p className="font-medium text-base text-white opacity-50 uppercase mb-2">
              Grand Total
            </p>
            <p className="font-bold text-lg uppercase text-white">$5,446</p>
          </div>
          <button className="w-full h-12 bg-primary font-bold text-xs text-center tracking-tightest uppercase text-white mt-6">
            Back to Home
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default CheckoutModal;
