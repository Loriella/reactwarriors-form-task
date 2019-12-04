import React from 'react';
import Stepper from './Stepper';
import Basic from './Basic';
import Contacts from './Contacts';
import Avatar from './Avatar';
import Finish from './Finish';
import BottomNavigation from './BottomNavigation';

const initialState = {
  values: {
    firstName: '',
    lastName: '',
    password: '',
    repeatPassword: '',
    gender: 'male',
    email: '',
    mobile: '',
    country: '',
    city: '',
    avatar: '',
  },
  currentPage: 1,
  errors: {
    firstName: false,
    lastName: false,
    password: false,
    repeatPassword: false,
    email: false,
    mobile: false,
    country: false,
    city: false,
    avatar: false,
  },
};

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...initialState };
  }

  onChange = event => {
    const { name, value } = event.target;
    let cityState = this.state.values.city;

    if (name === 'country' && value !== this.state.values.country) {
      cityState = '';
    }

    this.setState(state => ({
      values: {
        ...this.state.values,
        city: cityState,
        [name]: value,
      },
    }));
  };

  onReset = () => {
    this.setState({
      ...initialState,
    });
  };

  pagesValidation = () => {
    const errors = {};
    const regexForEmail = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
    const regexForMobile = /^\d[\d()-]{4,14}\d$/;

    switch (this.state.currentPage) {
      case 1:
        if (this.state.values.firstName.length < 5) {
          errors.firstName = 'Must be 5 characters or more';
        }
        if (this.state.values.lastName.length < 5) {
          errors.lastName = 'Must be 5 characters or more';
        }
        if (this.state.values.password.length < 6) {
          errors.password = 'Must be 6 characters or more';
        }
        if (this.state.values.password !== this.state.values.repeatPassword) {
          errors.repeatPassword = 'Must be equal password';
        }
        break;

      case 2:
        if (!regexForEmail.test(this.state.values.email)) {
          errors.email = 'Invalid email address';
        }
        if (!regexForMobile.test(this.state.values.mobile)) {
          errors.mobile = 'Invalid mobile';
        }
        if (!Number(this.state.values.country)) {
          errors.country = 'Required';
        }
        if (!Number(this.state.values.city)) {
          errors.city = 'Required';
        }
        break;

      case 3:
        if (this.state.values.avatar === '') {
          errors.avatar = 'Required';
        }
        break;

      default:
        break;
    }

    return errors;
  };

  updatePage = pageNumber => {
    const errors = this.pagesValidation();

    if (Object.keys(errors).length > 0) {
      this.setState({
        errors,
      });
    } else {
      this.setState({
        currentPage: pageNumber,
        errors: {},
      });
    }
  };

  render() {
    return (
      <div className="form-container card">
        <Stepper currentPage={this.state.currentPage} />
        <form className="form card-body">
          {this.state.currentPage === 1 && (
            <Basic
              onChange={this.onChange}
              values={this.state.values}
              errors={this.state.errors}
            />
          )}
          {this.state.currentPage === 2 && (
            <Contacts
              onChange={this.onChange}
              values={this.state.values}
              errors={this.state.errors}
            />
          )}
          {this.state.currentPage === 3 && (
            <Avatar
              values={this.state.values}
              errors={this.state.errors}
              onChange={this.onChange}
            />
          )}
          {this.state.currentPage === 4 && (
            <Finish values={this.state.values} />
          )}
          <BottomNavigation
            currentPage={this.state.currentPage}
            pagesValidation={this.pagesValidation}
            updatePage={this.updatePage}
            onReset={this.onReset}
          />
        </form>
      </div>
    );
  }
}
