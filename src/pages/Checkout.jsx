import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import FormInput from "../layouts/Form Elements/FormInput";
import InputRadio from "../layouts/Form Elements/InputRadio";
import Footer from "../components/Footer";

function Checkout() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div className="relative">
      <Header />
      <div className="w-full h-full pt-6 px-6 bg-verylightgray">
        <p
          className="flex items-center gap-2 font-medium text-base text-black opacity-50 pt-4 pb-6"
          onClick={() => navigate(-1)}
        >
          <img
            src="/assets/shared/desktop/icon-arrow-right.svg"
            alt="icon arrow"
            style={{ transform: "rotate(180deg)" }}
          />
          Go Back
        </p>

        <div className="w-full bg-white rounded-lg p-6">
          <h2 className="font-bold text-3xl tracking-tightest uppercase text-black mb-8">
            Checkout
          </h2>
          <h3 className="text-primary font-bold text-xs tracking-tightest uppercase mb-4">
            Billing details
          </h3>
          <FormInput label="Name" type="text" />
          <FormInput label="Email Adrress" type="email" />
          <FormInput label="Phone Number" type="text" />

          <h3 className="text-primary font-bold text-xs tracking-tightest uppercase mb-4">
            shipping info
          </h3>
          <FormInput label="Your Adrress" type="text" />
          <FormInput label="ZIP Code" type="text" />
          <FormInput label="City" type="text" />
          <FormInput label="Country" type="text" />
          <h3 className="text-primary font-bold text-xs tracking-tightest uppercase mb-4">
            payment details
          </h3>
          <p className="font-bold text-[12px] leading-4 tracking-[-0.21px] mb-4">
            Payment Method
          </p>
          <div className="flex flex-col gap-4 mb-8">
            <InputRadio
              method="e-Money"
              checked={selectedOption === "eMoney"}
              onChange={() => setSelectedOption("eMoney")}
            />
            <InputRadio
              method="Cash on Delivery"
              checked={selectedOption === "cash"}
              onChange={() => setSelectedOption("cash")}
            />
          </div>
          {selectedOption === "eMoney" && (
            <>
              <FormInput label="e-Money Number" type="number" />
              <FormInput label="e-Money PIN" type="number" />
            </>
          )}
        </div>

        <div className="w-full bg-white rounded-lg px-6 py-8 mt-8">
          <h2 className="font-bold text-lg tracking-tight uppercase text-black mb-8">
            Summary
          </h2>
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-4">
              <img
                src="/assets/cart/image-xx99-mark-two-headphones.jpg"
                alt="mark two headphones"
                className="w-[64px] h-[64px] object-cover rounded-lg"
              />
              <div className="flex flex-col">
                <span className="font-bold text-base uppercase">XX99 MKII</span>
                <span className="font-medium text-base opacity-50 uppercase">
                  $2,999
                </span>
              </div>
            </div>
            <span className="font-bold text-base opacity-50">x1</span>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span className="font-medium text-base opacity-50 uppercase">
              Total
            </span>
            <span className="font-bold text-lg uppercase">$5396</span>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span className="font-medium text-base opacity-50 uppercase">
              Shipping
            </span>
            <span className="font-bold text-lg uppercase">$50</span>
          </div>
          <div className="flex items-center justify-between mb-6">
            <span className="font-medium text-base opacity-50 uppercase">
              VAT (INCLUDED)
            </span>
            <span className="font-bold text-lg uppercase">$1079</span>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span className="font-medium text-base opacity-50 uppercase">
              Grand Total
            </span>
            <span className="font-bold text-lg uppercase text-primary">
              $5446
            </span>
          </div>
          <button className="w-full h-12 bg-primary font-bold text-xs text-center tracking-tightest uppercase text-white mt-8">
            Continue & Pay
          </button>
        </div>
        <div className="w-full h-[97px]"></div>
      </div>
      <Footer />
    </div>
  );
}

export default Checkout;
