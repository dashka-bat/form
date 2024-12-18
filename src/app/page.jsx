"use client"
import Image from "next/image";
import { Step3 } from "./component/step3";
import { Step2 } from "./component/steps2";
import { Step1 } from "./component/step1";
import { useState } from "react";

export default function Home() {

  const [currentStep,setCurrentStep]=useState(1)
  const nextStep=()=>{
    setCurrentStep(currentStep +1)
    const backstep=()=>{
      
    }
  
  }
  return (
    <div>
      {currentStep==1 &&  <Step1   setCurrentStep={nextStep}/> }
      {currentStep==2 &&  <Step2  setCurrentStep={nextStep}/> }
      {currentStep==3 &&  <Step3  setCurrentStep={nextStep}/> }
    </div>
  );
}
