import React from 'react';
import Field from '../FormElements/Field';

const Basic = props => {
  const { values, errors, onChange } = props;

  return (
    <div className="form-group">
      <Field
        id="firstName"
        labelText="First name"
        placeholder="Enter first name"
        name="firstName"
        value={values.firstName}
        onChange={onChange}
        error={errors.firstName}
      />
      <Field
        id="lastName"
        labelText="Last Name"
        placeholder="Enter last name"
        name="lastName"
        value={values.lastName}
        onChange={onChange}
        error={errors.lastName}
      />
      <Field
        id="password"
        labelText="Password"
        type="password"
        placeholder="Enter password"
        name="password"
        value={values.password}
        onChange={onChange}
        error={errors.password}
      />
      <Field
        id="repeatPassword"
        labelText="Repeat password"
        type="password"
        placeholder="Enter repeat password"
        name="repeatPassword"
        value={values.repeatPassword}
        onChange={onChange}
        error={errors.repeatPassword}
      />
      <fieldset className="form-group">
        <div>Gender</div>
        <div className="form-check">
          <input
            id="male"
            className="form-check-input"
            type="radio"
            name="gender"
            value="male"
            checked={values.gender === 'male'}
            onChange={onChange}
          />
          <label className="form-check-label" htmlFor="male">
            Male
          </label>
        </div>
        <div className="form-check">
          <input
            id="female"
            className="form-check-input"
            type="radio"
            name="gender"
            value="female"
            checked={values.gender === 'female'}
            onChange={onChange}
          />
          <label className="form-check-label" htmlFor="female">
            Female
          </label>
        </div>
      </fieldset>
    </div>
  );
};

export default Basic;
