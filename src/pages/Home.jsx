import React from "react";
import Header from "../components/Header";
import Button1 from "../layouts/buttons/Button1";
import Button2 from "../layouts/buttons/Button2";
import Button3 from "../layouts/buttons/Button3";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Header />
      <div
        className="w-full h-[510px] px-6 flex flex-col justify-center items-center bg-red-600"
        style={{
          backgroundImage: "url('/assets/home/mobile/image-header.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center 100%",
        }}
      >
        <p className="text-sm text-white opacity-50 tracking-widest uppercase text-center mb-4">
          New Product
        </p>
        <h1 className="text-5xl font-bold text-white tracking-tight uppercase text-center mb-6">
          XX99 Mark II Headphones
        </h1>
        <h2 className="text-base font-medium text-white opacity-75 text-center mb-7">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </h2>
        <Button1 />
      </div>
      <div className="w-full bg-white px-6 pt-10 pb-[120px] flex flex-col gap-[68px]">
        <div className="w-full h-[165px] bg-lightgray rounded-lg flex flex-col items-center relative">
          <img
            src="/assets/shared/mobile/image-xx99-mark-one-headphones.jpg"
            alt="category headphones"
            className="absolute top-[-52px] left-0"
          />
          <h3 className="pt-[88px] font-bold text-base text-center tracking-tightest uppercase text-black leading-5 mb-4">
            Headphones
          </h3>
          <Button3 />
        </div>
        <div className="w-full h-[165px] bg-lightgray rounded-lg flex flex-col items-center relative">
          <img
            src="/assets/shared/mobile/image-zx9-speaker.jpg"
            alt="category headphones"
            className="absolute"
          />
          <h3 className="pt-[88px] font-bold text-base text-center tracking-tightest uppercase text-black leading-5 mb-4">
            Speakers
          </h3>
          <Button3 />
        </div>
        <div className="w-full h-[165px] bg-lightgray rounded-lg flex flex-col items-center relative">
          <img
            src="/assets/shared/desktop/image-category-thumbnail-earphones.png"
            alt="category headphones"
            className="absolute top-0"
          />
          <h3 className="pt-[88px] font-bold text-base text-center tracking-tightest uppercase text-black leading-5 mb-4">
            Earphones
          </h3>
          <Button3 />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
