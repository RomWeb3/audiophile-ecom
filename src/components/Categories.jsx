import { useNavigate } from "react-router-dom";
import Button3 from "../layouts/buttons/Button3";

function Categories() {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-[1190px] pt-[50px] px-6 flex flex-col gap-[68px] md:flex-row md:gap-[10px] md:pt-[96px] md:px-10">
      <div
        className="w-full h-[165px] bg-lightgray rounded-lg flex flex-col items-center relative"
        onClick={() => navigate("/headphones")}
      >
        <img
          src="/assets/shared/tablet/image-xx99-mark-one-headphones-bg.png"
          alt="category headphones"
          className="w-[120px] top-[-84px] left-0 right-0 m-auto absolute"
        />
        <h3 className="pt-[88px] font-bold text-base text-center tracking-tightest uppercase text-black leading-5 mb-4">
          Headphones
        </h3>
        <Button3 />
      </div>
      <div
        className="w-full h-[165px] bg-lightgray rounded-lg flex flex-col items-center relative"
        onClick={() => navigate("/speakers")}
      >
        <img
          src="/assets/shared/tablet/image-zx9-speaker-bg.png"
          alt="category speakers"
          className="absolute w-[128px] top-[-88px]"
        />
        <h3 className="pt-[88px] font-bold text-base text-center tracking-tightest uppercase text-black leading-5 mb-4">
          Speakers
        </h3>
        <Button3 />
      </div>
      <div
        className="w-full h-[165px] bg-lightgray rounded-lg flex flex-col items-center relative"
        onClick={() => navigate("/earphones")}
      >
        <img
          src="/assets/shared/desktop/image-category-thumbnail-earphones.png"
          alt="category earphones"
          className="absolute w-[175px] top-[-44px]"
        />
        <h3 className="pt-[88px] font-bold text-base text-center tracking-tightest uppercase text-black leading-5 mb-4">
          Earphones
        </h3>
        <Button3 />
      </div>
    </div>
  );
}

export default Categories;
