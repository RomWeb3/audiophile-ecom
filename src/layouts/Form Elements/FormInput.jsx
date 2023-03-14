function FormInput({
  label,
  type,
  id,
  btnClicked,
  value,
  onChange,
  error,
  opacity,
}) {
  return (
    <div className="w-full flex flex-col">
      <label
        htmlFor="Name"
        className="font-bold text-[12px] leading-4 tracking-[-0.21px] flex items-center justify-between"
      >
        {label}
        {error && btnClicked && (
          <span className="text-[#CD2C2C] font-medium text-[12px] tracking-[-0.2px]">
            Wrong format
          </span>
        )}
      </label>
      <input
        type={type}
        placeholder={`Insert your ${label.toLowerCase()}`}
        name="Name"
        id={id}
        value={value}
        onChange={onChange}
        className={`w-full h-[56px] border border-[#CFCFCF] rounded-lg px-6 mb-6 mt-[9px] ${opacity}
        text-sm tracking-[-0.25px] font-bold placeholder:font-bold placeholder:text-sm caret-primary
        placeholder:tracking-[-0.25px] placeholder:opacity-40 focus:border-primary focus:outline-none`}
        style={{ borderColor: error && btnClicked ? "#CD2C2C" : "#CFCFCF" }}
        required
      />
    </div>
  );
}

export default FormInput;
