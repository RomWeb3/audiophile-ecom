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

  const totalQuantity = cart.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  return (
    <>
      <div className="w-full flex justify-between items-center py-[32px] px-6 bg-secondary border-b-[1px] border-separator">
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
        <div className="relative">
          <img
            src="/assets/shared/desktop/icon-cart.svg"
            alt="icon-cart"
            onClick={() => switchModals("cart")}
          />
          {cart.length > 0 && (
            <div className="absolute top-[-8px] right-[-8px] w-[16px] h-[16px] bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">
              {totalQuantity}
            </div>
          )}
        </div>
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
