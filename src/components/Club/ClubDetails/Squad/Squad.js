import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Spin } from 'antd';
import Player from './Player/Player';
import { fetchClubSquadActionCreator } from '../../../../store/club/actions';

const Squad = (props) => {
  const { players, fetchClub } = props;

  useEffect(() => {
    fetchClub();
  }, [fetchClub])

  if (players.length === 0) return <Spin />;

  return (
    <div>
      {
        Object.values(players).map((player, index) => (
          <Player key={index} index={index + 1} player={player} />
        ))
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    players: state.club.players,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchClub: () => { dispatch(fetchClubSquadActionCreator()) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Squad);
