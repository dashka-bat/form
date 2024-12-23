import Image from "next/image";
import { Form } from "./Form";
export const Step1 = ({
  setCurrentStep,
  backStep,
  onChange,
  form,
  console,
  error,
  firstname,
  lastname,
  username,
  enableButton,
  id,
}) => {
  function isValid() {
    return (
      !form.firstname ||
      !form.lastname ||
      !form.username ||
      firstname !== " " ||
      lastname !== " " ||
      username !== " "
    );
  }

  // localStorage.setItem(form.firstname, form.firstname);

  return (
    <div>
      <div className="bg-gray-300 w-screen h-screen flex justify-center items-center ">
        <div className="bg-white w-[480px] h-[655px] ">
          <img
            className="mt-[32px] ml-[32px] w-[60px] h-[60px]"
            src="main.png "
            alt=""
          />
          <p className="ml-[32px] mt-[10px] text-[26px]">Join Us!😎</p>
          <p className="ml-[32px] mt-[10px] text-[18x]">
            Please provide all current information accurately.
          </p>
          <form>
            <div className="ml-[32px] mt-[10px]">
              <label htmlFor="firstName"> Firstname *</label>
              <input
                value={form.firstname}
                id="firstname"
                className="border-[2px] border-blue-400 w-[416px] h-[44px] rounded-md mt-[8px]"
                type="text"
                placeholder="place holder"
                onChange={onChange}
              ></input>
              <p className="text-red-700">{firstname}</p>
            </div>
            <div className="ml-[32px]">
              <label htmlFor="lastName"> Lastname *</label>
              <input
                value={form.lastname}
                id="lastname"
                className="border-[2px] border-blue-400 w-[416px] h-[44px] rounded-md mt-[8px]"
                type="text"
                placeholder="place holder"
                onChange={onChange}
              ></input>
              <p className="text-red-700">{lastname}</p>
            </div>

            <div className="ml-[32px] ">
              <label htmlFor="userName"> Username *</label>
              <input
                value={form.username}
                id="username"
                className="border-[2px] border-blue-400 w-[416px] h-[44px] rounded-md mt-[8px] relative"
                type="text"
                placeholder="place holder"
                onChange={onChange}
              ></input>
              <p className="text-red-700">{username}</p>
            </div>
          </form>
          <button
            disabled={isValid()}
            onClick={() => {
              setCurrentStep();
            }}
            className="ml-[32px] rounded-md bg-gray-300 w-[416px] h-[44px] absolute top-[800px]"
          >
            contiune 1/3 →
          </button>
        </div>
      </div>
    </div>
  );
};
