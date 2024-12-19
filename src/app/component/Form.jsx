export function Form(setCurrentStep, backStep, onchange, form) {
  return (
    <div>
      <input 
       onChange={onchange}
        className="border-[2px] border-blue-400 w-[416px] h-[44px] rounded-md mt-[8px]"
        type="text"
        placeholder="place holder"
      ></input>
    </div>
  );
}
