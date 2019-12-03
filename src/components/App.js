import React from 'react';
import Stepper from './Stepper';
import Basic from './Basic';
import Contacts from './Contacts';
import Avatar from './Avatar';
import Finish from './Finish';
import classNames from 'classnames';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      firstname: '',
      lastname: '',
      password: '',
      repeatPassword: '',
      gender: 'male',
      email: '',
      mobile: '',
      country: '1',
      city: '',
      avatar: '',
      currentpage: 1,
      errors: {
        firstname: false,
        lastname: false,
        password: false,
        repeatPassword: false,
        email: false,
        mobile: false,
        country: false,
        city: false,
        avatar: false,
      },
    };
  }

  onChange = event => {
    const { name, value } = event.target;
    const { [name]: _, ...errors } = this.state.errors;

    this.setState({
      [name]: value,
      errors,
    });
  };

  pagesValidation = errors => {
    if (this.state.currentpage === 1) {
      if (this.state.firstname.length < 5) {
        errors.firstname = 'Must be 5 characters or more';
      }
      if (this.state.lastname.length < 5) {
        errors.lastname = 'Must be 5 characters or more';
      }
      if (this.state.password.length < 6) {
        errors.password = 'Must be 6 characters or more';
      }
      if (this.state.password !== this.state.repeatPassword) {
        errors.repeatPassword = 'Must be equal password';
      }
    }

    if (this.state.currentpage === 2) {
      if (!/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(this.state.email)) {
        errors.email = 'Invalid email address';
      }
      if (!/^\d[\d()-]{4,14}\d$/.test(this.state.mobile)) {
        errors.mobile = 'Invalid mobile';
      }
      if (this.state.city === '') {
        errors.city = 'Required';
      }
    }

    if (this.state.currentpage === 3) {
      if (this.state.avatar === '') {
        errors.avatar = 'Required';
      }
    }
  };

  getOptionsItems = items => {
    return items.map(item => (
      <option key={item.id} value={item.id}>
        {item.name}
      </option>
    ));
  };

  getOptionsCities = cities => {
    const citiesArr = Object.values(cities);
    const optionsCities = [{ id: 0, name: 'Select city' }];
    const { country } = this.state;

    citiesArr.forEach((item, index) => {
      if (+item.country === +country) {
        const cityItem = {
          id: index + 1,
          name: item.name,
        };
        optionsCities.push(cityItem);
      }
    });
    return optionsCities;
  };

  onChangeAvatar = event => {
    const reader = new FileReader();

    reader.onload = event => {
      this.setState({
        avatar: event.target.result,
      });
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  previousFormPage = event => {
    event.preventDefault();

    if (this.state.currentpage > 1) {
      this.setState({
        currentpage: this.state.currentpage - 1,
      });
    }
  };

  nextFormPage = event => {
    event.preventDefault();

    const errors = {};
    this.pagesValidation(errors);

    if (Object.keys(errors).length > 0) {
      this.setState({
        errors: errors,
      });
    } else {
      this.setState({
        currentpage: this.state.currentpage + 1,
        errors: {},
      });
    }
  };

  onReset = () => {
    this.setState({
      firstname: '',
      lastname: '',
      password: '',
      repeatPassword: '',
      gender: 'male',
      email: '',
      mobile: '',
      country: '1',
      city: '',
      avatar: '',
      currentpage: 1,
      errors: {
        firstname: false,
        lastname: false,
        password: false,
        repeatPassword: false,
        email: false,
        mobile: false,
        country: false,
        city: false,
        avatar: false,
      },
    });
  };

  render() {
    return (
      <div className="form-container card">
        <Stepper currentPage={this.state.currentpage} />
        <form className="form card-body">
          {this.state.currentpage === 1 && (
            <Basic onChange={this.onChange} stateApp={this.state} />
          )}
          {this.state.currentpage === 2 && (
            <Contacts
              onChange={this.onChange}
              stateApp={this.state}
              getOptionsItems={this.getOptionsItems}
              getOptionsCities={this.getOptionsCities}
            />
          )}
          {this.state.currentpage === 3 && (
            <Avatar
              onChangeAvatar={this.onChangeAvatar}
              stateApp={this.state}
            />
          )}
          {this.state.currentpage === 4 && <Finish stateApp={this.state} />}
          <div className="d-flex justify-content-center">
            {this.state.currentpage !== 4 ? (
              <div>
                <button
                  type="button"
                  className={classNames(
                    'btn',
                    { 'btn-secondary': this.state.currentpage !== 1 },
                    { 'btn-light': this.state.currentpage === 1 },
                    { disabled: this.state.currentpage === 1 }
                  )}
                  onClick={this.previousFormPage}
                >
                  Previous
                </button>
                <button
                  type="button"
                  className="btn btn-secondary ml-4"
                  onClick={this.nextFormPage}
                >
                  Next
                </button>
              </div>
            ) : (
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.onReset}
              >
                Reset
              </button>
            )}
          </div>
        </form>
      </div>
    );
  }
}
