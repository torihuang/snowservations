import React from 'react';
import {
  Grid, Row, Button
} from 'react-bootstrap';

const CreateLayers = (props) => (
  <Grid>
    <Row>Create Layers</Row>
    <Button bsStyle="primary" onClick={() => props.history.push('/recordings/new/conclusions')}>Next</Button>
  </Grid>
);

export default CreateLayers;
