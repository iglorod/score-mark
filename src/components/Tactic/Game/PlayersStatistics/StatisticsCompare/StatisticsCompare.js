import React from 'react';

import classes from './StatisticsCompare.module.css';

const StatisticsCompare = ({ title, home, away }) => {
  return (
    <div className={classes.statistics}>
      <div className={classes.title}>{title}</div>
      <div className={classes.body}>
        <span className={classes.homeStats}>{home}</span>
        <span className={classes.dash}>-</span>
        <span className={classes.awayStats}>{away}</span>
      </div>
    </div>
  )
}

export default StatisticsCompare;
