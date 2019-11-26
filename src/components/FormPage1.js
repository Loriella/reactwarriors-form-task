import React from 'react';
import Field from './Field';

const FormPage1 = props => {
  const { stateApp, onChange } = props;
  return (
    <div className="form-group">
      <Field
        id="id"
        labelText="Firstname"
        type="text"
        placeholder="Enter firstname"
        name="firstname"
        value={stateApp.firstname}
        onChange={onChange}
        error={stateApp.errors.firstname}
      />
      <Field
        id="id"
        labelText="Lastname"
        type="text"
        placeholder="Enter lastname"
        name="lastname"
        value={stateApp.lastname}
        onChange={onChange}
        error={stateApp.errors.lastname}
      />
      <Field
        id="id"
        labelText="Password"
        type="password"
        placeholder="Enter password"
        name="password"
        value={stateApp.password}
        onChange={onChange}
        error={stateApp.errors.password}
      />
      <Field
        id="id"
        labelText="Repeat password"
        type="password"
        placeholder="Enter repeat password"
        name="repeatPassword"
        value={stateApp.repeatPassword}
        onChange={onChange}
        error={stateApp.errors.repeatPassword}
      />
      <fieldset className="form-group">
        <div>Gender</div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            id="male"
            name="gender"
            value="male"
            checked={stateApp.gender === 'male'}
            onChange={onChange}
          />
          <label className="form-check-label" htmlFor="male">
            Male
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            id="female"
            name="gender"
            value="female"
            checked={stateApp.gender === 'female'}
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

export default FormPage1;
