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
              pathname: '/club',
              state: {
                id: fixture.awayTeam.team_id,
              }
            }}>
            {fixture.awayTeam.team_name}
          </Link>
        </div>
        <div>
          <img src={fixture.awayTeam.logo} width={25} alt={'home'} />
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
        {`${fixture.elapsed}' m.`}
      </div>
    </div>
  )
}

export default AwayTeam;
