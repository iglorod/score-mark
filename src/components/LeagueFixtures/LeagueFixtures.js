import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { Spin } from 'antd';

import { leagueRounds, currentLeagueRound } from '../../FakeData/FakeData';
import Round from './Round/Round';
import classes from './LeagueFixtures.module.css';

const LeagueFixtures = ({ windowWidth }) => {
  const [rounds, setRounds] = useState([]);
  const [currentRound, setCurrentRound] = useState(null);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //axios.get(`https://api-football-v1.p.rapidapi.com/v2/fixtures/date/2020-02-06`)
    // .then(response => response.data.api.results.fixtures)
    leagueRounds()
      .then(response => response.api.results.fixtures)
      .then(rounds => setRounds(rounds))
      .then(() => setLoading(false))
      .catch(error => console.log(error))
  }, [])

  useEffect(() => {
    currentLeagueRound()
      .then(response => response.api.results.fixtures[0])
      .then(round => setCurrentRound(round))
      .catch(error => console.log(error))
  })

  useEffect(() => {
    const slidesCount = Math.trunc((windowWidth - 100) / 200);
    if (slidesToShow !== slidesCount) {
      setSlidesToShow(slidesCount || 1);
    }
  }, [windowWidth])

  if (loading) return <Spin />

  return (
    <div>
      <div className={classes.componentTitle}>{'Football Tours'}</div>
      <div className={classes.rounds}>
        {
          rounds.map((round, index) => (
            <Round key={index} round={round} current={currentRound === round} />
          ))
        }
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    windowWidth: state.mode.windowWidth,
  }
}

export default connect(mapStateToProps)(LeagueFixtures);
