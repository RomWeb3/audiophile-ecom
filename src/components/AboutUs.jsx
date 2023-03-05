import React from "react";

function AboutUs() {
  return (
    <div className="w-full px-6">
      <div className="w-full h-[300px] rounded-lg mb-10">
        <img
          src="/assets/shared/mobile/image-best-gear.jpg"
          alt="image best gear"
          className="rounded-lg"
        />
      </div>
      <h3 className="text-3xl font-bold text-black tracking-tightest text-center uppercase mb-8">
        Bringing you the <span className="text-primary">best</span> audio gear
      </h3>
      <p className="font-medium text-base text-center text-black opacity-50">
        Located at the heart of New York City, Audiophile is the premier store
        for high end headphones, earphones, speakers, and audio accessories. We
        have a large showroom and luxury demonstration rooms available for you
        to browse and experience a wide range of our products. Stop by our store
        to meet some of the fantastic people who make Audiophile the best place
        to buy your portable audio equipment.
      </p>
    </div>
  );
}

export default AboutUs;
