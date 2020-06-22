import React from 'react';
import { Link } from 'react-router-dom';

import { Progress } from 'antd';

import classes from '../Team.module.css';

const AwayTeam = ({ fixture, winningPercent }) => {
  return (
    <div className={classes.clubData}>
      <div className={classes.dateArea}>
        <div>
          <Link
            className={classes.clubName}
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
        <div><Progress strokeWidth={5} percent={winningPercent.replace(/%/, '')} /></div>
      </div>
      <div>
        <img src={fixture.awayTeam.logo}className={classes.teamLogo} alt={'home'} />
      </div>
    </div>
  )
}

export default AwayTeam;
