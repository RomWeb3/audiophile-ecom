function AboutUs() {
  return (
    <div
      className={`w-full max-w-[1190px] px-6 md:px-10 flex flex-col lg:flex-row-reverse items-center
                  lg:justify-between lg:items-center lg:gap-[100px]`}
    >
      <div
        className={`w-full max-w-[689px] lg:max-w-[550px] h-[300px] lg:h-[588px] rounded-lg mb-10 bg-cover bg-center bg-no-repeat] 
                    bg-[url('/assets/shared/mobile/image-best-gear.jpg')] 
                    ssm:bg-[url('/assets/shared/tablet/image-best-gear.jpg')]
                    lg:bg-[url('/assets/shared/desktop/image-best-gear.jpg')] lg:mb-0`}
      ></div>
      <div className="flex flex-col">
        <h3
          className={`max-w-[573px] text-3xl font-bold text-black tracking-tightest text-center uppercase mb-8
                      lg:max-w-[400px] lg:text-6lg lg:text-left lg:tracking-normal`}
        >
          Bringing you the <span className="text-primary">best</span> audio gear
        </h3>
        <p className="max-w-[573px] font-medium text-base text-center  text-black opacity-50 lg:max-w-[445px] lg:text-left">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
