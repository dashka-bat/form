import Image from "next/image";
import { Form } from "./Form";


export  const Step1=({setCurrentStep,setStep})=> {
  return (
    <div>
    <div className="bg-gray-300 w-screen h-screen flex justify-center items-center">
      <div className="bg-white w-[480px] h-[655px] ">
        <img src="main.png " alt="" />
        <p>Join Us!😎</p>
        <p>Please provide all current information accurately.</p>
        <div>
          first name
          <Form />
        </div>
        <div>
          last name
          <Form />
        </div>
        <div>
          user name
          <Form />
          
        </div>
        <button  onClick={setCurrentStep} className="border-[2px] border-rose-500">
          contiune 1/3 --
        </button>
        <button onClick={set}>back</button>
      </div>
    </div>
  </div>
  );
}
