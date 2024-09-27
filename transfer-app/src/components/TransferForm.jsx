import React, { useState } from 'react';
import SenderReceiverInfo from './SenderReceiverInfo';
import TransferDetails from './TransferDetails';
import PaymentInfo from './PaymentInfo';

const TransferForm = () => {
  const [step, setStep] = useState(1);


  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const prevStep = () => setStep((prevStep) => prevStep - 1);

  const handleSubmit = (data) => {
    console.log(data);
   
  };

  return (
    <div className="transfer-form-container">
      <h2>Transfer Money</h2>
      {step === 1 && (
        <SenderReceiverInfo nextStep={nextStep} />
      )}
      {step === 2 && (
        <TransferDetails nextStep={nextStep} prevStep={prevStep} />
      )}
      {step === 3 && (
        <PaymentInfo prevStep={prevStep} onSubmit={handleSubmit} />
      )}
    </div>
  );
};

export default TransferForm;
