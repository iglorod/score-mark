import React, { useState, useEffect } from 'react';

import FixturesItems from '../FixturesItems/FixturesItems';
import { todayFixtures } from '../../FakeData/FakeData';

const Fixtures = () => {
  const [fixtures, setFixtures] = useState([]);

  useEffect(() => {
    todayFixtures()
      .then(response => response.api.results.fixtures)
      .then(fixtures => setFixtures(fixtures))
  }, [])

  return (
    <div>
      <FixturesItems fixtures={fixtures} />
    </div>
  )
}

export default Fixtures;
