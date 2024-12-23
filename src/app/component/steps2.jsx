import Image from "next/image";
import { Form } from "./Form";

export const Step2 = ({
  setCurrentStep,
  backStep,
  onChange,
  form,
  email,
  phone,
  Password,
  ConfirmPassword,
}) => {
  function isValid() {
    if (
      email == " " &&
      phone == " " &&
      Password == " " &&
      ConfirmPassword == " "
    ) {
      return false;
    } else {
      return true;
    }
  }
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
              <label htmlFor="firstName"> Email *</label>
              <div>
                <input
                  id="email"
                  onChange={onChange}
                  className="border-[2px] border-blue-400 w-[416px] h-[44px] rounded-md mt-[8px]"
                  type="text"
                  placeholder="place holder"
                />{" "}
                <p className="text-red-700">{email}</p>
              </div>
            </div>
            <div className="ml-[32px]">
              <label htmlFor="firstName">Phone Number *</label>
              <div>
                <input
                  id="phone"
                  onChange={onChange}
                  className="border-[2px] border-blue-400 w-[416px] h-[44px] rounded-md mt-[8px]"
                  type="text"
                  placeholder="place holder"
                />{" "}
                <p className="text-red-700">{phone}</p>
              </div>
            </div>
            <div className="ml-[32px]">
              <label htmlFor="firstName"> Password *</label>
              <div>
                <input
                  id="Password"
                  onChange={onChange}
                  className="border-[2px] border-blue-400 w-[416px] h-[44px] rounded-md mt-[8px]"
                  type="password"
                  placeholder="place holder"
                />{" "}
                <p className="text-red-700">{Password}</p>
              </div>
            </div>
            <div className="ml-[32px]">
              <label htmlFor="firstName"> Confirm Password *</label>
              <div>
                <input
                  id="ConfirmPassword"
                  onChange={onChange}
                  className="border-[2px] border-blue-400 w-[416px] h-[44px] rounded-md mt-[8px] relative"
                  type="password"
                  placeholder="place holder"
                />
                <p className="text-red-700">{ConfirmPassword}</p>
              </div>
            </div>
          </form>
          <button
            className="ml-[32px] rounded-md bg-gray-300 mt-[80px] w-[100px] h-[44px] absolute top-[740px]"
            onClick={() => {
              backStep();
            }}
          >
            back
          </button>
          <button
            disabled={isValid()}
            onClick={() => {
              setCurrentStep();
            }}
            className="ml-[8px] rounded-md bg-gray-300 mt-[80px] w-[316px] h-[44px] absolute top-[740px] left-[1020px]"
          >
            contiune 2/3 →
          </button>
        </div>
      </div>
    </div>
  );
};
