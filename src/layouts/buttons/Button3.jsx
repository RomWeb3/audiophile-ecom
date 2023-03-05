import React from "react";

function Button3() {
  return (
    <button className="flex items-center gap-[13px] text-xs font-bold text-gray hover:text-primary tracking-tightest uppercase transition-all leading-4">
      Shop
      <img
        src="/assets/shared/desktop/icon-arrow-right.svg"
        alt="icon arrow right"
        className="w-[6px] h-[10px]"
      />
    </button>
  );
}

export default Button3;
