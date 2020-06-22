import React from 'react';

import { Avatar } from 'antd';

import classes from './PlayerItem.module.css';

const PlayerItem = (props) => {
  const { player, away, selectedPlayerId } = props;

  const avatarClasses = [classes.playerAvatar];
  if (away) {
    avatarClasses.push(classes.mainColorAvatar);
  } else {
    avatarClasses.push(classes.secondColorAvatar);
  }

  if (selectedPlayerId >= 0 && selectedPlayerId !== player.player_id) {
    avatarClasses.push(classes.transparentPlayer);
  }

  return (
    <div>
      <Avatar
        className={avatarClasses.join(' ')}
        onClick={props.selectPlayer}
      >
        {player.playerStats.rating}
      </Avatar>
      <div className={classes.playerData}>
        <span className={classes.playerNumber}>{player.number}. </span>
        {player.player}
      </div>
    </div>
  )
}

export default React.memo(PlayerItem);
