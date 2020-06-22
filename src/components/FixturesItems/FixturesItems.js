import React from 'react';

import { Row, Col, Divider } from 'antd';

import ModalSpinner from '../UI/ModalSpinner/ModalSpinner';
import FixtureItem from './FixtureItem/FixtureItem';
import classes from './FixturesItems.module.css';

const FixturesItems = ({ fixtures }) => {
  if (fixtures.length === 0) return <ModalSpinner />;

  return (
    <Row className={classes.fixturesRow}>
      {
        fixtures.map((fixture, index) => (
          <Col key={index} xs={{ span: 22, offset: 1 }} sm={{ span: 22, offset: 1 }} md={{ span: 18, offset: 3 }} lg={{ span: 8, offset: 8 }} >
            <FixtureItem fixture={fixture} />
            {(index < fixtures.length - 1) ? <Divider /> : null}
          </Col>
        ))
      }
    </Row>
  )
}


export default FixturesItems;
