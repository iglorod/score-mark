import React from 'react';

import HomeTeam from './Team/HomeTeam/HomeTeam';
import AwayTeam from './Team/AwayTeam/AwayTeam';
import FixtureStatus from './FixtureStatus/FixtureStatus';
import classes from './Fixture.module.css';

const Fixture = ({ fixture }) => {
  return (
    <div className={classes.fixture}>
      <HomeTeam fixture={fixture} />
      <FixtureStatus fixture={fixture} />
      <AwayTeam fixture={fixture} />
    </div>
  )
}

export default Fixture;
