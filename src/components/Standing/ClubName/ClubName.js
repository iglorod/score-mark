import React from 'react';
import { Link } from 'react-router-dom';

import classes from './ClubName.module.css';

const ClubName = ({ team }) => {
  return (
    <Link to={{
      pathname: '/club',
      state: { id: team.team_id }
    }}>
      <img src={team.logo} className={classes.clubLogo} alt={'team'} />
      <span className={classes.clubName}>{team.teamName}</span>
    </Link>
  )
}

export default ClubName;
