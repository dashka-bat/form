"use client";
import Image from "next/image";
import { Step3 } from "./component/step3";
import { Step2 } from "./component/steps2";
import { Step1 } from "./component/step1";
import { Step4 } from "./component/laststep";
import { useState } from "react";


export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);
  const [form, setForm] = useState({
    firstname: "",
    username:"",
    lastname: "",
    email: "",
    phone: "",
    Password: "",
    ConfirmPassword: "",
  });
  const [error, setError] = useState({
    firstname: "",
    username: "",
    lastname: "",
  });
  const onChange = (e) => {
    const value = e.target.value;
    const ids = e.target.id;
    const newValues = { ...form, [ids]: value };
    setForm(newValues);
    if (value === "" && ids==="firstname",ids==="lastname",ids==="username") {
      setError({ ...error, [ids]: "empty " });
    } else if (checkNumber(value)&& ids==="firstname", ids==="lastname") {
      setError({
        ...error,
        [ids]: " cannot contain numbers. ",
      });
    } else if (checkRegex(value)) {
      setError({
        ...error,
        [ids]: " cannot contain special characters ",
      });
    } else if (checkLowercase(value)) {
      setError({ ...error, [ids]: "ehnii useg jijig baihgue ho" });
    }else if(checkUsername(value) && ids==="username"){
      setError({...error,[ids]:"urt 5aas urt bailgachih guijen"})

    }  else {
      setError({ ...error, [ids]: "" });
    }
  };
  
  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };
  const backStep = () => {
    setCurrentStep(currentStep - 1);
  };
  const checkNumber = (value) => {
    for (let i = 0; value.length > i; i++) {
      if (value[i] >= 0 && value[i] <= 9) {
        return true;
      }
    }
    return false;
  };
  const checkLowercase = (value) => {
    for (let i = 0; value.length > i; i++) {
      if (value.substring(0, 1) === value.substring(0, 1).toLowerCase()) {
        return true;
      }
    }
    return false;
  };
  const checkRegex = (value) => {
    let regex = /[!@#$%^&*()()_+;'//.,-={|)__+}""[:?<>]/;
    for (let i = 0; value.length > i; i++) {
      if (regex.test(value)) {
        return true;
      } else {
        return false;
      }
    }
  };
  const checkUsername=(value)=>{
    
    if(value.length<5){return true;}
      
    return false;
      }
//   const checkLenght = (value) => {
//     for(let i=0;value.length>i;i++){
//       if(value.length<5&&ids===username){
// return true;
//       }else{
//         return false;
//       }
//     }
//   };
  return (
    <div>
      {currentStep == 1 && (
        <Step1
          firstname={error.firstname}
          lastname={error.lastname}
          form={form}
          username={error.username}
          onChange={onChange}
          backStep={backStep}
          setCurrentStep={nextStep}
        />
      )}
      {currentStep == 2 && (
        <Step2
          
          
          form={form}
          onChange={onChange}
          backStep={backStep}
          setCurrentStep={nextStep}
        />
      )}
      {currentStep == 3 && (
        <Step3
          form={form}
          onChange={onChange}
          backStep={backStep}
          setCurrentStep={nextStep}
        />
      )}
      {currentStep === 4 && (
        <Step4
          form={form}
          onChange={onChange}
          backStep={backStep}
          setCurrentStep={nextStep}
        />
      )}
    </div>
  );
}
