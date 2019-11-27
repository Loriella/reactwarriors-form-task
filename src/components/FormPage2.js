import React from 'react';
import Field from './Field';
import countries from '../data/countries';
import cities from '../data/cities';

const FormPage2 = props => {
  const { stateApp, onChange, getOptionsItems, getOptionsCities } = props;
  return (
    <div className="form-group">
      <Field
        id="id"
        labelText="Email"
        type="text"
        placeholder="Enter email"
        name="email"
        value={stateApp.email}
        onChange={onChange}
        error={stateApp.errors.email}
      />
      <Field
        id="id"
        labelText="Mobile"
        type="text"
        placeholder="Enter mobile"
        name="mobile"
        value={stateApp.mobile}
        onChange={onChange}
        error={stateApp.errors.mobile}
      />
      <div className="form-group">
        <label htmlFor="country">Country</label>
        <select
          className="form-control"
          id="country"
          name="country"
          value={stateApp.country}
          onChange={onChange}
        >
          {getOptionsItems(countries)}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="country">City</label>
        <select
          className="form-control"
          id="city"
          name="city"
          value={stateApp.city}
          onChange={onChange}
        >
          {getOptionsItems(getOptionsCities(cities))}
        </select>
      </div>
    </div>
  );
};

export default FormPage2;
