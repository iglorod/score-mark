import React from 'react';

import classes from './FixtureStatus.module.css';

const FixtureStatus = ({ fixture }) => {
  return (
    <div>
      <div className={classes.score}>
        {fixture.goalsHomeTeam} - {fixture.goalsAwayTeam}
      </div>
      <div className={fixture.status.includes('Finished') ? classes.finished : classes.waited}>
        {fixture.status}
      </div>
    </div>
  )
}

export default FixtureStatus;
