function Counter({ count, setCount, addCSS }) {
  return (
    <div
      className={`w-[120px] h-12 bg-verylightgray px-4 flex items-center justify-between ${addCSS}`}
    >
      <svg
        width="5"
        height="2"
        viewBox="0 0 5 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="cursor-pointer"
        onClick={() => {
          count > 0 && setCount(count - 1);
        }}
      >
        <path
          opacity="0.25"
          d="M0.550508 1.516V0.2875H4.45051V1.516H0.550508Z"
          fill="black"
        />
      </svg>
      <p className="font-bold text-xs text-center tracking-tightest text-black">
        {count}
      </p>
      <svg
        width="7"
        height="7"
        viewBox="0 0 7 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="cursor-pointer"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        <path
          opacity="0.25"
          d="M2.89362 6.258V3.931H0.566621V2.7025H2.89362V0.382H4.12212V2.7025H6.43612V3.931H4.12212V6.258H2.89362Z"
          fill="black"
        />
      </svg>
    </div>
  );
}

export default Counter;
