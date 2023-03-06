import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button1 from "../layouts/buttons/Button1";
import Button2 from "../layouts/buttons/Button2";
import Button3 from "../layouts/buttons/Button3";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div
        className="w-full h-[510px] px-6 flex flex-col justify-center items-center mb-10"
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
      <Categories />
      <div className="w-full px-6 mb-6 pt-[120px]">
        <div
          className="w-full h-[600px] bg-primary flex flex-col items-center px-6 rounded-lg relative"
          style={{
            backgroundImage: "url('/assets/home/desktop/pattern-circles.svg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "171%",
            backgroundPosition: "center -120px",
          }}
        >
          <img
            src="/assets/home/mobile/image-speaker-zx9.png"
            alt="ZX9 Speaker"
            className="w-[172px] absolute top-[55px]"
          />
          <h3 className="font-bold text-5xl text-center tracking-tight uppercase text-white mt-[294px] mb-6">
            <span>ZX9</span>
            <br />
            <span>Speaker</span>
          </h3>
          <p className="text-white opacity-75 text-center font-medium text-base mb-6">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Button2 bgColor={"bg-black"} textColor={"text-white"} />
        </div>
      </div>
      <div className="w-full px-6 mb-6">
        <div
          className="w-full h-[320px] rounded-lg flex flex-col justify-center gap-8 px-6"
          style={{
            backgroundImage: "url('/assets/home/mobile/image-speaker-zx7.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          <h3 className="font-bold text-3xl tracking-wider uppercase text-black">
            ZX7 Speaker
          </h3>
          <Button2 bgColor={"bg-transparent"} textColor={"text-black"} />
        </div>
      </div>
      <div className="w-full px-6 mb-6">
        <div
          className="w-full h-[200px] rounded-lg flex flex-col justify-center gap-8 px-6"
          style={{
            backgroundImage:
              "url('/assets/home/mobile/image-earphones-yx1.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        ></div>
      </div>
      <div className="w-full px-6 mb-[120px]">
        <div className="w-full h-[200px] bg-lightgray rounded-lg flex flex-col justify-center gap-8 px-6">
          <h3 className="font-bold text-3xl tracking-wider uppercase text-black">
            YX1 Earphones
          </h3>
          <Button2 bgColor={"bg-transparent"} textColor={"text-black"} />
        </div>
      </div>
      <div className="mb-[120px]">
        <AboutUs />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
