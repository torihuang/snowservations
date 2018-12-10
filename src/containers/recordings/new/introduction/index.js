import React from 'react';
import {
  Grid, Row, Button
} from 'react-bootstrap';

const CreateIntro = (props) => (
  <Grid>
    <Row>Create Intro</Row>
    <Button bsStyle="primary" onClick={() => props.history.push('/recordings/new/layers')}>Next</Button>
  </Grid>
);

export default CreateIntro;
