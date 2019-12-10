import React from 'react';
import countries from '../../data/countries';
import cities from '../../data/cities';

const Finish = props => {
  const { values } = props;

  return (
    <div className="form-group px-2">
      <div className="row mb-4">
        <div className="col-4">
          <img className="w-100" src={values.avatar} alt="avatar" />
        </div>
        <div className="col-8">
          <h4>
            {values.firstName} {values.lastName}
          </h4>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-12">
          <p>
            <strong>Email: </strong>
            {values.email}
          </p>
          <p>
            <strong>Mobile: </strong>
            {values.mobile}
          </p>
          <p>
            <strong>Location: </strong>
            {`
            ${
              countries.find(country => country.id === Number(values.country))
                .name
            },
            ${cities[values.city].name}
            `}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Finish;
