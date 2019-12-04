import React from 'react';
import defaultAvatar from '../img/default-avatar.png';

const Avatar = props => {
  const { onChange, values, errors } = props;

  const onChangeAvatar = event => {
    const reader = new FileReader();

    reader.onload = event => {
      onChange({
        target: {
          name: 'avatar',
          value: event.target.result,
        },
      });
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  return (
    <div className="form-group">
      <img
        className="w-100 mb-4"
        src={values.avatar || defaultAvatar}
        alt="avatar"
      />

      <div className="custom-file">
        <input
          id="avatar"
          type="file"
          className="custom-file-input"
          name="avatar"
          onChange={onChangeAvatar}
        />
        <label className="custom-file-label" htmlFor="avatar">
          Choose avatar
        </label>
        {errors.avatar ? (
          <div className="invalid-feedback">{errors.avatar}</div>
        ) : null}
      </div>
    </div>
  );
};

export default Avatar;
