import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

import classes from './FixtureStatus.module.css';

const FixtureStatus = ({ fixture }) => {
  let scores = `${fixture.goalsHomeTeam} - ${fixture.goalsAwayTeam}`;
  if (fixture.statusShort === 'NS') {
    scores = '-- / --';
  }

  let venue = (
    <div className={classes.venue}>
      {fixture.venue}
    </div>
  )
  if (fixture.league.flag) {
    venue = (
      <div className={classes.venue}>
        {fixture.venue}
        <img src={fixture.league.flag} width={25} alt={'flag'} />
      </div>
    )
  }

  return (
    <div className={classes.fixtureStatus}>
      <div className={classes.fixtureDate}>
        {moment(fixture.event_timestamp * 1000).format('DD.MM.YY hh:mm a')}
      </div>
      <div>
        <Link
          to={{
            pathname: '/fixture',
            state: { id: fixture.fixture_id, }
          }}
          className={classes.score}
        >
          {scores}
        </Link>
      </div>
      <div className={fixture.statusShort === 'FT' ? classes.finished : classes.waited}>
        {fixture.status}
      </div>
      {venue}
    </div>
  )
}

export default FixtureStatus;
