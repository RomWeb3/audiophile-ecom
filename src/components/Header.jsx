import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import CartModal from "../layouts/Modals/CartModal";
import MenuModal from "../layouts/Modals/MenuModal";

function Header({ cart, setCart }) {
  const [showMenu, setShowMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  const listStyle =
    "text-xs font-bold text-white tracking-wider uppercase text-center cursor-pointer hover:text-primary transition-all";

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
      <div className="w-full bg-secondary flex justify-center">
        <div
          className={`w-full max-w-[1110px] flex justify-between items-center py-[32px] px-6 
                      border-b-[1px] border-primary md:px-10 llg:px-0`}
        >
          {screenWidth < 1024 ? (
            <>
              {screenWidth < 768 ? (
                <>
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
                </>
              ) : (
                <div className="flex items-center gap-[42px]">
                  <img
                    src="/assets/shared/tablet/icon-hamburger.svg"
                    alt="icon-menu"
                    onClick={() => switchModals("menu")}
                    className="cursor-pointer"
                  />
                  <img
                    src="/assets/shared/desktop/logo.svg"
                    alt="logo"
                    onClick={() => navigate("/")}
                    className="cursor-pointer"
                  />
                </div>
              )}
            </>
          ) : (
            <>
              <img
                src="/assets/shared/desktop/logo.svg"
                alt="logo"
                onClick={() => navigate("/")}
                className="cursor-pointer llg:pl-10 sxl:pl-0"
              />
              <ul className="flex justify-center flex-row gap-[34px] ml-[-10%]">
                <li className={listStyle} onClick={() => navigate("/")}>
                  Home
                </li>
                <li
                  className={listStyle}
                  onClick={() => navigate("/headphones")}
                >
                  Headphones
                </li>
                <li className={listStyle} onClick={() => navigate("/speakers")}>
                  Speakers
                </li>
                <li
                  className={listStyle}
                  onClick={() => navigate("/earphones")}
                >
                  Earphones
                </li>
              </ul>
            </>
          )}
          <div className="relative">
            <img
              src="/assets/shared/desktop/icon-cart.svg"
              alt="icon-cart"
              onClick={() => switchModals("cart")}
              className="cursor-pointer llg:pr-10 sxl:pr-0"
            />
            {cart.length > 0 && (
              <div
                className={`absolute top-[-8px] right-[-8px] w-[16px] h-[16px] bg-primary rounded-full 
                            flex items-center justify-center text-white text-xs font-bold llg:right-[32px] sxl:right-[-8px]`}
              >
                {totalQuantity}
              </div>
            )}
          </div>
        </div>
        <AnimatePresence>
          {showCart && (
            <CartModal
              setShowCart={setShowCart}
              cart={cart}
              setCart={setCart}
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {showMenu && <MenuModal setShowMenu={setShowMenu} />}
        </AnimatePresence>
      </div>
      {/* <div className="w-full max-w-[1190px] h-[1px] md:px-10 bg-white/100"></div> */}
    </>
  );
}

export default Header;
