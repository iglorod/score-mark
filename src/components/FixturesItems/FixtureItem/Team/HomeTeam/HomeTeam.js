import React from 'react';
import { Link } from 'react-router-dom';

import { Progress } from 'antd';

import classes from '../Team.module.css';

const HomeTeam = ({ fixture, winningPercent }) => {
  return (
    <div className={classes.clubData}>
      <div>
        <img src={fixture.homeTeam.logo} width={70} alt={'home'} />
      </div>
      <div className={classes.dateArea}>
        <div>
          <Link
            className={classes.clubName}
            to={{
              pathname: '/club',
              state: {
                id: fixture.homeTeam.team_id,
              }
            }}>
            {fixture.homeTeam.team_name}
          </Link>
        </div>
        <div className={classes.additionalData}>{fixture.round}</div>
        <div><Progress strokeWidth={5} percent={winningPercent.replace(/%/, '')} /></div>
      </div>
    </div>
  )
}

export default HomeTeam;
