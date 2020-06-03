import React from 'react';
import { Link } from 'react-router-dom';

import classes from './ClubName.module.css';

const ClubName = ({ club }) => {
  return (
    <div>
      <Link
        className={classes.clubName}
        to={{
          pathname: '/club',
          state: { id: club.team_id }
        }}
      >
        {club.team_name}
      </Link>
    </div >
  )
}

export default ClubName;
