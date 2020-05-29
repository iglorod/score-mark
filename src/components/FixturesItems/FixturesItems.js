import React from 'react';

import { Row, Col, Divider } from 'antd';

import FixtureItem from './FixtureItem/FixtureItem';
import classes from './FixturesItems.module.css';

const FixturesItems = ({ fixtures }) => {
  return (
    <Row className={classes.fixturesRow}>
      {
        fixtures.map((fixture, index) => (
          <Col key={index} xs={{ span: 24 }} sm={{ span: 22, offset: 1 }} md={{ span: 18, offset: 3 }} lg={{ span: 8, offset: 8 }} >
            <FixtureItem fixture={fixture} />
            {(index < fixtures.length - 1) ? <Divider /> : null}
          </Col>
        ))
      }
    </Row>
  )
}


export default FixturesItems;