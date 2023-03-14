import { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Counter from "../Form Elements/Counter";

function CartModal({ setShowCart, cart, setCart }) {
  const navigate = useNavigate();
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

  const changeQuantity = (id, value) => {
    const newCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: value };
      }
      return item;
    });
    setCart(newCart);
  };

  const totalPrice = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-[calc(100%-90px)] absolute bg-black/40 flex flex-col items-center z-50 mt-[90px]"
      onClick={closeModal}
    >
      <div className="w-full flex flex-col items-end max-w-[1190px]">
        <div
          className={`py-8 px-[28px] w-[87%] max-w-[377px] h-[488px] bg-white rounded-lg 
                    flex flex-col justify-between gap-8 opacity-100 mt-6 mr-6 md:mr-10`}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between">
              <span className="font-bold text-lg tracking-tighter uppercase">
                Cart ({cart.length})
              </span>
              <button
                className="font-medium text-base underline opacity-50 hover:text-primary transition-all hover:opacity-100"
                onClick={() => setCart([])}
              >
                Remove all
              </button>
            </div>
            {cart.length > 0 ? (
              <div className="overflow-auto mt-[7px]">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="mt-6 flex flex-col max-h-[240px]"
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-4">
                        <img
                          src={`/assets/cart/image${item.image.mobile
                            .replace("/assets/product", "")
                            .replace("/mobile/image-product.jpg", "")}.jpg`}
                          alt="mark two headphones"
                          className="w-[64px] h-[64px] object-cover rounded-lg"
                        />
                        <div className="flex flex-col">
                          <span className="font-bold text-base uppercase vsm:max-w-[50px]">
                            {item.name
                              .replace("Headphones", "")
                              .replace("Speaker", "")
                              .replace("Earphones", "")
                              .replace("Wireless", "")
                              .replace("Mark", "MK")}
                          </span>
                          <span className="font-medium text-base opacity-50 uppercase">
                            {item.price.toLocaleString("en-US", {
                              style: "currency",
                              currency: "USD",
                            })}
                          </span>
                        </div>
                      </div>
                      <Counter
                        count={item.quantity}
                        setCount={(value) => changeQuantity(item.id, value)}
                        addCSS="w-[96px] h-8"
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full">
                <p className="font-medium">There are no items in your bag.</p>
              </div>
            )}
            <div className="mt-auto">
              <div className="flex items-center justify-between mt-[31px] mb-6">
                <span className="font-medium text-base opacity-50 uppercase">
                  Total
                </span>
                <span className="font-bold text-lg uppercase">
                  {totalPrice.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </span>
              </div>
              <button
                className={`w-full h-12 bg-primary font-bold text-xs text-center tracking-tightest uppercase
                           text-white hover:bg-[#FBAF85] transition-all`}
                onClick={() => {
                  cart.length > 0 && navigate("/checkout");
                }}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default CartModal;
