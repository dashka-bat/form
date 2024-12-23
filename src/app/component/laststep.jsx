import Image from "next/image";
import { Form } from "./Form";

export const Step4 = ({ setCurrentStep, backStep, onChange, form }) => {
  return (
    <div>
      <div className="bg-gray-300 w-screen h-screen flex justify-center items-center">
        <div className="bg-white w-[480px] h-[193px] rounded-md ">
          <img
            className="mt-[32px] ml-[32px] w-[60px] h-[60px]"
            src="main.png "
            alt=""
          />
          <p className="text-[26px] text-bold ml-[32px]">You're All Set 🔥</p>
          <p className="ml-[32px]">
            We have received your submission. Thank you!
          </p>
        </div>
      </div>
    </div>
  );
};
