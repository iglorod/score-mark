import React from 'react';

import classes from './GoalsStats.module.css';

const GoalsStats = ({ player }) => {
  return (
    <div className={classes.goalsStats}>
      <div>
        <span className={classes.totalGoals}>{player.goals.total}</span>
        <span>Goals scored</span>
      </div>
      <div>
      <span className={classes.assistsGoals}>{player.goals.assists}</span>
        <span>Assists</span>
      </div>
    </div>
  )
}

export default GoalsStats;
