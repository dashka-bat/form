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
    lastname: "",
  });
  const[error,setError]=useState({
    firstname:"",
    lastname:"",
  })
  
  const onChange = (e) => {
    const value=e.target.value
    const ids=e.target.id
    const newValues={...form,[ids]:value}
    setForm(newValues)
if(value===""){
  setError({...error,[ids]:"hoosn bn "})
}else if(checkNumber(value)){
  setError({...error,[ids]:"too baij bolhgui "})

} else{setError({...error,[ids]:""})}

    
  };
  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };
  const backStep = () => {
    setCurrentStep(currentStep - 1);
  };
  const checkNumber=(value)=>{
    for(let i=0;value.length>i;i++){
      if(value[i]>=0 && value[i]<=9 ){
        return true
      }
    }
    return false
  }
  return (
    <div>
      {currentStep == 1 && (
        <Step1 
     
        firstname={error.firstname}
        lastname={error.lastname}
        
          form={form}
          onChange={onChange}
          backStep={backStep}
          setCurrentStep={nextStep}
        />
      )}
      {currentStep == 2 && (
        <Step2
        error={error}
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
