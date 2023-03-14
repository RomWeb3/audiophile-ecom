import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import FormInput from "../layouts/Form Elements/FormInput";
import InputRadio from "../layouts/Form Elements/InputRadio";
import Footer from "../components/Footer";
import CheckoutModal from "../layouts/Modals/CheckoutModal";

function Checkout({ cart, setCart }) {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("cash");
  const [purchased, setPurchased] = useState(false);
  const [btnClicked, setBtnClicked] = useState(false);
  const [error, setError] = useState(false);
  const [errMail, setErrMail] = useState(false);
  const [errPhone, setErrPhone] = useState(false);
  const [errAddress, setErrAddress] = useState(false);
  const [errZip, setErrZip] = useState(false);
  const [errCity, setErrCity] = useState(false);
  const [errCountry, setErrCountry] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [zip, setZip] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const totalPrice = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const validateInput = (input, regex) => regex.test(input);

  const regex = {
    fullName: /^[a-zA-Z]{2,30}\s[a-zA-Z]{2,30}$/,
    email: /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/,
    phone: /^(?:[0-9] ?){6,14}[0-9]$/,
    address: /^[a-zA-Z0-9\s-\#.]+$/,
    zip: /^[0-9]{5}(?:-[0-9]{4})?$/,
    city: /^[a-zA-Z\s]+$/,
  };

  const handlePurchase = () => {
    setBtnClicked(true);
    if (
      validateInput(fullName, regex.fullName) &&
      validateInput(email, regex.email) &&
      validateInput(phone, regex.phone) &&
      validateInput(address, regex.address) &&
      validateInput(zip, regex.zip) &&
      validateInput(city, regex.city) &&
      validateInput(country, regex.city)
    ) {
      window.scrollTo(0, 0);
      setPurchased(true);
    }
    return;
  };

  useEffect(() => {
    validateInput(fullName, regex.fullName) ? setError(false) : setError(true);
  }, [fullName]);

  useEffect(() => {
    validateInput(email, regex.email) ? setErrMail(false) : setErrMail(true);
  }, [email]);

  useEffect(() => {
    validateInput(phone, regex.phone) ? setErrPhone(false) : setErrPhone(true);
  }, [phone]);

  useEffect(() => {
    validateInput(address, regex.address)
      ? setErrAddress(false)
      : setErrAddress(true);
  }, [address]);

  useEffect(() => {
    validateInput(zip, regex.zip) ? setErrZip(false) : setErrZip(true);
  }, [zip]);

  useEffect(() => {
    validateInput(city, regex.city) ? setErrCity(false) : setErrCity(true);
  }, [city]);

  useEffect(() => {
    validateInput(country, regex.city)
      ? setErrCountry(false)
      : setErrCountry(true);
  }, [country]);

  return (
    <div className="relative">
      {purchased && <CheckoutModal cart={cart} setCart={setCart} />}
      <Header cart={cart} setCart={setCart} />
      <div className="w-full h-full flex flex-col items-center pt-6 px-6 bg-verylightgray lg:px-10">
        <div className="w-full max-w-[1110px]">
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

          <div className="w-full flex flex-col gap-[30px] xl:flex-row mb-[97px] md:mb-[116px] xl:mb-[141px]">
            <div className="w-full bg-white rounded-lg p-6 md:py-[30px] md:px-[27.5px] lg:p-12">
              <h2 className="font-bold text-3xl tracking-tightest uppercase text-black mb-8 md:text-4xl md:mb-[41px]">
                Checkout
              </h2>
              <h3 className="text-primary font-bold text-xs tracking-tightest uppercase mb-4 ">
                Billing details
              </h3>
              <div className="w-full flex flex-col md:flex-row md:gap-4">
                <FormInput
                  label="Name"
                  type="text"
                  id="name"
                  btnClicked={btnClicked}
                  error={error}
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
                <FormInput
                  label="Email Adrress"
                  type="email"
                  id="email"
                  btnClicked={btnClicked}
                  error={errMail}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="w-full flex flex-col md:flex-row md:gap-4">
                <FormInput
                  label="Phone Number"
                  type="text"
                  id="phone"
                  btnClicked={btnClicked}
                  error={errPhone}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <FormInput label="" type="text" id="" opacity="opacity-0" />
              </div>

              <h3 className="text-primary font-bold text-xs tracking-tightest uppercase mb-4">
                shipping info
              </h3>
              <FormInput
                label="Your Adrress"
                type="text"
                id="address"
                btnClicked={btnClicked}
                error={errAddress}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <div className="w-full flex flex-col md:flex-row md:gap-4">
                <FormInput
                  label="ZIP Code"
                  type="text"
                  id="zip"
                  btnClicked={btnClicked}
                  error={errZip}
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                />
                <FormInput
                  label="City"
                  type="text"
                  id="city"
                  btnClicked={btnClicked}
                  error={errCity}
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className="w-full flex flex-col md:flex-row md:gap-4">
                <FormInput
                  label="Country"
                  type="text"
                  id="country"
                  btnClicked={btnClicked}
                  error={errCountry}
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
                <FormInput label="" type="text" id="" opacity="opacity-0" />
              </div>
              <h3 className="text-primary font-bold text-xs tracking-tightest uppercase mb-4">
                payment details
              </h3>
              <p className="font-bold text-[12px] leading-4 tracking-[-0.21px] mb-4">
                Payment Method
              </p>
              <div className="flex flex-col gap-4 ">
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
                <div className="w-full flex flex-col mt-8 md:flex-row md:gap-4">
                  <FormInput
                    label="e-Money Number"
                    type="text"
                    id="e-money-number"
                  />
                  <FormInput label="e-Money PIN" type="text" id="e-money-pin" />
                </div>
              )}
            </div>

            <div className="w-full h-full bg-white rounded-lg px-6 py-8 md:py-[30px] md:px-[27.5px] xl:max-w-[350px] xl:px-8">
              <h2 className="font-bold text-lg tracking-tight uppercase text-black mb-[7px]">
                Summary
              </h2>
              <div className="overflow-auto">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="mt-6 flex flex-col max-h-[240px]"
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-4">
                        <img
                          src={`/assets/cart/image${item.image.mobile
                            .replace("/assets/product", "")
                            .replace("/mobile/image-product.jpg", "")}.jpg`}
                          alt="product"
                          className="w-[64px] h-[64px] object-cover rounded-lg"
                        />
                        <div className="flex flex-col">
                          <span className="font-bold text-base uppercase">
                            {item.name
                              .replace("Headphones", "")
                              .replace("Speaker", "")
                              .replace("Earphones", "")
                              .replace("Wireless", "")
                              .replace("Mark", "MK")}
                          </span>
                          <span className="font-medium text-base opacity-50 uppercase">
                            {item.price.toLocaleString("en-US", {
                              style: "currency",
                              currency: "USD",
                            })}
                          </span>
                        </div>
                      </div>
                      <span className="font-bold text-base opacity-50">
                        x{item.quantity}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between mt-[31px] mb-2">
                <span className="font-medium text-base opacity-50 uppercase">
                  Total
                </span>
                <span className="font-bold text-lg uppercase">
                  {totalPrice.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </span>
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
                <span className="font-bold text-lg uppercase">
                  {(totalPrice * 0.2).toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-base opacity-50 uppercase">
                  Grand Total
                </span>
                <span className="font-bold text-lg uppercase text-primary">
                  {(totalPrice + 50).toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </span>
              </div>
              <button
                className={`w-full h-12 bg-primary font-bold text-xs text-center tracking-tightest 
                          uppercase text-white mt-8 hover:bg-[#FBAF85] transition-all`}
                onClick={() => handlePurchase()}
              >
                Continue & Pay
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Checkout;
