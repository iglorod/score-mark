import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Row, Col } from 'antd';

import PlayerInfo from './PlayerInfo/PlayerInfo';
import ClubSquad from './ClubSquad/ClubSquad';
import { clearPlayerDataActionCreator } from '../../store/player/actions';
import { openCommentsActionCreator, closeCommentsActionCreator } from '../../store/mode/actions';
import classes from './Player.module.css';

const Player = (props) => {
  const { clearPlayerData } = props;

  useEffect(() => {
    return () => {
      clearPlayerData();
    }
  }, [clearPlayerData])

  useEffect(() => {
    if (props.playerStats.length === 0) return;

    const playerId = props.playerStats[0].player_id;
    props.openComments(`http://localhost:3000/player/${playerId}`, playerId.toString(), 'Player');

    return () => {
      props.closeComments();
    }
  }, [props.playerStats, props.openComments, props.closeComments])

  return (
    <Row>
      <Col md={{ span: 22, offset: 1 }} lg={{ span: 18, offset: 3 }} >
        <div className={classes.player}>
          <PlayerInfo />
          <ClubSquad />
        </div>
      </Col>
    </Row>
  )
}

const mapStateToProps = (state) => {
  return {
    playerStats: state.plr.stats,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearPlayerData: () => { dispatch(clearPlayerDataActionCreator()) },
    openComments: (url, identifier, title) => { dispatch(openCommentsActionCreator(url, identifier, title)) },
    closeComments: () => { dispatch(closeCommentsActionCreator()) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);
