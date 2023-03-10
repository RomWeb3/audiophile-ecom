import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  const listStyle =
    "text-xs font-bold text-white tracking-wider uppercase text-center cursor-pointer";

  return (
    <div
      className={`w-full bg-secondary px-6 pt-[52px] pb-[38px] flex flex-col justify-center items-center gap-12 relative
                  sm:px-10 sm:py-[46px] sm:items-start lg:px-[165px] lg:py-[48px]`}
    >
      <div className="w-[101px] h-1 bg-primary absolute top-0"></div>
      <img
        src="/assets/shared/desktop/logo.svg"
        alt="logo"
        className="sm:mt-[14px]"
      />
      <ul className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-[34px]">
        <li className={listStyle} onClick={() => navigate("/")}>
          Home
        </li>
        <li className={listStyle} onClick={() => navigate("/headphones")}>
          Headphones
        </li>
        <li className={listStyle} onClick={() => navigate("/speakers")}>
          Speakers
        </li>
        <li className={listStyle} onClick={() => navigate("/earphones")}>
          Earphones
        </li>
      </ul>
      <p className="max-w-[900px] text-base font-medium text-center text-white opacity-50 sm:text-left lg:max-w-[540px]">
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we're open 7 days a week.
      </p>
      <div className="w-full flex flex-col items-center gap-12 sm:flex-row sm:justify-between">
        <p className="text-base font-medium text-center text-white opacity-50">
          Copyright 2023. All Rights Reserved
        </p>
        <ul className="flex items-center gap-4">
          <a href="#">
            <li>
              <img
                src="/assets/shared/desktop/icon-facebook.svg"
                alt="icon facebook"
                className="cursor-pointer"
              />
            </li>
          </a>
          <a href="#">
            <li>
              <img
                src="/assets/shared/desktop/icon-twitter.svg"
                alt="icon twitter"
                className="cursor-pointer"
              />
            </li>
          </a>
          <a href="#">
            <li>
              <img
                src="/assets/shared/desktop/icon-instagram.svg"
                alt="icon instagram"
                className="cursor-pointer"
              />
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
