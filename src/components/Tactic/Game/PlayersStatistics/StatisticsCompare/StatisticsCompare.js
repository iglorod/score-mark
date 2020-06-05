import React from 'react';

import classes from './StatisticsCompare.module.css';

const StatisticsCompare = ({ title, home, away }) => {
  const homeClasses = [classes.homeStats];
  const awayClasses = [classes.awayStats]

  if (home > away) {
    homeClasses.push(classes.bold)
  } 
  else if (home < away){
    awayClasses.push(classes.bold)
  }

  return (
    <div className={classes.statistics}>
      <div className={classes.title}>{title}</div>
      <div className={classes.body}>
        <span className={homeClasses.join(' ')}>{home}</span>
        <span className={classes.dash}>-</span>
        <span className={awayClasses.join(' ')}>{away}</span>
      </div>
    </div>
  )
}

export default StatisticsCompare;
