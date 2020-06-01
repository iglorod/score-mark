import React from 'react';

import { Progress } from 'antd';

import classes from './ShotsStats.module.css';

const ShotsStats = ({ player }) => {
  const shortsOnTargetPercent = Math.trunc(player.shots.on * 100 / player.shots.total);

  return (
    <div className={classes.shotsStats}>
      <div className={classes.statsTitle}>
        <div>Shots on target</div>
        <div>Total</div>
      </div>
      <div className={classes.statsData}>
        <Progress type='circle' percent={shortsOnTargetPercent} width={40} />
        <Progress
          className={classes.progressLinecap}
          percent={shortsOnTargetPercent}
          size={'small'}
          showInfo={false} />
        <div className={classes.totalShots}>{player.shots.total}</div>
      </div>
    </div>
  )
}

export default ShotsStats;
