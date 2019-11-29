import React from 'react';
import classNames from 'classnames';

const Stepper = props => {
  const { currentPage } = props;
  return (
    <div className="steps-container mt-4">
      <div
        className={classNames(
          'step-item',
          { 'step-item-active': currentPage === 1 },
          { 'step-item-completed': currentPage > 1 }
        )}
      >
        <div className="step-number">1</div>
        <div className="step-item-title">Basic</div>
      </div>
      <div
        className={classNames('step-item', {
          'step-item-active': currentPage === 2,
          'step-item-completed': currentPage > 2,
        })}
      >
        <div className="step-number">2</div>
        <div className="step-item-title">Contacts</div>
      </div>
      <div
        className={classNames(
          'step-item',
          { 'step-item-active': currentPage === 3 },
          { 'step-item-completed': currentPage > 3 }
        )}
      >
        <div className="step-number">3</div>
        <div className="step-item-title">Avatar</div>
      </div>
      <div
        className={classNames('step-item', {
          'step-item-active': currentPage === 4,
        })}
      >
        <div className="step-number">4</div>
        <div className="step-item-title">Finish</div>
      </div>
    </div>
  );
};

export default Stepper;
