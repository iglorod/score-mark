import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Round.module.css';

const Round = ({ round, current }) => {
  return (
    <div className={current ? classes.currentRound : classes.round}>
      <Link
        to={{
          pathname: '/fixtures',
          state: { round, }
        }}
        className={classes.roundLink}
      >
        {round.split('_-_')[1]}
      </Link>
    </div>
  )
}

export default Round;
