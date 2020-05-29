import React, { useState, useEffect } from 'react';

import Standing from '../Standing/Standing';
import FixturesItems from '../FixturesItems/FixturesItems';
import { todayFixtures } from '../../FakeData/FakeData';

const League = () => {
  const [fixtures, setFixtures] = useState([]);

  useEffect(() => {
    todayFixtures()   //fetch fixtures by league_id
      .then(response => response.api.results.fixtures)
      .then(fixtures => setFixtures(fixtures))
  }, [])

  return (
    <div>
      <Standing leagueId={'id'} />
      <FixturesItems fixtures={fixtures} />
    </div>
  )
}

export default League;
