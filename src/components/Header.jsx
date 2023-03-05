import React from "react";

function Header({ onMenu, onCart }) {
  return (
    <div className="flex justify-between items-center py-[32px] px-6 bg-secondary border-b-[1px] border-separator">
      <img
        src="/assets/shared/tablet/icon-hamburger.svg"
        alt="icon-menu"
        onClick={onMenu}
      />
      <img src="/assets/shared/desktop/logo.svg" alt="logo" />
      <img
        src="/assets/shared/desktop/icon-cart.svg"
        alt="icon-cart"
        onClick={onCart}
      />
    </div>
  );
}

export default Header;
