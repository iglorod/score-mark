import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import PlayerItem from './PlayerItem/PlayerItem';
import { selectPlayerActionCreator } from '../../../../../../store/fixture/actions';
import classes from './PlayersColumn.module.css';

const PlayersColumn = (props) => {
  const { count, order, showedPlayers, team, playersStats } = props;
  const playersToShow = [];

  useEffect(() => {
    showedPlayers.clear();
  })

  for (let i = 0; i < order.length; i++) {
    const position = order[i];
    for (let j = 0; j < team.length; j++) {
      const player = team[j];

      if (player.pos !== position || showedPlayers.has(player)) continue;
      if (playersToShow.length === +count) break;

      const playerStats = playersStats.find(playerStats => playerStats.player_id === player.player_id);
      player.playerStats = playerStats;
      playersToShow.push(player);
      showedPlayers.add(player);
    }
  }

  return (
    <div className={classes.players} style={{ width: `${props.width}%` }}>
      {
        playersToShow.map((player, key) => (
          <PlayerItem
            key={key}
            away={props.away}
            player={player}
            selectedPlayerId={props.away ? props.awayPlayerId : props.homePlayerId}
            selectPlayer={props.selectPlayer.bind(this, player.player_id, props.away)} />
        ))
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    homePlayerId: state.fxt.homePlayerId,
    awayPlayerId: state.fxt.awayPlayerId,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectPlayer: (playerId, isAway) => { dispatch(selectPlayerActionCreator(playerId, isAway)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayersColumn);
