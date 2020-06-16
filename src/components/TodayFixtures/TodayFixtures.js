import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { connect } from 'react-redux';

import { todayFixtures } from '../../FakeData/FakeData';

import Fixture from './Fixture/Fixture';
import './TodayFixtures.css';

const TodayFixtures = ({ windowWidth }) => {
  const [fixtures, setFixtures] = useState([]);
  const [slidesToShow, setSlidesToShow] = useState(1);

  useEffect(() => {
    //axios.get(`https://api-football-v1.p.rapidapi.com/v2/fixtures/date/2020-02-06`)
    // .then(response => response.data.api.results.fixtures)
    todayFixtures()
      .then(response => response.api.results.fixtures)
      .then(fixtures => setFixtures(fixtures))
      .catch(error => console.log(error))
  }, [])

  useEffect(() => {
    const slidesCount = Math.trunc((windowWidth - 100) / 300);
    if (slidesToShow !== slidesCount) {
      setSlidesToShow(slidesCount || 1);
    }
  }, [windowWidth])

  if (fixtures.length === 0) return <div className={'dot-pulse'}></div>;

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'linear'
  };

  return (
    <div className={'fixtures-list'}>
      <Slider {...settings}>
        {
          fixtures.map((fixture, index) => (
            <Fixture key={index} fixture={fixture} />
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

export default connect(mapStateToProps)(TodayFixtures);
