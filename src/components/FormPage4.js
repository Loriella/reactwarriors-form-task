import React from 'react';

const FormPage4 = props => {
  const { stateApp } = props;
  return (
    <div className="form-group px-2">
      <div className="row mb-4">
        <div className="col-4">
          <img className="w-100" src={stateApp.avatar} alt="avatar" />
        </div>
        <div className="col-8">
          <h4>
            {stateApp.firstname} {stateApp.lastname}
          </h4>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-12">
          <p>
            <strong>Email: </strong>
            {stateApp.email}
          </p>
          <p>
            <strong>Mobile: </strong>
            {stateApp.mobile}
          </p>
          <p>
            <strong>Location: </strong>
            {`${stateApp.country}, ${stateApp.city}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormPage4;
