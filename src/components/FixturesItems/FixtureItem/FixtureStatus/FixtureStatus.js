import React from 'react';
import moment from 'moment';

import classes from './FixtureStatus.module.css';

const FixtureStatus = ({ fixture }) => {
  let scores = (
    <div className={classes.score}>
      {fixture.goalsHomeTeam} - {fixture.goalsAwayTeam}
    </div>
  )
  if (fixture.statusShort === 'NS') {
    scores = (
    <div className={classes.score}>
      {'--'} / {'--'}
    </div>
    )
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
      {scores}
      <div className={fixture.statusShort === 'FT' ? classes.finished : classes.waited}>
        {fixture.status}
      </div>
      {venue}
    </div>
  )
}

export default FixtureStatus;
