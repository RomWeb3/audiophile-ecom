import { useNavigate } from "react-router-dom";
import Button3 from "../layouts/buttons/Button3";

function Categories({ paddingTop }) {
  const navigate = useNavigate();

  const divStyle =
    " group w-full h-[165px] bg-lightgray rounded-lg flex flex-col items-center relative lg:h-[204px] cursor-pointer";
  const h3Style =
    "pt-[88px] font-bold text-base text-center tracking-tightest uppercase text-black leading-5 mb-4 lg:pt-[116px] lg:text-lg";

  return (
    <div
      className={`w-full max-w-[1190px] pt-[92px] px-6 flex flex-col gap-[68px] 
                 md:flex-row md:gap-[10px] md:${paddingTop} md:px-10 lg:gap-[30px] lg:pt-[180px]`}
    >
      <div className={divStyle} onClick={() => navigate("/headphones")}>
        <img
          src="/assets/shared/tablet/image-xx99-mark-one-headphones-bg.png"
          alt="category headphones"
          className="w-[120px] top-[-84px] left-0 right-0 m-auto absolute lg:w-[190px] lg:top-[-138px]"
        />
        <h3 className={h3Style}>Headphones</h3>
        <Button3 />
      </div>
      <div className={divStyle} onClick={() => navigate("/speakers")}>
        <img
          src="/assets/shared/tablet/image-zx9-speaker-bg.png"
          alt="category speakers"
          className="absolute w-[128px] top-[-88px] lg:w-[190px] lg:top-[-132px]"
        />
        <h3 className={h3Style}>Speakers</h3>
        <Button3 />
      </div>
      <div className={divStyle} onClick={() => navigate("/earphones")}>
        <img
          src="/assets/shared/desktop/image-category-thumbnail-earphones.png"
          alt="category earphones"
          className="absolute w-[175px] top-[-44px] lg:w-[210px] lg:top-[-60px]"
        />
        <h3 className={h3Style}>Earphones</h3>
        <Button3 />
      </div>
    </div>
  );
}

export default Categories;
