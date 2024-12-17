import Image from "next/image";
import { Form } from "./component/Form";
import { Step2 } from "./component/step3";
import { Step3 } from "./component/step3";
import { Card } from "./component/Card";
import Step1 from "./component/step1";
import { useState } from "react";
import { FunctionSquare } from "lucide-react";

const [step, setStep] = useState(1);
function changeSetstep(props) {
  setStep(step + 1);
}

export default function Home() {
  return (
    <div>
      <Step1 key={index} setStep={changeSetstep} />
    </div>
  );
}
