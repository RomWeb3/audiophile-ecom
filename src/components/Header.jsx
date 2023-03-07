import { AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import CartModal from "./CartModal";

function Header({ onMenu, onCart, showCart, setShowCart }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-between items-center py-[32px] px-6 bg-secondary border-b-[1px] border-separator">
        <img
          src="/assets/shared/tablet/icon-hamburger.svg"
          alt="icon-menu"
          onClick={onMenu}
        />
        <img
          src="/assets/shared/desktop/logo.svg"
          alt="logo"
          onClick={() => navigate("/")}
        />
        <img
          src="/assets/shared/desktop/icon-cart.svg"
          alt="icon-cart"
          onClick={onCart}
        />
      </div>
      <AnimatePresence>
        {showCart && <CartModal setShowCart={setShowCart} />}
      </AnimatePresence>
    </>
  );
}

export default Header;
