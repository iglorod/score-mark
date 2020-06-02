import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { connect } from 'react-redux';

import { Spin } from 'antd';

import { leagueRounds } from '../../FakeData/FakeData';
import Round from './Round/Round';
import classes from './LeagueFixtures.module.css';

const LeagueFixtures = ({ windowWidth }) => {
  const [rounds, setRounds] = useState([]);
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
    const slidesCount = Math.trunc((windowWidth - 100) / 200);
    if (slidesToShow !== slidesCount) {
      setSlidesToShow(slidesCount || 1);
    }
  }, [windowWidth])

  if (loading) return <Spin />

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1
  };

  return (
    <div className={classes.rounds}>
      <div className={classes.componentTitle}>{'Football Scores & Fixtures'}</div>
      <Slider {...settings}>
        {
          rounds.map((round, index) => (
            <Round key={index} round={round} />
          ))
        }
      </Slider>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    windowWidth: state.mode.windowWidth,
  }
}

export default connect(mapStateToProps)(LeagueFixtures);
