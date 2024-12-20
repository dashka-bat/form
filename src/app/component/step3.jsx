import Image from "next/image";
import { Form } from "./Form";
import { useState } from "react";

export const Step3 = ({ setCurrentStep, backStep, onChange, form }) => {
  const [imageDrop, setImageDrop] = useState(null);
  const handleDrop = (event) => {
    if (event.target.files[0]) {
      const file = event.target.files[0];
      const imageDropped = URL.createObjectURL(file);
      setImageDrop(imageDropped);
    }

    // setImageDrop(imageDropped);
  };
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
              <p>Profile image </p>
              <label
                className="ml-[32px] w-[416px] h-[180px] bg-gray-200 block "
                htmlFor="profileImage"
              >
                <input
                  className="border-2px border-gray-200 rounded-md  ml-[32px]"
                  type="file"
                  id="profileImage"
                  name="img"
                  accept="image/*"
                  onChange={handleDrop}
                  hidden
                />
                {imageDrop ? (
                  <img className="w-full h-full" src={imageDrop}></img>
                ) : (
                  <div className="w-[28px] h-[28px]">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 14C0 6.26801 6.26801 0 14 0C21.732 0 28 6.26801 28 14C28 21.732 21.732 28 14 28C6.26801 28 0 21.732 0 14Z"
                        fill="white"
                      />
                      <path
                        d="M17.5 10.5V17.5H10.5V10.5H17.5ZM17.5 9.5H10.5C9.95 9.5 9.5 9.95 9.5 10.5V17.5C9.5 18.05 9.95 18.5 10.5 18.5H17.5C18.05 18.5 18.5 18.05 18.5 17.5V10.5C18.5 9.95 18.05 9.5 17.5 9.5ZM15.07 13.93L13.57 15.865L12.5 14.57L11 16.5H17L15.07 13.93Z"
                        fill="#202124"
                      />
                    </svg>
                  </div>
                )}
              </label>
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
