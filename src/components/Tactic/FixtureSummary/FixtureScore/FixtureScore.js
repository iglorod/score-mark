import React from 'react';

import classes from './FixtureScore.module.css';

const FixtureScore = ({ homeGoals, awayGoals, statusShort }) => {
  return (
    <div className={classes.fixtureScore}>
      <div className={classes.score}>
        {homeGoals} : {awayGoals}
      </div>
      <div className={classes.status}>
        {statusShort}
      </div>
    </div>
  )
}

export default FixtureScore;
