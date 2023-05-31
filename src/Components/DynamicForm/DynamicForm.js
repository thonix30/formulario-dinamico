import { Container } from "react-bootstrap";
import { useState } from "react";
import './DynamicForm.css';
import { First } from "react-bootstrap/esm/PageItem";
import FirstStep from "./FirstStep/FirstStep";
import SecondStep from "./SecondStep/SecondStep";
import ThirdStep from "./ThirdStep/ThirdStep";


export default function DynamicForm() {

  const [step, setStep] = useState(1);

  const showNextStep = () => {
      setStep(step +1);
  }

  const showPreview = () => {
    setStep(step -1);
  }
  
  
  return (
    <div className="dynamic-form mt-4 mb-5 " id="dynamic-form">
      <Container className="text-center p-4">
        <div className="content-dynamic-form mt-5 p-4">
          <h1 className="title-dynamic-form">Llena el Formulario</h1>
          <p className="steps-numbers">Paso {step} de 3</p>

        {getPageByStep(step, setStep)}

          <div className="actions">
            <div className="container-text">
              {step > 1 && step < 4 &&(
              <p className="before" onClick={showPreview}>
                ⬅️ paso atras 
              </p>
              )}
            </div>

            <div className="container-text">
              {step> 0 && step < 3 && (
              <p className="next" onClick={showNextStep}>
                siguiente paso ➡️
              </p>
              )}
            </div>
          </div>
        </div> 
      </Container>
    </div>
  )
}

function getPageByStep (step, setStep) {
  if( step === 1){
    return <FirstStep />
  } else if (step===2){
    return <SecondStep/>
  } else if (step=== 3){
    return <ThirdStep setStep={setStep}/>
  }
}