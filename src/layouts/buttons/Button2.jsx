import React from "react";

function Button2({ bgColor, textColor }) {
  return (
    <button
      className={`w-40 h-12 ${bgColor} hover:bg-black ${textColor} hover:text-white uppercase text-xs font-bold tracking-tightest border-[1px] border-black border-solid transition-all`}
    >
      See Product
    </button>
  );
}

export default Button2;
