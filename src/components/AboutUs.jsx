function AboutUs() {
  return (
    <div
      className={`w-full max-w-[1110px] px-6 flex flex-col xl:flex-row-reverse items-center
                  xl:justify-between xl:items-center`}
    >
      <div
        className={`w-full max-w-[689px] xl:max-w-[550px] h-[300px] xl:h-[588px] rounded-lg mb-10 bg-cover bg-center bg-no-repeat] 
                    bg-[url('/assets/shared/mobile/image-best-gear.jpg')] 
                    ssm:bg-[url('/assets/shared/tablet/image-best-gear.jpg')]
                    xl:bg-[url('/assets/shared/desktop/image-best-gear.jpg')]`}
      ></div>
      <div className="flex flex-col">
        <h3
          className={`max-w-[573px] text-3xl font-bold text-black tracking-tightest text-center uppercase mb-8
                      xl:max-w-[400px] xl:text-6xl xl:text-left xl:tracking-normal`}
        >
          Bringing you the <span className="text-primary">best</span> audio gear
        </h3>
        <p className="max-w-[573px] font-medium text-base text-center  text-black opacity-50 xl:max-w-[445px] xl:text-left">
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
