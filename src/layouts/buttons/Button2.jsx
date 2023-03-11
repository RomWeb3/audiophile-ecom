import React from "react";

function Button2({ bgColor, textColor, onClick }) {
  return (
    <button
      className={`w-40 h-12 ${bgColor}  ${textColor}  uppercase text-xs font-bold tracking-tightest
                  border-[1px] border-black border-solid transition-all hover:text-white
                  ${
                    bgColor === "bg-transparent"
                      ? "hover:bg-black"
                      : "hover:bg-[#4C4C4C] hover:border-[#4C4C4C]"
                  } `}
      onClick={onClick}
    >
      See Product
    </button>
  );
}

export default Button2;
