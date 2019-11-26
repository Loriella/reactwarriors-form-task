import React from 'react';

const Stepper = () => {
  return (
    <div className="steps-container mt-4">
      <div className="step-item">
        <div className="step-number">1</div>
        <div className="step-item-title">Basic</div>
      </div>
      <div className="step-item">
        <div className="step-number">2</div>
        <div className="step-item-title">Contacts</div>
      </div>
      <div className="step-item">
        <div className="step-number">3</div>
        <div className="step-item-title">Avatar</div>
      </div>
      <div className="step-item">
        <div className="step-number">4</div>
        <div className="step-item-title">Finish</div>
      </div>
    </div>
  );
};

export default Stepper;
