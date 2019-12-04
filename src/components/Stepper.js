import React from 'react';
import classNames from 'classnames';

const stepsName = ['Basic', 'Contacts', 'Avatar', 'Finish'];

const Stepper = props => {
  const { currentPage } = props;

  return (
    <div className="steps-container mt-4">
      {stepsName.map((stepName, index) => (
        <div
          key={index}
          className={classNames(
            'step-item',
            { 'step-item-active': currentPage === index + 1 },
            { 'step-item-completed': currentPage > index + 1 }
          )}
        >
          <div className="step-number">{index + 1}</div>
          <div className="step-item-title">{stepName}</div>
        </div>
      ))}
    </div>
  );
};

export default Stepper;
