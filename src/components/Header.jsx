import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import CartModal from "../layouts/Modals/CartModal";
import MenuModal from "../layouts/Modals/MenuModal";

function Header({ cart, setCart }) {
  const [showMenu, setShowMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();

  const switchModals = (modal) => {
    if (modal === "menu") {
      if (showCart) {
        setShowCart(false);
        setShowMenu(true);
      } else {
        setShowMenu(!showMenu);
      }
    } else if (modal === "cart") {
      if (showMenu) {
        setShowMenu(false);
        setShowCart(true);
      } else {
        setShowCart(!showCart);
      }
    }
  };

  return (
    <>
      <div className="flex justify-between items-center py-[32px] px-6 bg-secondary border-b-[1px] border-separator">
        <img
          src="/assets/shared/tablet/icon-hamburger.svg"
          alt="icon-menu"
          onClick={() => switchModals("menu")}
        />
        <img
          src="/assets/shared/desktop/logo.svg"
          alt="logo"
          onClick={() => navigate("/")}
        />
        <img
          src="/assets/shared/desktop/icon-cart.svg"
          alt="icon-cart"
          onClick={() => switchModals("cart")}
        />
      </div>
      <AnimatePresence>
        {showCart && (
          <CartModal setShowCart={setShowCart} cart={cart} setCart={setCart} />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showMenu && <MenuModal setShowMenu={setShowMenu} />}
      </AnimatePresence>
    </>
  );
}

export default Header;
