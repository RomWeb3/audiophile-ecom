import React from "react";

function Button1({ text, onClick }) {
  return (
    <button
      className="w-40 h-12 bg-primary hover:bg-orangePale text-white uppercase text-xs font-bold tracking-tightest transition-all"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button1;
