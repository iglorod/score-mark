import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Row, Col, Spin, Divider } from 'antd';

import { topScorers } from '../../FakeData/FakeData';
import TimeStats from './TimeStats/TimeStats';
import ShotsStats from './ShotsStats/ShotsStats';
import GoalsStats from './GoalsStats/GoalsStats';
import classes from './TopScorers.module.css';

const Standing = ({ leagueId }) => {
  const [playerData, setPlayerData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // axios.get(`https://api-football-v1.p.rapidapi.com/v2/leagueTable/${leagueId}`)
    topScorers()
      .then(response => response.api.results.topscorers)
      .then(scorers => setPlayerData(scorers))
      .then(() => setLoading(false))
      .catch(error => console.log(error))
  }, [])

  if (loading) return <Spin />;

  return (
    <Row>
      {
        playerData.map((player, index) => (
          <Col key={index} xs={{ span: 22, offset: 1 }} sm={{ span: 22, offset: 1 }} md={{ span: 20, offset: 2 }} lg={{ span: 12, offset: 6 }} >
            <div className={classes.playerName}>{player.firstname} {player.lastname}</div>
            <div className={classes.playerStats}>
              <TimeStats player={player} />
              <GoalsStats player={player} />
              <ShotsStats player={player} />
            </div>
            {index !== player.length - 1 ? <Divider /> : null}
          </Col>
        ))
      }
    </Row>
  )
}

export default Standing;
