function InputRadio({ method, checked, onChange }) {
  return (
    <div
      className={`w-full h-[56px] border border-[#CFCFCF] rounded-lg px-4 flex items-center gap-4
                 focus:border-primary focus:outline-none md:w-[48.9%]`}
      style={{ borderColor: checked ? "#D87D4A" : "#CFCFCF" }}
    >
      <input
        type="radio"
        name="payment"
        checked={checked}
        onChange={onChange}
        className={`h-[20px] w-[20px] border-[#CFCFCF] border-[1px] rounded-full appearance-none absolute cursor-pointer 
         checked:absolute checked:after:w-[10px] checked:after:h-[10px] checked:after:rounded-full
         checked:after:bg-primary checked:after:content-[''] checked:after:absolute checked:after:inset-0 checked:after:m-auto`}
      />
      <span className="font-bold text-sm tracking-[-0.25px] ml-10">
        {method}
      </span>
    </div>
  );
}

export default InputRadio;
