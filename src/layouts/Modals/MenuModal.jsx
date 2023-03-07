import { useEffect } from "react";
import { motion } from "framer-motion";
import Categories from "../../components/Categories";

function MenuModal({ setShowMenu }) {
  const closeModal = (e) => {
    if (e.target === e.currentTarget) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    const close = (e) => {
      if (e.key === "Escape") {
        setShowMenu(false);
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
      <div className="w-full py-8 bg-white">
        <Categories />
      </div>
    </motion.div>
  );
}

export default MenuModal;
