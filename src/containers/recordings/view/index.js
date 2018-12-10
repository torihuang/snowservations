import React from 'react';
import {
  Grid, Row, Button
} from 'react-bootstrap';

const ViewLayer = (props) => (
  <Grid>
    <Row>View Layer</Row>
    <Button bsStyle="primary" onClick={() => props.history.push('/')}>Home</Button>
  </Grid>
);

export default ViewLayer;
