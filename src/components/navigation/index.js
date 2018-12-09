import React from 'react';
import {
  Grid, Row, Col, Glyphicon
} from 'react-bootstrap';

const Navigation = (props) => (
  <Grid className="navigation-screen">
    <Row>
      <Col xs={2} sm={2} md={2} lg={2}>
        <Glyphicon glyph="home" />
      </Col>
      <Col xs={4} sm={4} md={4} lg={4}>Snowservations</Col>
      <Col xs={2} sm={2} md={2} lg={2}></Col>
    </Row>
  </Grid>
);

export default Navigation;
