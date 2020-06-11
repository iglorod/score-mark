import React from 'react';
import { Link } from 'react-router-dom';

import classes from './FixtureStatus.module.css';

const FixtureStatus = ({ fixture }) => {
  return (
    <div>
      <div>
        <Link
          to={{
            pathname: '/fixture',
            state: { id: fixture.fixture_id, }
          }}
          className={classes.score}
        >
          {fixture.goalsHomeTeam} - {fixture.goalsAwayTeam}
        </Link>
      </div>
      <div className={fixture.statusShort === 'FT' ? classes.finished : classes.waited}>
        {fixture.status}
      </div>
    </div>
  )
}

export default FixtureStatus;
