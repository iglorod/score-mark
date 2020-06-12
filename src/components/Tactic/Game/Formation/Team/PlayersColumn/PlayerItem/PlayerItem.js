import React from 'react';
import { Link } from 'react-router-dom';

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

  if (selectedPlayerId !== null && selectedPlayerId !== player.player_id) {
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
        <Link
          to={{
            pathname: '/player',
            state: { id: player.player_id }
          }}
          className={classes.playerLink}
        >
          <span className={classes.playerNumber}>{player.number}. </span>
          {player.player}
        </Link>
      </div>
    </div>
  )
}

export default React.memo(PlayerItem);
