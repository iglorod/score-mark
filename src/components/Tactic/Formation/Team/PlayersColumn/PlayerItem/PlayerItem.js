import React from 'react';

import { Avatar } from 'antd';

import classes from './PlayerItem.module.css';

const PlayerItem = ({ player, away }) => {
  const avatarClasses = [classes.playerAvatar];
  if (away) {
    avatarClasses.push(classes.mainColorAvatar);
  } else {
    avatarClasses.push(classes.secondColorAvatar);
  }

  return (
    <div>
        <Avatar className={avatarClasses.join(' ')}>
          {player.playerStats.rating}
        </Avatar>
      <div className={classes.playerData}>
        <span className={classes.playerNumber}>{player.number}. </span>
        {player.player}
      </div>
    </div>
  )
}

export default PlayerItem;
