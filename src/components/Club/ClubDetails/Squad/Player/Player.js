import React from 'react';

import classes from './Player.module.css';

const Player = ({ player, index }) => {
  return (
    <div className={classes.player}>
      <div className={classes.order}>{index}</div>
      <div>
        <div className={classes.playerName}>{player.firstname} {player.lastname}</div>
        <div className={classes.playerAgeAndPos}>{player.age}, {player.position}</div>
      </div>
      <div>{player.height}</div>
      <div>{player.weight}</div>
      <div>{player.games.lineups}</div>
      <div>{player.games.minutes_played}</div>
      <div>{player.goals.total || '-'}</div>
      <div>{player.goals.assists || '-'}</div>
      <div>{player.cards.yellow}</div>
      <div>{player.cards.red}</div>
      <div>{player.passes.accuracy}</div>
      <div>{player.tackles.interceptions}</div>
      <div>{player.dribbles.success}</div>
      <div className={classes.rating}>{player.rating}</div>
    </div>
  )
}

export default Player;
