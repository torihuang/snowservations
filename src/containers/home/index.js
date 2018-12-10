import React from 'react';
import {
  Grid, Row, Col, Button
} from 'react-bootstrap';
import { SnowTable } from '../../components';

const compressionTest = {
  headers: ['Term', 'Description'],
  orderOfColumns: ['term', 'description'],
  rowValues: [
    {
      term: 'Very Easy',
      description: 'Fractures during cutting or insertion of shovel.',
    },
    {
      term: 'Easy',
      description: 'Fracture within 10 light taps using finger tips only.',
    },
    {
      term: 'Moderate',
      description: 'Fractures within 10 moderate taps from elbow using finger tips.',
    },
    {
      term: 'Hard',
      description: 'Fractures within 10 firm taps from whole arm using palm or fist.',
    },
    {
      term: 'No Fracture',
      description: 'Does not fracture.',
    },
  ],
};

const extendedColumnTest = {
  headers: ['Code', 'Description'],
  orderOfColumns: ['code', 'description'],
  rowValues: [
    {
      code: 'ECTPV',
      description: 'Fractures during cutting or insertion of shovel.',
    },
    {
      code: 'ECTP ##',
      description: 'Fracture initiates and propagates across the entire column on the ## tap.',
    },
    {
      code: 'ECTN ##',
      description: 'Fracture initiates on the ## tap but does not propagate across the column.',
    },
    {
      code: 'ECTX',
      description: 'No fracture occurs during the test',
    },
  ],
};

const Home = (props) => (
  <Grid>
    <Row>
      <Col xs={12} sm={12} md={12} lg={12}>
        <Button bsStyle="primary" onClick={() => props.history.push('/recordings/new/introduction')}>New Snowservation</Button>
      </Col>
    </Row>
    <Row>
      <Col xs={12} sm={12} md={3} lg={3}>
        <h3 className="bold">Compression Test</h3>
      </Col>
      <Col xs={12} sm={12} md={9} lg={9}>
        <div className="left-align">30 x 30cm column, isolate to 100 - 120cm max depth from snow surface</div>
      </Col>
    </Row>
    <Row>
      <Col xs={12} sm={12} md={3} lg={3}>
        <h3 className="bold">Deep Tap Test</h3>
      </Col>
      <Col xs={12} sm={12} md={9} lg={9}>
        <div className="left-align">30 x 30cm column, isolate to 10cm below the targeted weak layer. Remove all but 15 cm of the snow above the targeted weak layer.</div>
      </Col>
    </Row>
    <Row>
      <Col xs={12} sm={12} md={12} lg={12}>
        <SnowTable
          headers={compressionTest.headers}
          rows={compressionTest.rowValues}
          title="compress-text"
          orderOfColumns={compressionTest.orderOfColumns} />
      </Col>
    </Row>
    <Row>
      <Col xs={12} sm={12} md={3} lg={3}>
        <h3 className="bold">Extended Column Test</h3>
      </Col>
      <Col xs={12} sm={12} md={9} lg={9}>
        <div className="left-align">30cm upslope x 90cm wide column, isolate 15 to 120 cm deep.</div>
      </Col>
    </Row>
    <Row>
      <Col xs={12} sm={12} md={12} lg={12}>
        <SnowTable
          headers={extendedColumnTest.headers}
          rows={extendedColumnTest.rowValues}
          title="compress-text"
          orderOfColumns={extendedColumnTest.orderOfColumns} />
      </Col>
    </Row>
  </Grid>
);

export default Home;
