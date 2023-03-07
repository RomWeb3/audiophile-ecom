import { useEffect } from "react";
import { motion } from "framer-motion";

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
      className="w-full h-[calc(100%-90px)] fixed bg-black/40 flex flex-col items-center z-50"
      onClick={closeModal}
    >
      <div className="py-8 px-[28px] w-[92%] max-w-[377px] h-[488px] bg-white rounded-lg flex flex-col gap-8 opacity-100 mt-6">
        <div className="flex items-center justify-between">
          <span>Cart</span>
          <button>remove all</button>
        </div>
        <button className="w-full bg-primary font-bold text-xs text-center tracking-tightest uppercase text-white py-[15px] self-end justify-end">
          Checkout
        </button>
      </div>
    </motion.div>
  );
}

export default CartModal;
