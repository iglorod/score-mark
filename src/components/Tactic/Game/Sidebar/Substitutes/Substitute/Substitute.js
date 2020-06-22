import React from 'react';
import { Link } from 'react-router-dom';

import { Avatar } from 'antd';

import classes from './Substitute.module.css';

const Subtitute = ({ player, away }) => {
  return (
    <div className={classes.player}>
      <div className={classes.playerPos}>
        <Avatar
          shape='square'
          size='small'
          className={away ? classes.awayAvatar : classes.homeAwatar}
        >
          {player.pos}
        </Avatar>
      </div>
      <div>
        <span className={classes.playerNumber}>{player.number}{'.'}</span>
        <Link
          className={classes.playerName}
          to={{
            pathname: '/player',
            state: { id: player.player_id }
          }}
        >
          {player.player}
        </Link>
      </div>
    </div>
  )
}

export default Subtitute;
