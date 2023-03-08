function FormInput({ label, type }) {
  return (
    <>
      <label
        htmlFor="Name"
        className="font-bold text-[12px] leading-4 tracking-[-0.21px]"
      >
        {label}
      </label>
      <input
        type={type}
        placeholder={`Insert your ${label.toLowerCase()}`}
        name="Name"
        id="Name"
        className={`w-full h-[56px] border border-[#CFCFCF] rounded-lg px-6 mb-6 mt-[9px] 
        text-sm tracking-[-0.25px] font-bold placeholder:font-bold placeholder:text-sm caret-primary
        placeholder:tracking-[-0.25px] placeholder:opacity-40 focus:border-primary focus:outline-none`}
      />
    </>
  );
}

export default FormInput;
