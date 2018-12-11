import React from 'react';
import {
  Grid, Row, Col, Glyphicon
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = (props) => (
  <Grid className="navigation-screen app-body">
    <Row>
      <Col className="center-align" xs={2} sm={2} md={2} lg={2}>
        <Link to="/">
          <h2><Glyphicon glyph="home" /></h2>
        </Link>
      </Col>
      <Col className="center-align" xs={8} sm={8} md={8} lg={8}>
        <h2>SNOWSERVATIONS</h2>
      </Col>
      <Col xs={2} sm={2} md={2} lg={2}></Col>
    </Row>
  </Grid>
);

export default Navigation;
