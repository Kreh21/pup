import React from 'react';
import { Row, Col, FormGroup, ControlLabel, Button, Alert } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';
import { Bert } from 'meteor/themeteorchef:bert';
import OAuthLoginButtons from '../../components/OAuthLoginButtons/OAuthLoginButtons';
import InputHint from '../../components/InputHint/InputHint';
import AccountPageFooter from '../../components/AccountPageFooter/AccountPageFooter';
import validate from '../../../modules/validate';

import './Signup.scss';

import Plans from '../../components/Plans/Plans';
import Card from '../../components/Card/Card';
import handleSignup from '../../../modules/signup';


class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // const component = this;

    // validate(component.form, {
    //   rules: {
    //     firstName: {
    //       required: true,
    //     },
    //     lastName: {
    //       required: true,
    //     },
    //     emailAddress: {
    //       required: true,
    //       email: true,
    //     },
    //     password: {
    //       required: true,
    //       minlength: 6,
    //     },
    //   },
    //   messages: {
    //     firstName: {
    //       required: 'What\'s your first name?',
    //     },
    //     lastName: {
    //       required: 'What\'s your last name?',
    //     },
    //     emailAddress: {
    //       required: 'Need an email address here.',
    //       email: 'Is this email address correct?',
    //     },
    //     password: {
    //       required: 'Need a password here.',
    //       minlength: 'Please use at least six characters.',
    //     },
    //   },
    //   submitHandler() { component.handleSubmit(); },
    // });
    handleSignup({ component: this });

  }

  handleSubmit() {
    event.preventDefault();
  }

  render() {
    return (
      <div className="Signup">
        <Row>
          <Col xs={ 12 } sm={ 8 } smOffset={ 2 } md={ 6 } mdOffset={ 3 }>
            <h4 className="page-header">Account Information</h4>
            <form
              ref={ form => (this.signupForm = form) }
              onSubmit={ this.handleSubmit }
            >
              <Row>
                <Col xs={ 6 } sm={ 6 }>
                  <FormGroup>
                    <ControlLabel>First Name</ControlLabel>
                    <input
                      type="text"
                      ref={firstName => (this.firstName = firstName)}
                      name="firstName"
                      placeholder="First Name"
                      className="form-control"
                    />
                  </FormGroup>
                </Col>
                <Col xs={ 6 } sm={ 6 }>
                  <FormGroup>
                    <ControlLabel>Last Name</ControlLabel>
                    <input
                      type="text"
                      ref={lastName => (this.lastName = lastName)}
                      name="lastName"
                      placeholder="Last Name"
                      className="form-control"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <ControlLabel>Email Address</ControlLabel>
                <input
                  type="email"
                  ref={emailAddress => (this.emailAddress = emailAddress)}
                  name="emailAddress"
                  placeholder="Email Address"
                  className="form-control"
                />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Password</ControlLabel>
                <input
                  type="password"
                  ref={password => (this.password = password)}
                  name="password"
                  placeholder="Password"
                  className="form-control"
                />
              </FormGroup>
              <h4 className="page-header">Payment Information</h4>
              <Row>
                <Col xs={ 12 }>
                  <Alert bsStyle="info">
                    <strong>Select a plan size</strong>. When you sign up, your subscription will begin after a free one day trial (renewed monthly). Cancel anytime.
                  </Alert>
                  <Plans />
                </Col>
              </Row>
              <Row>
                <Col xs={ 12 }>
                  <Card ref={card => (this.card = card)} />
                </Col>
              </Row>
              <Button type="submit" bsStyle="success" block>Sign Up</Button>
            </form>
          </Col>
        </Row>
      </div>
    );
  }
}

Signup.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Signup;
