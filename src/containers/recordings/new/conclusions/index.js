import React from 'react';
import {
  Grid, Row, Button
} from 'react-bootstrap';

const CreateConclusions = (props) => (
  <Grid>
    <Row>Create Conclusions</Row>
    <Button bsStyle="primary" onClick={() => props.history.push('/')}>Save & View</Button>
  </Grid>
);

export default CreateConclusions;
