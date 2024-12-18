import Image from "next/image";
import { Form } from "./Form";

export const Step3=({setCurrentStep,setStep})=> {
  return (
    <div>
      <div className="bg-gray-300 w-screen h-screen flex justify-center items-center">
        <div className="bg-white w-[480px] h-[655px] ">
          <img src="main.png " alt="" />
          <p>Join Us!😎</p>
          <p>Please provide all current information accurately.</p>
         <div>
          <input type="date"/>
         </div>
         <div>
          <input type="file" id="img" name="img" accept="image/*"/>
         </div>
          <button onClick={(setCurrentStep)} className="border-[2px] border-rose-500">
            contiune 3/3 --
          </button>
          <button onClick={setStep}>back</button>
          
        </div>
      </div>
    </div>
  );
}
