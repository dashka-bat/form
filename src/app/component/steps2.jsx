import Image from "next/image";
import { Form } from "./Form";

export const Step2 = ({ setCurrentStep, backStep, onChange, form }) => {
  return (
    <div>
      <div className="bg-gray-300 w-screen h-screen flex justify-center items-center">
        <div className="bg-white w-[480px] h-[655px] ">
          <img
            className="mt-[32px] ml-[32px] w-[60px] h-[60px]"
            src="main.png "
            alt=""
          />
          <p className="ml-[32px] mt-[10px] text-[26px]">Join Us!😎</p>
          <p className="ml-[32px] mt-[10px] text-[18px]">
            Please provide all current information accurately.
          </p>
          <form>
            <div className="ml-[32px]">
              <label htmlFor="firstName"> Firstname *</label>
              <Form />
            </div>
            <div className="ml-[32px]">
              <label htmlFor="firstName"> Lastname *</label>
              <Form />
            </div>
            <div className="ml-[32px]">
              <label htmlFor="firstName"> Password *</label>
              <Form />
            </div>
            <div className="ml-[32px]">
              <label htmlFor="firstName"> Confirm Password *</label>
              <Form />
            </div>
          </form>
          <button
            className="ml-[32px] rounded-md bg-gray-300 mt-[80px] w-[100px] h-[44px]"
            onClick={() => {
              backStep();
            }}
          >
            back
          </button>
          <button
            onClick={() => {
              setCurrentStep();
            }}
            className="ml-[8px] rounded-md bg-gray-300 mt-[80px] w-[316px] h-[44px]"
          >
            contiune 2/3 --
          </button>
        </div>
      </div>
    </div>
  );
};
