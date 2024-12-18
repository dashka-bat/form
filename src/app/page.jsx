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
  const onChange = () => {
    setForm();
  };
  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };
  const backStep = () => {
    setCurrentStep(currentStep - 1);
  };
  return (
    <div>
      {currentStep == 1 && (
        <Step1
          form={form}
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
