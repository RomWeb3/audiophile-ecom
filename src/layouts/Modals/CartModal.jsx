import { useEffect } from "react";
import { motion } from "framer-motion";
import Counter from "../Counter";

function CartModal({ setShowCart }) {
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
      className="w-full h-[calc(100%-90px)] absolute bg-black/40 flex flex-col items-center z-50"
      onClick={closeModal}
    >
      <div className="py-8 px-[28px] w-[92%] max-w-[377px] h-[488px] bg-white rounded-lg flex flex-col justify-between gap-8 opacity-100 mt-6">
        <div>
          <div className="flex items-center justify-between">
            <span className="font-bold text-lg tracking-tighter uppercase">
              Cart
            </span>
            <button className="font-medium text-base underline opacity-50">
              Remove all
            </button>
          </div>
          <div className="mt-8 flex flex-col gap-6 overflow-auto max-h-[240px]">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <img
                  src="/assets/cart/image-xx99-mark-two-headphones.jpg"
                  alt="mark two headphones"
                  className="w-[64px] h-[64px] object-cover rounded-lg"
                />
                <div className="flex flex-col">
                  <span className="font-bold text-base uppercase">
                    XX99 MKII
                  </span>
                  <span className="font-medium text-base opacity-50 uppercase">
                    $2,999
                  </span>
                </div>
              </div>
              <Counter addCSS="w-[96px] h-8" />
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <img
                  src="/assets/cart/image-xx99-mark-two-headphones.jpg"
                  alt="mark two headphones"
                  className="w-[64px] h-[64px] object-cover rounded-lg"
                />
                <div className="flex flex-col">
                  <span className="font-bold text-base uppercase">
                    XX99 MKII
                  </span>
                  <span className="font-medium text-base opacity-50 uppercase">
                    $2,999
                  </span>
                </div>
              </div>
              <Counter addCSS="w-[96px] h-8" />
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <img
                  src="/assets/cart/image-xx99-mark-two-headphones.jpg"
                  alt="mark two headphones"
                  className="w-[64px] h-[64px] object-cover rounded-lg"
                />
                <div className="flex flex-col">
                  <span className="font-bold text-base uppercase">
                    XX99 MKII
                  </span>
                  <span className="font-medium text-base opacity-50 uppercase">
                    $2,999
                  </span>
                </div>
              </div>
              <Counter addCSS="w-[96px] h-8" />
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between mb-6">
            <span className="font-medium text-base opacity-50 uppercase">
              Total
            </span>
            <span className="font-bold text-lg uppercase">$5396</span>
          </div>
          <button className="w-full h-12 bg-primary font-bold text-xs text-center tracking-tightest uppercase text-white self-end justify-end">
            Checkout
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default CartModal;
