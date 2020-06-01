import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Round.module.css';

const Round = ({ round }) => {
  return (
    <Link to={{
      pathname: '/fixture',
      state: { round, }
    }}>
      <div className={classes.round}>
        {round.split('_').join(' ')}
      </div>
    </Link>
  )
}

export default Round;
