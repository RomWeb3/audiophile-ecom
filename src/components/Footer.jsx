import React from "react";

function Footer() {
  return (
    <div className="bg-secondary px-6 pt-[52px] pb-[38px] flex flex-col justify-center items-center gap-12 relative">
      <div className="w-[101px] h-1 bg-primary absolute top-0"></div>
      <img src="/assets/shared/desktop/logo.svg" alt="logo" />
      <ul className="flex flex-col justify-center gap-4">
        <li className="text-xs font-bold text-white tracking-wider uppercase text-center cursor-pointer">
          Home
        </li>
        <li className="text-xs font-bold text-white tracking-wider uppercase text-center cursor-pointer">
          Headphones
        </li>
        <li className="text-xs font-bold text-white tracking-wider uppercase text-center cursor-pointer">
          Speakers
        </li>
        <li className="text-xs font-bold text-white tracking-wider uppercase text-center cursor-pointer">
          Earphones
        </li>
      </ul>
      <p className="text-base font-medium text-center text-white opacity-50">
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we're open 7 days a week.
      </p>
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
  );
}

export default Footer;
