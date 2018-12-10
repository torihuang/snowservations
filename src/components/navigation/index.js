import React from 'react';
import {
  Grid, Row, Col, Glyphicon
} from 'react-bootstrap';

const Navigation = (props) => (
  <Grid className="navigation-screen">
    <Row>
      <Col className="center-align" xs={2} sm={2} md={2} lg={2}>
        <h3><Glyphicon glyph="home" /></h3>
      </Col>
      <Col className="center-align" xs={8} sm={8} md={8} lg={8}>
        <h3>SNOWSERVATIONS</h3>
      </Col>
      <Col xs={2} sm={2} md={2} lg={2}></Col>
    </Row>
  </Grid>
);

export default Navigation;
