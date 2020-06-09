import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Row, Col } from 'antd';

import PlayerInfo from './PlayerInfo/PlayerInfo';
import ClubSquad from './ClubSquad/ClubSquad';
import { clearPlayerDataActionCreator } from '../../store/player/actions';
import classes from './Player.module.css';

const Player = (props) => {
  const { clearPlayerData } = props;

  useEffect(() => {
    return () => {
      clearPlayerData();
    }
  }, [clearPlayerData])

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

const mapDispatchToProps = (dispatch) => {
  return {
    clearPlayerData: () => { dispatch(clearPlayerDataActionCreator()) },
  }
}

export default connect(null, mapDispatchToProps)(Player);
