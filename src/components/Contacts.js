import React from 'react';
import Field from './Field';
import countries from '../data/countries';
import cities from '../data/cities';

const getOptionsCountries = countries => {
  return [{ id: 0, name: 'Select country' }].concat(countries);
};

const getOptionsCities = (cities, selectedCountry) => {
  return Object.entries(cities).reduce(
    (acc, [key, city]) => {
      if (city.country === Number(selectedCountry)) {
        acc.push({ id: key, name: city.name });
      }
      return acc;
    },
    [{ id: 0, name: 'Select city' }]
  );
};

const Contacts = props => {
  const { values, errors, onChange } = props;

  const createOptionsItems = items => {
    return items.map(item => (
      <option key={item.id} value={item.id}>
        {item.name}
      </option>
    ));
  };

  return (
    <div className="form-group">
      <Field
        id="email"
        labelText="Email"
        placeholder="Enter email"
        name="email"
        value={values.email}
        onChange={onChange}
        error={errors.email}
      />
      <Field
        id="mobile"
        labelText="Mobile"
        placeholder="Enter mobile"
        name="mobile"
        value={values.mobile}
        onChange={onChange}
        error={errors.mobile}
      />
      <div className="form-group">
        <label htmlFor="country">Country</label>
        <select
          id="country"
          className="form-control"
          name="country"
          value={values.country}
          onChange={onChange}
        >
          {createOptionsItems(getOptionsCountries(countries))}
        </select>
        {errors.country ? (
          <div className="invalid-feedback">{errors.country}</div>
        ) : null}
      </div>
      <div className="form-group">
        <label htmlFor="country">City</label>
        <select
          id="city"
          className="form-control"
          name="city"
          value={values.city}
          onChange={onChange}
        >
          {createOptionsItems(getOptionsCities(cities, values.country))}
        </select>
        {errors.city ? (
          <div className="invalid-feedback">{errors.city}</div>
        ) : null}
      </div>
    </div>
  );
};

export default Contacts;
