import React from 'react';
import defaultAvatar from '../img/default-avatar.png';

const FormPage3 = props => {
  const { onChangeAvatar, stateApp } = props;

  return (
    <div className="form-group">
      {stateApp.avatar === '' ? (
        <img className="w-100 mb-4" src={defaultAvatar} alt="avatar" />
      ) : (
        <img className="w-100 mb-4" src={stateApp.avatar} alt="avatar" />
      )}

      <div className="custom-file">
        <input
          type="file"
          className="custom-file-input"
          id="avatar"
          name="avatar"
          onChange={onChangeAvatar}
        />
        <label className="custom-file-label" htmlFor="avatar">
          Choose avatar
        </label>
      </div>
    </div>
  );
};

export default FormPage3;
