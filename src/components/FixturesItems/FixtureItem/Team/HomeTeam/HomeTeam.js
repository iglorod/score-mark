import React from 'react';
import { Link } from 'react-router-dom';

import classes from '../Team.module.css';

const HomeTeam = ({ fixture }) => {
  return (
    <div>
      <div className={classes.dateArea}>
        <div>
          <img src={fixture.homeTeam.logo} height={35} alt={'home'} />
        </div>
        <div>
          <Link
            className={classes.fixtureDate}
            to={{
              pathname: '/team',
              state: {
                id: fixture.homeTeam.team_id,
              }
            }}>
            {fixture.homeTeam.team_name}
          </Link>
        </div>
      </div>
      <div className={classes.additionalData}>{fixture.round}</div>
    </div>
  )
}

export default HomeTeam;
