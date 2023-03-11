import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button1 from "../layouts/buttons/Button1";
import Button2 from "../layouts/buttons/Button2";
import Categories from "../components/Categories";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";

function Home({ cart, setCart }) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center relative">
      <Header cart={cart} setCart={setCart} />
      <div
        className={`w-full h-[510px] px-6 flex flex-col justify-center items-center mb-10 md:h-[639px]
                    bg-no-repeat bg-[length:375px_600px] bg-[center_-90px] bg-[#1A1A1A]
                    bg-[url('/assets/home/mobile/image-header.jpg')]
                    md:bg-[url('/assets/home/tablet/image-header.jpg')] md:bg-[length:770px_728px]`}
      >
        <p className="text-sm text-white opacity-50 tracking-widest uppercase text-center mb-4 md:mb-6">
          New Product
        </p>
        <h1 className="text-5xl font-bold text-white tracking-tight uppercase text-center mb-6 md:text-7xl">
          <span>XX99 Mark II </span>
          <br />
          <span>Headphones</span>
        </h1>
        <h2 className="max-w-[349px] text-base font-medium text-white opacity-75 text-center mb-7 md:mb-10">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </h2>
        <Button1 text="See Product" onClick={() => navigate("/product/4")} />
      </div>
      <Categories />
      <div className="w-full max-w-[1190px] px-6 mb-6 pt-[120px] md:px-10 md:mb-8 lg:mb-12 md:pt-[96px]">
        <div
          className={`w-full bg-primary flex flex-col items-center px-6 rounded-lg relative overflow-hidden
          bg-no-repeat bg-cover bg-[center_-125px] md:bg-auto md:bg-[center_-288px]
          bg-[url('/assets/home/desktop/pattern-circles.svg')] lg:flex-row lg:gap-[120px] lg:justify-center
          lg:bg-[length:944px_944px] lg:bg-[-150px_-50px]`}
        >
          <div
            className={`w-full h-[207px] flex justify-center bg-no-repeat bg-contain bg-[center_0px] z-50 
                        bg-[url('/assets/home/mobile/image-speaker-zx9.png')] mt-[55px]
                        md:bg-[url('/assets/home/tablet/image-speaker-zx9.png')] md:h-[237px]
                        lg:bg-[url('/assets/home/desktop/image-speaker-zx9.png')] 
                        lg:w-[410px] lg:h-[435px] lg:mt-[96px] lg:mb-[-10px]`}
          ></div>

          <div className="flex flex-col items-center pt-8 md:pt-16 lg:items-start">
            <h3 className="font-bold text-5xl text-center tracking-tight uppercase text-white md:text-7xl lg:text-left">
              <span>ZX9</span>
              <br />
              <span>Speaker</span>
            </h3>
            <p className="w-full max-w-[349px] text-white opacity-75 text-center font-medium text-base mt-6 lg:text-left">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <div className="mb-[55px] md:mb-16 mt-6 md:mt-10">
              <Button2
                bgColor={"bg-black"}
                textColor={"text-white"}
                onClick={() => navigate("/product/6")}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1190px] px-6 mb-6 md:px-10 md:mb-8 lg:mb-12">
        <div
          className={`w-full h-[320px] rounded-lg flex flex-col justify-center gap-8 px-6 md:px-[62px] lg:px-[95px]
                      bg-[right_0px_top_0px] bg-cover bg-no-repeat smd:bg-[right_50%_top_0px] md:bg-center
                      bg-[url('/assets/home/mobile/image-speaker-zx7.jpg')]
                      smd:bg-[url('/assets/home/tablet/image-speaker-zx7.jpg')]
                      lg:bg-[url('/assets/home/desktop/image-speaker-zx7.jpg')]`}
        >
          <h3 className="font-bold text-3xl tracking-wider uppercase text-black">
            ZX7 Speaker
          </h3>

          <Button2
            bgColor={"bg-transparent"}
            textColor={"text-black"}
            onClick={() => navigate("/product/5")}
          />
        </div>
      </div>
      <div className="w-full max-w-[1190px] flex flex-col gap-6 sm:flex-row sm:gap-3 px-6 md:px-10">
        <div className="w-full sm:mb-24">
          <div
            className={`w-full h-[200px] rounded-lg px-6 bg-center bg-cover bg-no-repeat
                        bg-[url('/assets/home/mobile/image-earphones-yx1.jpg')]
                        ssm:bg-[url('/assets/home/tablet/image-earphones-yx1.jpg')] sm:h-[320px]
                        lg:bg-[url('/assets/home/desktop/image-earphones-yx1.jpg')]`}
          ></div>
        </div>
        <div className="w-full mb-[120px] sm:mb-0">
          <div
            className={`w-full h-[200px] bg-lightgray rounded-lg flex flex-col justify-center gap-8 px-6 
                        sm:h-[320px] md:px-10 lg:px-24`}
          >
            <h3 className="font-bold text-3xl tracking-wider uppercase text-black">
              YX1 Earphones
            </h3>
            <Button2
              bgColor={"bg-transparent"}
              textColor={"text-black"}
              onClick={() => navigate("/product/1")}
            />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center mb-[120px]">
        <AboutUs />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
