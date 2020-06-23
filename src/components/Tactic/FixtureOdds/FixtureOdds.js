import React, { useState, useEffect } from 'react';

import { Spin, Row, Col } from 'antd';

import BookmakerOdds from './BookmakerOdds/BookmakerOdds';
import { fetchFixtureOdds } from '../../../FakeData/FakeData';

const FixtureOdds = () => {
  const [odds, setOdds] = useState([]);

  useEffect(() => {
    fetchFixtureOdds()
      .then(response => response.api.results.odds[0])
      .then(odds => odds.bookmakers)
      .then(bookmakersOdds => setOdds(bookmakersOdds))
      .catch(error => console.log(error))
  }, [])

  if (odds.length === 0) return <Spin />;

  return (
    <Row>
      {
        odds.map((odd, index) => (
          <Col
            key={index}
            xs={{ span: 22, offset: 1 }}
            sm={{ span: 22, offset: 1 }}
            md={{ span: 20, offset: 2 }}
            lg={{ span: 14, offset: 5 }}
          >
            <BookmakerOdds odd={odd} key={index} />
          </Col>
        ))
      }
    </Row>
  )
}

export default FixtureOdds;
