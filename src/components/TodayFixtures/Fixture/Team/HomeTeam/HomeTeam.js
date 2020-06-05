import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import classes from '../Team.module.css';

const HomeTeam = ({ fixture }) => {
  return (
    <div>
      <div className={classes.dateArea}>
        <div>
          <img src={fixture.homeTeam.logo} width={25} alt={'home'} />
        </div>
        <div>
          <Link
            className={classes.fixtureDate}
            to={{
              pathname: '/club',
              state: {
                id: fixture.homeTeam.team_id,
              }
            }}>
            {fixture.homeTeam.team_name}
          </Link>
        </div>
      </div>
      <div>
        <Link
          className={classes.fixtureLeague}
          to={{
            pathname: '/league',
            state: {
              id: fixture.league_id,
            }
          }}>
          {fixture.league.name}
        </Link>
      </div>
      <div>
      {moment(fixture.event_timestamp * 1000).format('hh:mm a')}
      </div>
    </div>
  )
}

export default HomeTeam;
