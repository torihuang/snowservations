import React, { Component } from 'react';
import {
  Grid, Row, Col, Button
} from 'react-bootstrap';
import { Form, Text, withFormState } from 'informed';

import './style.scss';

// Services
import SnowservationsApollo from '../../services/SnowservationsApollo';
import ValidateForm from '../../services/ValidateForm';

const FormError = props => (
  <div className="form-error">{props.formState.errors[props.name]}</div>
);

const FormErrorWithFormState = withFormState(FormError);

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      unknownError: '',
    }

    this.handleClick = this.handleClick.bind(this);
    this.setFormApi = this.setFormApi.bind(this);
    this.getError = this.getError.bind(this);
  }

  handleClick() {
    const formState = this.formApi.getState();
    console.log(this.formApi.getState());
    if (!formState.invalid) {
      SnowservationsApollo.newUser(formState.values).then((res) => {
        if (res.error) {
          this.setState({ unknownError: res.error.value || 'Something went wrong' })
        } else {
          this.props.history.push('/')
        }
      })
    }
  }

  setFormApi(formApi) {
    this.formApi = formApi;
  }

  getError(valueToCheck) {
    console.log('this.props', this.props)
    const formState = this.props.formApi.getState();
    return formState.errors[valueToCheck];
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <h3>Sign Up</h3>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <Form id="signup-form" getApi={this.setFormApi}>
              <Row className="form-text-container">
                <Col xs={6} sm={6} md={6} lg={6}>
                  <Text className="form-text-field" field="firstName" id="firstName" placeholder="First Name" validate={ValidateForm.hasLength} />
                  <FormErrorWithFormState name="firstName" />
                </Col>
                <Col xs={6} sm={6} md={6} lg={6}>
                  <Text className="form-text-field" field="lastName" id="lastName" placeholder="Last Name" validate={ValidateForm.hasLength} />
                  <FormErrorWithFormState name="lastName" />
                </Col>
              </Row>
              <Row className="form-text-container">
                <Col xs={12} sm={12} md={12} lg={12}>
                  <Text className="form-text-field" type="email" field="email" id="email" placeholder="Email" validate={ValidateForm.isEmail} />
                  <FormErrorWithFormState name="email" />
                </Col>
              </Row>
              <Row className="form-text-container">
                <Col xs={12} sm={12} md={12} lg={12}>
                  <Text className="form-text-field" type="password" field="password" id="password" placeholder="Password" validate={ValidateForm.isPassword} />
                  <FormErrorWithFormState name="password" />
                </Col>
              </Row>
              <Row>
                <Col xs={12} sm={12} md={12} lg={12}>
                  <Button type="submit" onClick={this.handleClick}>Sign Up</Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default SignUp;
