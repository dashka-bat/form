import Image from "next/image";
import { Form } from "./Form";

export const Step3 = ({ setCurrentStep, backStep, onChange, form }) => {
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
            <div>
              <label className="ml-[32px]" htmlFor="firstName">
                {" "}
                Date of birth *
              </label>
              <input
                className=" ml-[32px] w-[416px] h-[44px] border-[2px] border-gray-200 rounded-md"
                type="date"
              />
            </div>
            <div>
              <label className="ml-[32px]" htmlFor="firstName">
                {" "}
                Profile image *
              </label>
              <input
                className="w-[416px] h-[180px] border-2px border-gray-200 rounded-md bg-gray-200 ml-[32px]"
                type="file"
                id="img"
                name="img"
                accept="image/*"
              />
            </div>
          </form>
          <button
            className="ml-[32px] rounded-md bg-gray-300 mt-[140px] w-[100px] h-[44px]"
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
            className="ml-[8px] rounded-md bg-gray-300 mt-[140px] w-[316px] h-[44px]"
          >
            contiune 3/3 →
          </button>
        </div>
      </div>
    </div>
  );
};
