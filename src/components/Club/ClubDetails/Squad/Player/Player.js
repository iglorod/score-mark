import React from 'react';
import { Link } from 'react-router-dom';

import StatsTooltip from './StatsTooltip/StatsTooltip';
import classes from './Player.module.css';

const Player = ({ player, index }) => {
  return (
    <div className={classes.player}>
      <div className={classes.order}>{index}</div>

      <div>
        <Link to={{
          pathname: '/player',
          state: { player: player.player_id, }
        }}>
          <div className={classes.playerName}>
            {player.firstname} {player.lastname}
          </div>
        </Link>
        <div className={classes.playerAgeAndPos}>{player.age}, {player.position}</div>
      </div>

      <div>{player.height}</div>
      <div>{player.weight}</div>
      <StatsTooltip text={'Lineups'} data={player.games.lineups} />
      <StatsTooltip text={'Minutes played'} data={player.games.minutes_played} />
      <StatsTooltip text={'Goals'} data={player.goals.total || '-'} />
      <StatsTooltip text={'Assists'} data={player.goals.assists || '-'} />
      <StatsTooltip text={'Yellow cards'} data={player.cards.yellow} />
      <StatsTooltip text={'Red cards'} data={player.cards.red} />
      <StatsTooltip text={'Passes accuracy'} data={player.passes.accuracy} />
      <StatsTooltip text={'Interceptions'} data={player.tackles.interceptions} />
      <StatsTooltip text={'Dribbles success'} data={player.dribbles.success} />
      <StatsTooltip
        text={'Rating'}
        className={classes.rating}
        data={(+player.rating).toFixed(1)} />
    </div>
  )
}

export default Player;
