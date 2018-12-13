import React, { Component } from 'react';
import {
  Grid, Row, Col, Button
} from 'react-bootstrap';
import { Form, Text, withFormState } from 'informed';
import { LayersTable } from '../../../../components';

const LayerForm = props => (
  <Form id="layer-form" getApi={props.setFormApi}>
    <Row className="form-text-container">
      <Col lg={12}>
        <Text className="form-text-field" type="number" field="height" id="height" placeholder="Height" />
        <FormErrorWithFormState name="height" />
      </Col>
    </Row>
    <Row className="form-text-container">
      <Col lg={12}>
        <Text className="form-text-field" field="hardness" id="hardness" placeholder="Hardness" />
        <FormErrorWithFormState name="hardness" />
      </Col>
    </Row>
    <Row className="form-text-container">
      <Col lg={12}>
        <Text className="form-text-field" type="number" field="temperature" id="temperature" placeholder="Temperature" />
        <FormErrorWithFormState name="email" />
      </Col>
    </Row>
    <Row>
      <Col lg={12}>
        <Button type="submit" onClick={props.handleClick}>Submit</Button>
      </Col>
    </Row>
  </Form>
);

const FormError = props => (
  <div className="form-error">{props.formState.errors[props.name]}</div>
);

const FormErrorWithFormState = withFormState(FormError);

class CreateLayers extends Component {
  constructor() {
    super();

    this.state = {
      unknownError: '',
      layers: [],
    }

    this.handleClick = this.handleClick.bind(this);
    this.setFormApi = this.setFormApi.bind(this);
    this.getError = this.getError.bind(this);
  }

  handleClick() {
    const formState = this.formApi.getState();
    const layers = this.state.layers.slice();
    layers.push(formState.values);
    this.setState({ layers });
    this.formApi.reset();
  }

  setFormApi(formApi) {
    this.formApi = formApi;
  }

  getError(valueToCheck) {
    const formState = this.props.formApi.getState();
    return formState.errors[valueToCheck];
  }

  render() {
    console.log('this.state.layers', this.state.layers);
    return (
      <Grid>
        <Row>Create Layers</Row>
        <Row>
          <Col lg={12}>
            <LayersTable layers={this.state.layers} />
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <LayerForm setFormApi={this.setFormApi} handleClick={this.handleClick} />
          </Col>
        </Row>
        <Button bsStyle="primary" onClick={() => this.props.history.push('/recordings/new/conclusions')}>Next</Button>
      </Grid>
    )
  }
}

export default CreateLayers;
