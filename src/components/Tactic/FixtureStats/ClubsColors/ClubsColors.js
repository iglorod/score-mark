import React from 'react';

import classes from './ClubsColors.module.css';

const ClubsColors = ({ homeName, awayName }) => {
  return (
    <div className={classes.clubsColors}>
      <div className={classes.club}>
        <div className={classes.firstColor}></div>
        <div>{homeName}</div>
      </div>
      <div className={classes.club}>
        <div className={classes.secondColor}></div>
        <div>{awayName}</div>
      </div>
    </div>
  )
}

export default ClubsColors;
