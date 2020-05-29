import React from 'react';
import { Link } from 'react-router-dom';

import classes from '../Team.module.css';

const AwayTeam = ({ fixture }) => {
  return (
    <div>
      <div className={classes.dateArea}>
        <div>
          <Link
            className={classes.fixtureDate}
            to={{
              pathname: '/team',
              state: {
                id: fixture.awayTeam.team_id,
              }
            }}>
            {fixture.awayTeam.team_name}
          </Link>
        </div>
        <div>
          <img src={fixture.awayTeam.logo} height={35} alt={'home'} />
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
          <img src={fixture.league.logo} width={25} alt={'league'} />
        </Link>
      </div>
    </div>
  )
}

export default AwayTeam;
